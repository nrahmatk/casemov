"use client";

import { useState } from "react";

export default function ThumbnailGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]); // Gambar utama

  return (
    <div className="space-y-4">
      {/* Gambar Utama */}
      <div className="overflow-hidden rounded-2xl bg-white">
        <div className="relative aspect-square">
          <img
            src={selectedImage || "/placeholder.svg"}
            alt={productName}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg border-2 ${
              selectedImage === image
                ? "border-amber-500"
                : "border-transparent"
            } transition-all hover:border-amber-500`}
            onClick={() => setSelectedImage(image)} // Update gambar utama
          >
            <div className="relative aspect-square">
              <img
                src={image || "/placeholder.svg"}
                alt={`${productName} - view ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}