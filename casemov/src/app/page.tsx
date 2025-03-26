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
import Image from "next/image";
import Link from "next/link";

async function fetchData() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?page=1&limit=8`
  );
  return data.json();
}

export default async function Home() {
  const data = await fetchData();
  const products: ProductModel[] = data.data;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-0 md:py-24 lg:py-32 lg:pt-16">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-sm">
                  <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>{" "}
                  New Collection Available
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Elevate Your Device With Our{" "}
                  <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                    Premium Cases
                  </span>
                </h1>
              </div>
              <p className="max-w-[600px] text-lg text-gray-600 md:text-xl">
                Explore our curated selection of phone cases designed for style
                and durability. Find the perfect case that reflects your
                personality while providing superior protection.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/products">
                  <button className="group inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-8 text-sm font-medium text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm"
                    >
                      <img
                        src={`https://randomuser.me/api/portraits/thumb/men/${
                          i + 20
                        }.jpg`}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">500+</span> happy
                  customers
                </p>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-500/5 blur-3xl"></div>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-gray-100 bg-white/80 p-2 shadow-xl backdrop-blur transition-all duration-300 hover:shadow-2xl lg:p-3">
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-white">
                  <img
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1742907339/lrjbznksv7kih90a26hh.jpg"
                    alt="Premium phone case collection"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 lg:translate-y-4">
                  <p className="font-medium text-gray-900">
                    Discover our premium collection
                  </p>
                  <p className="text-sm text-gray-600">
                    Durable, stylish, and perfectly fitted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-screen-xl">
        {/* Case Options Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 flex flex-wrap items-center">
              <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-amber-500">
                  Our Materials
                </span>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Premium Phone Case Options
                </h2>
                <div className="mt-4 h-1 w-20 rounded bg-amber-500" />
              </div>
              <p className="w-full text-lg leading-relaxed text-gray-600 lg:w-1/2">
                Choose the best mobile phone case that suits your needs and
                style. We offer a variety of cases designed to protect your
                device while enhancing its aesthetics. From maximum protection
                to minimalist designs, find the perfect case for you below.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    className="h-48 w-full transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/dt3bv9rkwricuieiivnb.png"
                    alt="Premium Hybrid Crystal case"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Premium Hybrid Crystal
                </h3>
                <div className="mb-4 h-0.5 w-full bg-gray-100" />
                <p className="text-gray-600">
                  This case combines beauty and strength with hybrid
                  scratch-resistant material and a TPU bumper that protects the
                  camera. The responsive buttons offer a comfortable user
                  experience.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    className="h-48 w-full transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/tl6pbtdig3vsvcnnrch7.png"
                    alt="High Plastic TPE case"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  High Plastic TPE
                </h3>
                <div className="mb-4 h-0.5 w-full bg-gray-100" />
                <p className="text-gray-600">
                  Made from strong TPE plastic, this case provides optimal
                  protection with responsive buttons and bezel protection that
                  keeps the screen safe.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    className="h-48 w-full transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1720236054/ebckbmmlcibtbxy1fh9e.png"
                    alt="Blackmatte Texture case"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Blackmatte Texture
                </h3>
                <div className="mb-4 h-0.5 w-full bg-gray-100" />
                <p className="text-gray-600">
                  A case with an elegant matte texture and soft inner lining for
                  extra protection. The black matte design provides a premium
                  look and maximum protection.
                </p>
              </div>

              <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    className="h-48 w-full transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/cykyz1bjeaojxlzhe5v7.png"
                    alt="Premium Softcase Antiknock case"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Premium Softcase Antiknock
                </h3>
                <div className="mb-4 h-0.5 w-full bg-gray-100" />
                <p className="text-gray-600">
                  This premium soft case is specially designed to protect your
                  phone from impacts. The soft yet strong material ensures your
                  device&apos;s safety with an elegant style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-amber-500">
                Featured Collection
              </span>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Products
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded bg-amber-500" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <Link
                  href={`/products/${product.slug}`}
                  key={product._id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      alt={product.name}
                      className="h-full w-full transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      src={product.thumbnail || "/placeholder.svg"}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-center text-lg font-medium text-gray-900 group-hover:text-amber-500">
                      {product.name}
                    </h3>
                    <p className="text-center text-lg font-bold text-amber-500">
                      {formatRupiah(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link
                href="/products"
                className="inline-flex items-center rounded-full bg-amber-500 px-8 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-amber-500">
                Our Advantages
              </span>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Casemov?
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded bg-amber-500" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <Package className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Stock Up To Date
                </h3>
                <p className="text-gray-600">
                  We provide a wide range of cases for all types of phones, from
                  older models to the latest ones!
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Sharp Print Results
                </h3>
                <p className="text-gray-600">
                  Enjoy phone cases with sharp print results and stunning
                  details. Our cutting-edge printing technology ensures every
                  design looks perfect.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Best Price
                </h3>
                <p className="text-gray-600">
                  Get the best quality at affordable prices. We offer premium
                  phone cases without breaking your bank.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Customer Oriented
                </h3>
                <p className="text-gray-600">
                  We prioritize your satisfaction! Our services are designed to
                  perfectly meet customers needs and desires.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Guaranteed
                </h3>
                <p className="text-gray-600">
                  Shop with peace of mind as every product we offer comes with a
                  guarantee. Your satisfaction is our top priority.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <Truck className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Fast Process
                </h3>
                <p className="text-gray-600">
                  No need to wait long! We ensure that the ordering to delivery
                  process is fast and efficient, so you get your dream phone
                  case promptly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimony />
      </div>
    </div>
  );
}
