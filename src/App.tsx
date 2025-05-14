import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import VariantSelector from "./components/VariantSelector";
import DeliveryChecker from "./components/DeliveryChecker";
import RecommendedProducts from "./components/RecommendedProducts";
import { product, recommended } from "./utils/mockData";

export default function App() {
  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <p className="text-sm font-medium text-gray-500 cursor-pointer">Home  -  Masculina  -  Camisetas  -  Algodão 100% </p>
      </div>
      <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-8">
        <ProductImages images={product.images} />
        <div>
          <ProductInfo title={product.title} price={product.price} />
          <VariantSelector variants={product.variants} />
          <DeliveryChecker />
        </div>
      </div>

      <RecommendedProducts products={recommended} />
    </>
  );
}
