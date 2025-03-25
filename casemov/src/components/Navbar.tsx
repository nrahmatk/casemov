"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
// import ButtonAuth from "./ButtonAuth";
import { Menu, X, ShoppingBag, Heart, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            <NavLink
              href="/products"
              icon={<ShoppingBag className="h-4 w-4" />}
            >
              Products
            </NavLink>
            <NavLink href="/wishlist" icon={<Heart className="h-4 w-4" />}>
              Wishlist
            </NavLink>
            <NavLink href="/contact" icon={<Phone className="h-4 w-4" />}>
              Contact Us
            </NavLink>
          </nav>

          {/* Auth Button (Desktop) */}
          {/* <div className="hidden md:block">
            <ButtonAuth />
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-gray-700 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 border-t border-gray-100 py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink
                href="/products"
                icon={<ShoppingBag className="h-5 w-5" />}
              >
                Products
              </MobileNavLink>
              <MobileNavLink
                href="/wishlist"
                icon={<Heart className="h-5 w-5" />}
              >
                Wishlist
              </MobileNavLink>
              <MobileNavLink
                href="/contact"
                icon={<Phone className="h-5 w-5" />}
              >
                Contact Us
              </MobileNavLink>
              {/* <div className="pt-2">
                <ButtonAuth />
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Desktop Navigation Link
function NavLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-amber-500"
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Mobile Navigation Link
function MobileNavLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-amber-500"
      onClick={() => {
        // Close mobile menu when a link is clicked
        const setIsOpen = (window as any).setIsOpen;
        if (typeof setIsOpen === "function") {
          setIsOpen(false);
        }
      }}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </Link>
  );
}
