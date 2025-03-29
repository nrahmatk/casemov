"use client";

import Testimony from "@/components/Testimony";
import { formatRupiah } from "@/components/formatRupiah";
import type { ProductModel } from "@/components/type";
import {
  ArrowRight,
  Check,
  Shield,
  Truck,
  Users,
  Zap,
  Package,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ButtonAddWishList from "@/components/ButtonAddWishList";
import AdvantagesSection from "@/components/advantage";

// Create a client component for the animated content
export default function Home() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?page=1&limit=8`
        );
        const data = await response.json();
        setProducts(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
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
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link href="/products">
                    <button className="group inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-8 text-sm font-medium text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      Shop Collection
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </motion.div>
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
                whileHover={{ y: -5 }}
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
                  whileHover={{ y: -5 }}
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
        {/* Case Options Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 flex flex-wrap items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
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
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
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
              ].map((material, index) => (
                <motion.div
                  key={index}
                  className="group relative rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="mb-5 overflow-hidden rounded-lg">
                    <img
                      className="h-48 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      src={material.image}
                      alt={`${material.name} case`}
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
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <button className="group flex items-center rounded-full border border-amber-500 bg-transparent px-6 py-3 text-sm font-medium text-amber-500 transition-all hover:bg-amber-500 hover:text-white">
                  Learn more about our materials
                  <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12 flex flex-wrap items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
            >
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
            </motion.div>

            {isLoading ? (
              <div className="flex h-96 flex-col items-center justify-center space-y-4">
                <motion.div
                  className="h-12 w-12 rounded-full border-4 border-amber-200 border-t-amber-500"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
                <p className="text-sm text-gray-500">
                  Loading stunning cases...
                </p>
              </div>
            ) : (
              <div className="relative">
                {/* Main product grid */}
                <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                  {products.map((product, index) => (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group relative"
                    >
                      {/* 3D Tilting Card effect */}
                      <motion.div
                        className="perspective-1000 h-full"
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute right-3 top-3 z-10 flex -translate-y-2 flex-col space-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <ButtonAddWishList productId={product?._id} />
                        </div>
                        <Link
                          href={`/products/${product.slug}`}
                          className="group block h-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                          {/* Quick actions overlay */}

                          {/* Product image with hover effect */}
                          <div className="relative aspect-square bg-gray-50">
                            <motion.div
                              className="absolute inset-0 flex items-center justify-center overflow-hidden"
                              whileHover="hover"
                            >
                              <motion.img
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                                src={product.thumbnail || "/placeholder.svg"}
                                variants={{
                                  hover: {
                                    scale: 1.08,
                                    transition: {
                                      duration: 0.6,
                                      ease: [0.25, 1, 0.5, 1],
                                    },
                                  },
                                }}
                              />

                              {/* Gradient overlay on hover */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                                variants={{
                                  hover: { opacity: 1 },
                                }}
                                initial={{ opacity: 0 }}
                              />
                            </motion.div>

                            {/* Product badges */}
                            {index % 3 === 0 && (
                              <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-2 py-1 text-xs font-medium text-white shadow-sm">
                                New
                              </span>
                            )}
                            {index % 4 === 0 && (
                              <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-sm">
                                Sale
                              </span>
                            )}
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
                              <motion.div
                                className="text-gray-500 transition-colors group-hover:text-amber-500"
                                animate={{ x: [0, 3, 0] }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  repeatDelay: 1.5,
                                }}
                              >
                                <ArrowRight className="h-5 w-5" />
                              </motion.div>
                              <span className="text-xs text-gray-500 transition-colors group-hover:text-gray-700">
                                View details
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <motion.div
              className="mt-16 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-full bg-amber-500 px-8 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  View All Products
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <AdvantagesSection />

        {/* Testimonials Section */}
        <Testimony />
      </div>
    </div>
  );
}
