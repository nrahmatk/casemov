"use client";

import { ObjectId } from "mongodb";
import { useState } from "react";
import { Modal } from "./modal";
import { useRouter } from "next/navigation";

interface Props {
  productId: ObjectId | string;
}

export default function ButtonAddWishList({ productId }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "info" as "success" | "error" | "info" | "warning",
    title: "",
    message: "",
    showLoginButton: false,
  });

  const handleAddToWishlist = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wishlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId }),
        }
      );

      const result = await res.json();

      if (res.status === 201) {
        setModalState({
          isOpen: true,
          type: "success",
          title: "Added to Wishlist",
          message: result.message,
          showLoginButton: false,
        });
      } else if (res.status === 401) {
        // Handle unauthorized - needs login
        setModalState({
          isOpen: true,
          type: "warning",
          title: "Authentication Required",
          message: "You need to be logged in to add items to your wishlist.",
          showLoginButton: true,
        });
      } else {
        setModalState({
          isOpen: true,
          type: "warning",
          title: "Failed to Add",
          message: result.message,
          showLoginButton: false,
        });
      }
    } catch (error) {
      setModalState({
        isOpen: true,
        type: "error",
        title: "Error",
        message: "Failed to add item to wishlist. Please try again later.",
        showLoginButton: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleLogin = () => {
    router.push("/login");
    closeModal();
  };

  return (
    <>
      <button
        className={`rounded-full min-w-10 h-10 bg-amber-500 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 ${
          isLoading ? "opacity-100 cursor-not-allowed" : "hover:bg-amber-600"
        } transition-colors`}
        onClick={handleAddToWishlist}
        disabled={isLoading}
      >
        {isLoading ? (
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
            viewBox="0 0 100 101"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : (
          <svg
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        )}
      </button>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
        message={modalState.message}
        showLoginButton={modalState.showLoginButton}
        onLogin={handleLogin}
      />
    </>
  );
}