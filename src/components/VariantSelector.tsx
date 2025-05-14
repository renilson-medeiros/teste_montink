import { useState, useEffect } from "react";
import { getWithTTL, setWithTTL } from "../utils/localStorageWithTTL";

interface VariantSelectorProps {
  variants: {
    size: string[];
    color: string[];
  };
}

// Mapeamento de cores
const colorMap: Record<string, string> = {
  Preto: "#000000",
  Branco: "#FFFFFF",
  Azul: "#1E90FF",
  
};

export default function VariantSelector({ variants }: VariantSelectorProps) {
  const [selected, setSelected] = useState({
    size: getWithTTL<string>("selectedSize") || "",
    color: getWithTTL<string>("selectedColor") || ""
  });

  useEffect(() => {
    setWithTTL("selectedSize", selected.size);
    setWithTTL("selectedColor", selected.color);
  }, [selected]);

  return (
    <div className="mb-4">
      {/* Tamanhos */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Tamanho:</label>
        <div className="flex flex-wrap gap-2">
          {variants.size.map((s) => (
            <button
              key={s}
              onClick={() => setSelected({ ...selected, size: s })}
              className={`px-4 py-2 rounded border text-sm font-medium ${
                selected.size === s
                  ? "bg-neutral-800 text-white border-neutral-800"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Cores como quadradinhos */}
      <div className="mb-2">
        <label className="block mb-2 font-semibold">Cor:</label>
        <div className="flex flex-wrap gap-2">
          {variants.color.map((c) => (
            <button
              key={c}
              onClick={() => setSelected({ ...selected, color: c })}
              style={{
                backgroundColor: colorMap[c] || "#ccc"
              }}
              className={`w-8 h-8 rounded border transition-all ${
                selected.color === c
                  ? "ring-2 ring-neutral-800 border-neutral-800"
                  : "border-gray-300"
              }`}
              title={c} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
