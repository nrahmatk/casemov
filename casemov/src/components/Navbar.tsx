"use client";

import { useState, useEffect, memo } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Heart, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

// Optimize scroll effect with throttling
const useScrollEffect = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    let timeoutId: number | null = null;
    
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(() => {
        setScrolled(window.scrollY > 10);
      }, 50); // 50ms debounce
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  
  return scrolled;
};

// Memoized link components
const NavLink = memo(
  ({
    href,
    children,
    icon,
  }: {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="group relative flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-amber-500"
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
);
NavLink.displayName = "NavLink";

const MobileNavLink = memo(
  ({
    href,
    children,
    icon,
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
  }) => (
    <Link
      href={href}
      className="flex items-center rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-amber-500"
      onClick={onClick}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </Link>
  )
);
MobileNavLink.displayName = "MobileNavLink";

// Logo component
const Logo = memo(() => (
  <Link href="/" className="flex items-center space-x-3">
    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-white shadow-md transition-transform duration-300 hover:scale-105">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="h-6 w-6"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5" />
      </svg>
    </div>
    <span className="text-xl font-bold text-gray-900">
      case<span className="text-amber-500">mov</span>
    </span>
  </Link>
));
Logo.displayName = "Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollEffect();
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            <NavLink href="/products" icon={<ShoppingBag size={16} />}>
              Products
            </NavLink>
            <NavLink href="/wishlist" icon={<Heart size={16} />}>
              Wishlist
            </NavLink>
            <NavLink href="/contact" icon={<Phone size={16} />}>
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-gray-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - only render when needed */}
        {isOpen && (
          <div className="mt-4 border-t border-gray-100 py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink
                href="/products"
                icon={<ShoppingBag size={20} />}
                onClick={() => setIsOpen(false)}
              >
                Products
              </MobileNavLink>
              <MobileNavLink
                href="/wishlist"
                icon={<Heart size={20} />}
                onClick={() => setIsOpen(false)}
              >
                Wishlist
              </MobileNavLink>
              <MobileNavLink
                href="/contact"
                icon={<Phone size={20} />}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </MobileNavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
