import Link from "next/link";
import ButtonAuth from "./ButtonAuth";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto text-gray-600 body-font flex p-5 flex-row items-center justify-between">
        <Link href="/" className="flex items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5" />
          </svg>
          <span className="ml-3 text-xl hidden md:inline">casemov</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex items-center text-base justify-center">
          <Link href="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link href="/wishlist" className="mr-5 hover:text-gray-900">
            Wishlist
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 hidden md:inline">
            Contact Us
          </Link>
        </nav>
        <ButtonAuth />
      </div>
    </header>
  );
}
