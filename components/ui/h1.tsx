import React from "react";

export default function H1({ text }: { text: string }) {
  // Combine both * and _ handling using RegExp
  const parts = text.split(/(\*[^*]+\*|_[^_]+_)/g);

  return (
    <h1 className="text-5xl lg:text-6xl font-bold text-msl-navy leading-tight">
      {parts.map((part, index) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <span key={index} className="text-msl-orange">
              {part.slice(1, -1)}
            </span>
          );
        }
        if (part.startsWith("_") && part.endsWith("_")) {
          return (
            <em key={index} className="italic text-msl-gray">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </h1>
  );
}
