"use client";

import CardProduct from "@/components/CardProduct";
import { ProductModel } from "@/components/type";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Swal from "sweetalert2";

export default function Products() {
  const [data, setData] = useState<ProductModel[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = async (isNewSearch = false, limit = 4, query = searchQuery) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?page=${isNewSearch ? 0 : page}&limit=${limit}&search=${query}`,
        { cache: "no-store" }
      );
      const result = await res.json();

      if (isNewSearch) {
        setData(result.data);
        setPage(2); 
      } else {
        setData((prev) => [...prev, ...result.data]);
        setPage((prev) => prev + 1);
      }

      if (result.data.length < limit) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      Swal.fire({
        text: "Failed to fetch data",
        confirmButtonColor: "#e9b308",
      });
    }
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setPage(1);
      setHasMore(true);
      fetchProducts(true, 8, searchQuery);
    }, 1000); 

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchQuery]);

  const loadingIcon = () => {
    return (
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
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 mb-10">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-8">
          Our Products
        </h1>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <InfiniteScroll
          dataLength={data.length}
          next={() => fetchProducts(false, 4)} 
          hasMore={hasMore}
          loader={loadingIcon()}
          endMessage={
            <p className="text-center py-36">
              <b className="text-gray-700">Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product) => (
              <CardProduct product={product} key={product._id}/>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
