import { MenuItem } from "../types";

interface ProductCardProps {
  product: MenuItem;
  onAddToOrder: (item: MenuItem) => void;
}

const ProductCard = ({ product, onAddToOrder }: ProductCardProps) => {
  return (
    <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="font-bold text-gray-800">{product.name}</div>
        <span className="font-light text-sm text-gray-400">{product.weight}</span>
        <div className="text-xs text-gray-500">Stock: {product.inventory}</div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="self-end font-bold text-lg text-yellow-500">
          ${product.price.toFixed(2)}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onAddToOrder(product)}
            disabled={product.inventory === 0}
            className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
          <img
            src={product.image}
            className="h-14 w-14 object-cover rounded-md"
            alt={product.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;