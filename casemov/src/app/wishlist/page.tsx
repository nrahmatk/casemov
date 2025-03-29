"use client";

import { formatRupiah } from "@/components/formatRupiah";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface WishlistItem {
  _id: string;
  productId: string;
  products: {
    _id: string;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}

const fetchWishlist = async (token: string): Promise<WishlistItem[]> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/wishlist",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );


  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  return await response.json();
};

const handleRemove = async (productId: string, token: string) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/wishlist",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    }
  );

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Get token from localStorage
    const accessToken = localStorage.getItem("access_token");
    setToken(accessToken);

    console.log(accessToken)

    if (!accessToken) {
      setError("Authentication required");
      setLoading(false);
      return;
    }

    const loadWishlist = async () => {
      try {
        const data = await fetchWishlist(accessToken);
        setWishlist(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
  }, []);

  const handleRemoveClick = async (productId: string) => {
    if (!token) {
      setError("Authentication required");
      return;
    }

    try {
      await handleRemove(productId, token);
      setWishlist((prev) =>
        prev.filter((item) => item.productId !== productId)
      );
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const loadingIcon = () => {
    return (
      <div className="flex justify-center items-center h-[30vh]">
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
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-[50vh]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
        {loading && loadingIcon()}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative"
            role="alert"
          >
            <span className="font-bold">Error: </span>
            <span className="block sm:inline"> Please log in to continue.</span>
            <div className="mt-4">
              <a
                href="/login"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
              >
                Go to Login
              </a>
            </div>
          </div>
        )}
        {!loading && !error && (
          <>
            {wishlist.length === 0 && (
              <p className="text-xl">Your wishlist is empty.</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {wishlist.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={item.products.thumbnail}
                    alt={item.products.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2 text-center">
                      {item.products.name}
                    </h2>
                    <p className="text-gray-800 text-center">
                      {formatRupiah(item.products.price)}
                    </p>
                    <button
                      className="mt-4 p-2 bg-amber-500 text-white w-full rounded-md"
                      onClick={() => handleRemoveClick(item.productId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
