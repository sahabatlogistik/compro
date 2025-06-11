import { cn } from "@/lib/utils";
import React from "react";

interface H1Props {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeClasses = {
  sm: "text-2xl lg:text-3xl",
  md: "text-3xl lg:text-4xl", 
  lg: "text-4xl lg:text-5xl",
  xl: "text-5xl lg:text-6xl",
  "2xl": "text-6xl lg:text-7xl",
};

export default function H1({ text, className, size = "xl" }: H1Props) {
  // Handle multiple styling symbols:
  // *text* = orange color (primary accent)
  // _text_ = italic style
  // **text** = bold + orange
  // __text__ = underline
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__|_[^_]+_)/g);

  return (
    <h1
      className={cn(
        "font-bold text-msl-navy leading-tight",
        sizeClasses[size],
        className
      )}
    >
      {parts.map((part, index) => {
        // **text** = bold + orange
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={index} className="text-msl-orange font-extrabold">
              {part.slice(2, -2)}
            </span>
          );
        }
        // *text* = orange color
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <span key={index} className="text-msl-orange">
              {part.slice(1, -1)}
            </span>
          );
        }
        // __text__ = underline
        if (part.startsWith("__") && part.endsWith("__")) {
          return (
            <span key={index} className="underline decoration-msl-orange decoration-2">
              {part.slice(2, -2)}
            </span>
          );
        }
        // _text_ = italic
        if (part.startsWith("_") && part.endsWith("_")) {
          return (
            <em key={index} className="italic">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </h1>
  );
}