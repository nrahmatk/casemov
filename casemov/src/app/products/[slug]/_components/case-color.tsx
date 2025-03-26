"use client";

import { useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility function for class names

type CaseColor = {
  id: string;
  name: string;
  bgClass: string;
};

export default function CaseColorSelector({
  onChange,
}: {
  onChange?: (colorId: string) => void;
}) {
  const colors: CaseColor[] = [
    { id: "white", name: "White", bgClass: "bg-white" },
    { id: "black", name: "Black", bgClass: "bg-gray-900" },
    { id: "amber", name: "Amber", bgClass: "bg-amber-500" },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].id);

  const handleColorChange = (colorId: string) => {
    setSelectedColor(colorId);
    onChange?.(colorId);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex items-center gap-2">
        {colors.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => handleColorChange(color.id)}
            className={cn(
              color.bgClass,
              "h-8 w-8 rounded-full border transition-all duration-200",
              "hover:scale-110 focus:outline-none",
              selectedColor === color.id
                ? "ring-2 ring-offset-2 ring-amber-500 shadow-md"
                : "border-gray-200 hover:border-gray-300"
            )}
            aria-label={`Select ${color.name} color`}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}
