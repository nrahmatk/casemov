"use server";

import Footer from "@/components/Footer";
import Testimony from "@/components/Testimony";
import { formatRupiah } from "@/components/formatRupiah";
import { ProductModel } from "@/components/type";
import Image from "next/image";
import Link from "next/link";

async function fetchData() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?page=1&limit=8`);
  return data.json();
}

export default async function Home() {
  const data = await fetchData();
  const products: ProductModel[] = data.data;
  return (
    <div className="bg-gray-100">
      <div className="container max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Best place to choose <br /> your{" "}
                  <span className="text-yellow-500 ">Phone Case</span>
                </h1>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Explore our premium selection of phone cases designed for
                  style and durability. With a wide range of materials and
                  designs, find the perfect case to match your taste and protect
                  your device.
                </p>
                <Link href={"/products"}>
                  <button className=" w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase bg-yellow-500 rounded-lg lg:w-auto hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 transform hover:scale-105 transition duration-300 ease-in-out">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            <div className=" transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="/hero.svg"
                alt="gambar ilustrasi"
              />
            </div>
          </div>
        </div>

        {/* New Products Section */}
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              New Arrivals
            </h1>
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={"/case1.webp"}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={"/case1.webp"}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={"/case1.webp"}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={"/case1.webp"}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Bahan */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Mobile Phone Case Options
                </h1>
                <div className="h-1 w-20 bg-yellow-500 rounded" />
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Choose the best mobile phone case that suits your needs and
                style. We offer a variety of cases designed to protect your
                device while enhancing its aesthetics. From maximum protection
                to minimalist designs, find the perfect case for you below.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-2">
                <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/dt3bv9rkwricuieiivnb.png"
                    alt="content"
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Premium Hybrid Crystal
                  </h2>
                  <div className="h-1 bg-gray-300 rounded mb-4" />
                  <p className="leading-relaxed text-base flex-grow">
                    This case combines beauty and strength with hybrid
                    scratch-resistant material and a TPU bumper that protects
                    the camera. The responsive buttons offer a comfortable user
                    experience.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-2">
                <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/tl6pbtdig3vsvcnnrch7.png"
                    alt="content"
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    High Plastic TPE
                  </h2>
                  <div className="h-1 bg-gray-300 rounded mb-4" />
                  <p className="leading-relaxed text-base flex-grow">
                    Made from strong TPE plastic, this case provides optimal
                    protection with responsive buttons and bezel protection that
                    keeps the screen safe.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-2">
                <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1720236054/ebckbmmlcibtbxy1fh9e.png"
                    alt="content"
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Blackmatte Texture
                  </h2>
                  <div className="h-1 bg-gray-300 rounded mb-4" />

                  <p className="leading-relaxed text-base flex-grow">
                    A case with an elegant matte texture and soft inner lining
                    for extra protection. The black matte design provides a
                    premium look and maximum protection.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-2">
                <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://res.cloudinary.com/dszhu92hc/image/upload/v1720236055/cykyz1bjeaojxlzhe5v7.png"
                    alt="content"
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Premium Softcase Antiknock
                  </h2>
                  <div className="h-1 bg-gray-300 rounded mb-4" />

                  <p className="leading-relaxed text-base flex-grow">
                    This premium soft case is specially designed to protect your
                    phone from impacts. The soft yet strong material ensures
                    your device&apos;s safety with an elegant style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Koleksi */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto bg-white rounded-lg">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center transform hover:scale-105 transition duration-300 ease-in-out">
              Our Product
            </h1>
            <div className="flex flex-wrap -m-4">
              {products.map((product) => (
                <div
                  className="lg:w-1/4 md:w-1/2 p-4 w-full transform hover:scale-105 transition duration-300 ease-in-out"
                  key={product._id}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="block relative h-56 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={product.thumbnail}
                    />
                  </Link>
                  <div className="mt-4">
                    <h2 className="text-gray-900 text-center title-font text-lg font-medium">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-center">
                      {formatRupiah(product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/products"
                className="transform hover:scale-105 transition duration-300 ease-in-out inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
              >
                See More Products
              </Link>
            </div>
          </div>
        </section>

        {/* why */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Why casemov?
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Stock Up To Date
                  </h2>
                  <p className="leading-relaxed text-base">
                    We provide a wide range of cases for all types of phones,
                    from older models to the latest ones!
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <circle cx={6} cy={6} r={3} />
                      <circle cx={6} cy={18} r={3} />
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Sharp Print Results
                  </h2>
                  <p className="leading-relaxed text-base">
                    Enjoy phone cases with sharp print results and stunning
                    details. Our cutting-edge printing technology ensures every
                    design looks perfect.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Best Price
                  </h2>
                  <p className="leading-relaxed text-base">
                    Get the best quality at affordable prices. We offer premium
                    phone cases without breaking your bank.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Customer Oriented
                  </h2>
                  <p className="leading-relaxed text-base">
                    We prioritize your satisfaction! Our services are designed
                    to perfectly meet customers needs and desires.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Guaranteed
                  </h2>
                  <p className="leading-relaxed text-base">
                    Shop with peace of mind as every product we offer comes with
                    a guarantee. Your satisfaction is our top priority.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Fast Process
                  </h2>
                  <p className="leading-relaxed text-base">
                    No need to wait long! We ensure that the ordering to
                    delivery process is fast and efficient, so you get your
                    dream phone case promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <Testimony />

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
