import { useRouter } from "next/navigation";
import ButtonAddWishList from "./ButtonAddWishList";
import { formatRupiah } from "./formatRupiah";
import ButtonAddToCart from "./ButtonAddToCard";
import { ProductModel } from "./type";
import Image from "next/image";

interface Props {
  product: ProductModel;
}

export default function CardProduct({ product }: Props) {
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    router.push(`/products/${slug}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden md:transform md:hover:scale-105 transition duration-300 ease-in-out">
    <div className="relative aspect-w-1 aspect-h-1">
      <img
        src={product.thumbnail}
        alt={product.name}
        className="w-full h-full object-cover"
        onClick={() => handleProductClick(product.slug)}
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-bold text-center text-gray-900">
        {product.name}
      </h2>
      <p className="text-yellow-500 text-center font-bold mt-3">
        {formatRupiah(product.price)}
      </p>
      <div className="flex mt-3">
        <ButtonAddToCart />
        <ButtonAddWishList productId={product._id} />
      </div>
    </div>
  </div>
  );
}
