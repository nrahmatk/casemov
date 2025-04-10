"use client";

import { successLogin } from "@/actions";
import { Modal } from "@/components/modal";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface MyResponse<T> {
  data: T;
  message: string;
}

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "",
    title: "",
    message: "",
  });

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
  
      setIsLoading(true);
  
      const formData = new FormData(e.currentTarget);
  
      const data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
  
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          cache: "no-store",
        }
      );
  
      const result = (await response.json()) as MyResponse<{
        access_token: string;
      }>;
  
      if (!response.ok) {
        throw new Error(result.message);
      }
      
      // Save token to localStorage
      localStorage.setItem('access_token', result.data.access_token);
      
      // Continue with original successLogin function
      successLogin("/products", result.data.access_token);
    } catch (error) {
      if (error instanceof Error)
        setModalState({
          isOpen: true,
          type: "error",
          title: "Error",
          message: error.message,
        });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 lg:py-24 py-8 mx-auto flex flex-wrap items-center justify-center">
        {/* <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center"> */}
        {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"> */}
        <div className="max-w-md p-8">
          <h1 className="title-font font-medium text-3xl text-gray-900 lg:text-left md:text-center">
            Masuk ke Akun Anda
          </h1>
          <p className="leading-relaxed mt-4">
            Silakan masuk untuk melanjutkan berbelanja dan menikmati berbagai
            penawaran menarik dari kami.
          </p>
        </div>
        {/* <form className="lg:w-2/6 md:w-1/2 bg-gray-100 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"> */}
        <form
          onSubmit={submitHandler}
          className="bg-gray-100 p-8 flex flex-col rounded-lg"
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign In
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {isLoading ? (
            <div role="status">
              <div className="h-12 flex justify-center py-1">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
                  viewBox="0 0 100 101"
                  fill="none"
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
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="h-12 text-white bg-amber-500 border-0 py-2 px-8 hover:bg-amber-600 rounded text-lg focus:outline-none"
            >
              Sign In
            </button>
          )}
          <p className="text-gray-500 mt-3 mx-auto">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-amber-500">
              Create One
            </Link>
          </p>
        </form>
      </div>
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
        message={modalState.message}
      />
    </section>
  );
}
