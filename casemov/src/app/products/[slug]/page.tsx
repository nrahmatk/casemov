import ButtonAddToCart from "@/components/ButtonAddToCard";
import ButtonAddWishList from "@/components/ButtonAddWishList";
import { formatRupiah } from "@/components/formatRupiah";
import type { ProductModel } from "@/db/models/products";
import type { Metadata, ResolvingMetadata } from "next";
import { Star, Share2, ChevronDown, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ThumbnailGallery from "./_components/thumnail";
import CaseColorSelector from "./_components/case-color";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${params.slug}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  const { data } = await response.json();
  return {
    title: `${data?.name} | Casemov`,
    description: data?.description,
    openGraph: {
      title: data?.name,
      description: data?.description,
      images: [data?.images?.[0]],
    },
  };
}

const fetchData = async (slug: string): Promise<{ data: ProductModel }> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  const data = await response.json();
  return data;
};

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await fetchData(params.slug);
  const compareAtPrice = 159000;
  const rating = 4.8; // Example rating - replace with actual rating if available

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-24 text-center min-h-[50hv]">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="mt-4 text-gray-600">
          {`The product you're looking for doesn't exist or has been
          removed.`}
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-white hover:bg-amber-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-8 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-amber-500">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-amber-500">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{data?.name}</span>
        </nav>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Product Images */}
            <ThumbnailGallery images={data?.images} productName={data?.name} />

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    PREMIUM CASE
                  </span>
                  {data?.tags.length > 0 && (
                    <div className="ml-3 flex flex-wrap gap-1">
                      {data?.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  {data?.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(rating)
                          ? "fill-amber-500 text-amber-500"
                          : i < rating
                          ? "fill-amber-500/50 text-amber-500"
                          : "fill-none text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {rating} ({Math.floor(Math.random() * 100) + 10} reviews)
                </span>
                <button className="ml-auto flex items-center text-sm text-gray-500 hover:text-amber-500">
                  <Share2 className="mr-1 h-4 w-4" />
                  Share
                </button>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">
                  {formatRupiah(data?.price)}
                </span>
                {compareAtPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {formatRupiah(compareAtPrice)}
                  </span>
                )}
                {compareAtPrice && (
                  <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-800">
                    Save{" "}
                    {Math.round(
                      ((compareAtPrice - data?.price) / compareAtPrice) * 100
                    )}
                    %
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="prose prose-sm max-w-none text-gray-600">
                <p>{data?.description}</p>
              </div>

              {/* Options */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Case Color
                  </label>
                  <CaseColorSelector />
                </div>

                <div>
                  <label
                    htmlFor="phone-type"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Phone Type
                  </label>
                  <div className="relative">
                    <select
                      id="phone-type"
                      className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    >
                      <option>iPhone 15 Pro Max</option>
                      <option>iPhone 15 Pro</option>
                      <option>iPhone 15 Plus</option>
                      <option>iPhone 15</option>
                      <option>iPhone 14 Pro Max</option>
                      <option>iPhone 14 Pro</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex items-center space-x-4 pt-6">
                <div className="flex-1">
                  <ButtonAddToCart />
                </div>
                <ButtonAddWishList productId={data?._id} />
              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-white p-4 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-amber-100 p-1 text-amber-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Premium Quality</p>
                    <p className="text-gray-500">Durable materials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-amber-100 p-1 text-amber-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Perfect Fit</p>
                    <p className="text-gray-500">Precise cutouts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-amber-100 p-1 text-amber-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Shock Resistant</p>
                    <p className="text-gray-500">Drop protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="rounded-full bg-amber-100 p-1 text-amber-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Wireless Charging
                    </p>
                    <p className="text-gray-500">Compatible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
