import { cn } from "@/lib/utils";
import React from "react";

export default function H1({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  // Handle multiple styling symbols:
  // *text* = orange color (primary accent)
  // _text_ = italic style
  // **text** = bold + orange
  // __text__ = underline
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__|_[^_]+_)/g);

  return (
    <h1
      className={cn(
        "text-5xl lg:text-6xl font-bold text-msl-navy leading-tight",
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