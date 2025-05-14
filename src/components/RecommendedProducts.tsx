interface RecommendedProduct {
  id: number;
  title: string;
  price: string;
  image: string;
}

interface Props {
  products: RecommendedProduct[];
}

export default function RecommendedProducts({ products }: Props) {
  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-xl font-semibold mb-4">Recomendados para você</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border hover:cursor-pointer rounded p-4 hover:shadow transition">
            <img src={p.image} alt={p.title} className="w-full h-56 object-cover mb-2 rounded" />
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="text-blue-600 font-semibold">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
