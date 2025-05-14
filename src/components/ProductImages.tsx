import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  return (
    <div className="w-full">
      <img src={mainImage} alt="Produto" className="w-full rounded-lg" />
      <div className="flex gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setMainImage(img)}
            className={`w-20 h-20 rounded cursor-pointer border ${mainImage === img ? 'border-neutral-700' : 'border-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
}
