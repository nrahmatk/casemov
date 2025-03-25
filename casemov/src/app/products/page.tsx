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
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const fetchProducts = async (
    isNewSearch = false,
    limit = 4,
    query = searchQuery
  ) => {
    try {
      if (isNewSearch) setIsSearching(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?page=${
          isNewSearch ? 1 : page
        }&limit=${limit}&search=${query}`,
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
    } finally {
      setIsLoading(false);
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setPage(1);
      setHasMore(true);
      fetchProducts(true, 8, searchQuery);
    }, 500);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchQuery]);

  const LoadingCard = () => (
    <div className="bg-white shadow rounded-xl overflow-hidden animate-pulse">
      <div className="aspect-[4/4] bg-gray-200"></div>
      <div className="p-4 flex flex-col items-center">
        <div className="h-6 bg-gray-200 rounded w-3/4 mt-2 mb-2 "></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 mb-10">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-amber-500 mb-8">
          Our Products
        </h1>
        <div className="max-w-lg mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-xl block w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            {isSearching && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="animate-spin h-5 w-5 text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pt-6">
            {[...Array(8)].map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        ) : (
          <InfiniteScroll
            dataLength={data.length}
            next={() => fetchProducts(false, 4)}
            hasMore={hasMore}
            loader={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pt-6">
                {[...Array(4)].map((_, i) => (
                  <LoadingCard key={i} />
                ))}
              </div>
            }
            endMessage={
              <p className="text-center py-36">
                <b className="text-gray-700">Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pt-6">
              {data.map((product) => (
                <CardProduct product={product} key={product._id} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
