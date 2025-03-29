"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatRupiah } from "@/components/formatRupiah";
import type { ProductModel } from "@/components/type";
import ButtonAddWishList from "@/components/ButtonAddWishList";

// Import AdvantagesSection directly since we want to keep its animations
import AdvantagesSection from "@/components/advantage";
import { useIsMobile } from "@/hooks/useIsMobile";

// Dynamically import Testimony component
const Testimony = dynamic(() => import("@/components/Testimony"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50" />,
});

export default function Home() {
  const isMobile = useIsMobile();
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Intersection observers for lazy loading sections
  const [caseOptionsRef, caseOptionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [testimonyRef, testimonyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Memoize fetch function to prevent recreating on each render
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?page=1&limit=8`
      );
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Only fetch products when the products section is in view
  useEffect(() => {
    fetchProducts();
  }, []);

  // Memoize case options to prevent recreating on each render
  const caseOptions = useMemo(
    () => [
      {
        name: "Premium Hybrid Crystal",
        image:
          "https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/dt3bv9rkwricuieiivnb.png",
        description:
          "Our hybrid crystal cases combine scratch-resistant acrylic backing with flexible TPU bumpers for camera protection and responsive button functionality.",
        feature: "Ultra-Clear Design",
      },
      {
        name: "High Plastic TPE",
        image:
          "https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/tl6pbtdig3vsvcnnrch7.png",
        description:
          "Engineered from durable thermoplastic elastomer, these cases provide excellent drop protection with precise cutouts and raised bezels for screen safety.",
        feature: "6ft Drop Protection",
      },
      {
        name: "Blackmatte Texture",
        image:
          "https://res.cloudinary.com/dszhu92hc/image/upload/v1720236054/ebckbmmlcibtbxy1fh9e.png",
        description:
          "Features a sophisticated matte finish with soft microfiber lining. The smooth yet grippy exterior prevents fingerprints while maintaining a premium feel.",
        feature: "Anti-Fingerprint",
      },
      {
        name: "Premium Softcase Antiknock",
        image:
          "https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/cykyz1bjeaojxlzhe5v7.png",
        description:
          "Utilizes advanced impact-absorbing polymer that disperses shock on contact. Maintains a slim profile while offering military-grade drop protection.",
        feature: "Military-Grade",
      },
    ],
    []
  );

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Keep original animations */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-0 md:py-24 lg:py-32 lg:pt-16">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-2">
                <motion.div
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>{" "}
                  New Collection Available
                </motion.div>
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  Elevate Your Device With Our{" "}
                  <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                    Premium Cases
                  </span>
                </motion.h1>
              </div>
              <motion.p
                className="max-w-[600px] text-lg text-gray-600 md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Explore our curated selection of phone cases designed for style
                and durability. Find the perfect case that reflects your
                personality while providing superior protection.
              </motion.p>
              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link href="/products">
                  <button className="group inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-8 text-sm font-medium text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Learn More
                  </button>
                </Link>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                    >
                      <img
                        src={`https://randomuser.me/api/portraits/thumb/men/${
                          i + 20
                        }.jpg`}
                        alt={`User ${i}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">500+</span> happy
                  customers
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-500/5 blur-3xl"></div>
              <motion.div
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-gray-100 bg-white/80 p-2 shadow-xl backdrop-blur transition-all duration-300 hover:shadow-2xl lg:p-3"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-white">
                  <motion.img
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1742907339/lrjbznksv7kih90a26hh.jpg"
                    alt="Premium phone case collection"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <motion.div
                  className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm transition-transform duration-300 lg:translate-y-4"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <p className="font-medium text-gray-900">
                    Discover our premium collection
                  </p>
                  <p className="text-sm text-gray-600">
                    Durable, stylish, and perfectly fitted
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-screen-xl">
        {/* Case Options Section - Optimized */}
        <section
          ref={caseOptionsRef}
          className="py-16 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-wrap items-center">
              <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-amber-600">
                  Case Technology
                </span>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Protection Meets Style
                </h2>
                <div className="mt-4 h-1 w-16 rounded bg-amber-500" />
              </div>
              <p className="w-full text-base leading-relaxed text-gray-700 lg:w-1/2">
                We&apos;ve engineered our cases to provide exceptional
                protection while maintaining a sleek profile. Discover the
                perfect balance of durability, functionality, and aesthetics.
              </p>
            </div>

            {caseOptionsInView && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {caseOptions.map((material, index) => (
                  <div
                    key={index}
                    className="group relative rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
                  >
                    <div className="mb-5 overflow-hidden rounded-lg">
                      <Image
                        className="h-48 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        src={material.image || "/placeholder.svg"}
                        alt={`${material.name} case`}
                        width={400}
                        height={192}
                      />
                    </div>

                    <div className="absolute -top-2 right-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                      {material.feature}
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-gray-900">
                      {material.name}
                    </h3>

                    <div className="mb-3 h-px w-full bg-gray-100" />

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {material.description}
                    </p>

                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <svg
                        className="mr-1 h-4 w-4 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Wireless charging compatible
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 flex justify-center">
              <div>
                <button className="group flex items-center rounded-full border border-amber-500 bg-transparent px-6 py-3 text-sm font-medium text-amber-500 transition-all hover:bg-amber-500 hover:text-white">
                  Learn more about our materials
                  <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Optimized */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-wrap items-center">
              <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-amber-600">
                  Featured Collection
                </span>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Most Popular Cases
                </h2>
                <div className="mt-4 h-1 w-16 rounded bg-amber-500" />
              </div>
              <p className="w-full text-base leading-relaxed text-gray-700 lg:w-1/2">
                Exceptional protection meets innovative design in our
                bestselling collection, crafted for those who refuse to
                compromise.
              </p>
            </div>

            {isLoading ? (
              <div className="flex h-96 flex-col items-center justify-center space-y-4">
                <div className="h-12 w-12 rounded-full border-4 border-amber-200 border-t-amber-500 animate-spin" />
                <p className="text-sm text-gray-500">
                  Loading stunning cases...
                </p>
              </div>
            ) : (
              <div className="relative">
                {/* Main product grid */}
                <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                  {products.map((product, index) => (
                    <div key={product._id} className="group relative">
                      {/* Simplified card without 3D effects */}
                      <div className="h-full">
                        <div className="absolute right-3 top-3 z-10 flex -translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {productsInView && (
                            <ButtonAddWishList productId={product?._id} />
                          )}
                        </div>
                        <Link
                          href={`/products/${product.slug}`}
                          className="group block h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                          {/* Product image with simplified hover effect */}
                          <div className="relative aspect-square bg-gray-50">
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                              <Image
                                alt={product.name}
                                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                src={product.thumbnail || "/placeholder.svg"}
                                width={400}
                                height={400}
                                loading="lazy"
                              />

                              {/* Gradient overlay on hover */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                            {/* Product badges */}
                            {/* {index % 3 === 0 && (
                              <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-2 py-1 text-xs font-medium text-white shadow-sm">
                                New
                              </span>
                            )}
                            {index % 4 === 0 && (
                              <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-sm">
                                Sale
                              </span>
                            )} */}
                          </div>

                          {/* Product details */}
                          <div className="p-5">
                            <h3 className="mb-1 text-base font-semibold text-gray-900 group-hover:text-amber-500 md:text-lg">
                              {product.name}
                            </h3>

                            {/* Product price & features */}
                            <div className="mb-2 flex items-center justify-between">
                              <p className="text-lg font-bold text-amber-500">
                                {formatRupiah(product.price)}
                              </p>
                              {index % 2 === 0 && (
                                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                                  For{" "}
                                  {
                                    ["iPhone", "Samsung", "Xiaomi", "Oppo"][
                                      index % 4
                                    ]
                                  }
                                </span>
                              )}
                            </div>

                            {/* Divider */}
                            <div className="my-3 h-px w-full bg-gray-100" />

                            {/* Add to cart button */}
                            <div className="flex items-center justify-between">
                              <div className="text-gray-500 transition-colors group-hover:text-amber-500">
                                <ArrowRight className="h-5 w-5" />
                              </div>
                              <span className="text-xs text-gray-500 transition-colors group-hover:text-gray-700">
                                View details
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 flex justify-center">
              <div>
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-full bg-amber-500 px-8 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section - Keep original animations */}
        <AdvantagesSection />

        {/* Testimonials Section - Lazy loaded */}
        <div ref={testimonyRef}>{testimonyInView && <Testimony />}</div>
      </div>
    </div>
  );
}
