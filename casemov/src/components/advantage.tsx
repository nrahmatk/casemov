"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Package,
  Zap,
  Check,
  Users,
  Shield,
  Truck,
  ChevronDown,
} from "lucide-react";

export default function AdvantagesSection() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const advantages = [
    {
      icon: Package,
      title: "Stock Up To Date",
      stat: "500+ Models",
      description:
        "We provide a wide range of cases for all types of phones, from older models to the latest ones!",
    },
    {
      icon: Zap,
      title: "Sharp Print Results",
      stat: "Ultra HD Quality",
      description:
        "Enjoy phone cases with sharp print results and stunning details. Our cutting-edge printing technology ensures every design looks perfect.",
    },
    {
      icon: Check,
      title: "Best Price",
      stat: "Start from 59k",
      description:
        "Get the best quality at affordable prices. We offer premium phone cases without breaking your bank.",
    },
    {
      icon: Users,
      title: "Customer Oriented",
      stat: "4.9/5 Rating",
      description:
        "We prioritize your satisfaction! Our services are designed to perfectly meet customers needs and desires.",
    },
    {
      icon: Shield,
      title: "Guaranteed",
      stat: "30-Day Warranty",
      description:
        "Shop with peace of mind as every product we offer comes with a guarantee. Your satisfaction is our top priority.",
    },
    {
      icon: Truck,
      title: "Fast Process",
      stat: "1-3 Day Delivery",
      description:
        "No need to wait long! We ensure that the ordering to delivery process is fast and efficient, so you get your dream phone case promptly.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 rounded-2xl">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-amber-500">
            Our Advantages
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            Why Choose <span className="text-amber-500">Casemov</span>?
          </h2>
          <motion.div
            className="mx-auto mt-5 h-1 w-20 rounded bg-amber-500"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-between lg:px-8">
          {/* Left side SVG image */}
          <motion.div
            className="w-full md:w-2/5 md:sticky md:top-24 self-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/advantage.svg"
              alt="Phone case advantages"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Right side advantages */}
          <div className="w-full md:w-3/5">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="mb-4"
              >
                <motion.div
                  className={`cursor-pointer rounded-xl bg-white p-5 shadow-md transition-all duration-300 ${
                    openItem === index
                      ? "shadow-xl ring-2 ring-amber-200"
                      : "hover:shadow-lg"
                  }`}
                  onClick={() => toggleItem(index)}
                  whileHover={{ scale: openItem === index ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-amber-500"
                        whileHover={{ rotate: 5 }}
                        animate={{
                          scale: openItem === index ? [1, 1.2, 1] : 1,
                          transition: {
                            duration: 0.5,
                            times: [0, 0.5, 1],
                          },
                        }}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      <div className="">
                        <h3 className="text-base lg:text-lg font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <span className="hidden md:inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                          {item.stat}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openItem === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-amber-500"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openItem === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-gray-600">{item.description}</p>

                          <motion.div
                            className="mt-4 flex justify-end"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <button className="rounded-lg bg-amber-50 px-4 py-2 text-sm font-medium text-amber-600 transition-colors hover:bg-amber-100">
                              Learn more
                            </button>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
