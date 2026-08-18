import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

interface ProductsData {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const ProductCard = ({ product }: { product: ProductsData }) => {
  const { addToCart } = useCart();
  return (
    <>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-800 shadow-xl transition duration-500 group hover:scale-[1.01] hover:shadow-orange-900/40">
        <Link
          to={`/product/${product.id}`}
          className="relative cursor-pointer overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-44 w-full object-cover object-center transition duration-500 sm:h-56 group-hover:scale-110 group-hover:opacity-90"
          />
          <div className="absolute bottom-0 left-0 rounded-tr-xl bg-orange-600/99 px-4 py-2 text-lg font-extrabold text-white shadow-lg sm:px-5 sm:text-xl">
            ₹{product.price.toFixed(2)}
          </div>
        </Link>
        <div className="flex grow flex-col p-4 sm:p-5">
          <Link to={`/product/${product.id}`}>
            <h3 className="mb-2 line-clamp-1 cursor-pointer text-xl font-extrabold text-white transition duration-200 hover:text-orange-400 sm:text-2xl">
              {product.name}
            </h3>
          </Link>

          <p className="mb-4 line-clamp-2 text-sm text-gray-400">
            {product.description}
          </p>
          <div className="flex items-center text-xs text-gray-500 mb-4">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold">
              {product.category}
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-4 hover:ring-pink-600/50 sm:text-base"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
