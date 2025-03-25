import Link from "next/link";
import ButtonAddToCart from "./ButtonAddToCard";
import ButtonAddWishList from "./ButtonAddWishList";
import { formatRupiah } from "./formatRupiah";
import { ProductModel } from "./type";

interface Props {
  product: ProductModel;
}

export default function CardProduct({ product }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden md:transform md:hover:scale-105 transition duration-300 ease-in-out">
      <div className="relative aspect-w-1 aspect-h-1">
        <Link href={`/products/${product.slug}`}>
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <hr className="bg-gray-300" />
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-xl font-bold text-center text-gray-900">
            {product.name}
          </h2>
          <p className="text-amber-500 text-center font-bold">
            {formatRupiah(product.price)}
          </p>
        </Link>
        <div className="flex mt-3">
          <ButtonAddToCart />
          <ButtonAddWishList productId={product._id} />
        </div>
      </div>
    </div>
  );
}
