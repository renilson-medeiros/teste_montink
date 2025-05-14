export default function ProductInfo({ title, price }) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-xl text-blue-600 font-semibold">R$ {price.toFixed(2)}</p>
    </div>
  );
}
