import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../Data/Product";
import {  useMemo } from "react";
import { ChevronLeft, Tag, Zap, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

// 


const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

const product = useMemo(() => {
  return initialProducts.find((data) => data.id === Number(id));
}, [id]);

  if (!id || Number.isNaN(Number(id))) {
    return (
      <div className="mx-auto my-10 w-[92%] max-w-3xl rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center text-gray-200">
        <p className="text-lg font-semibold">Invalid product link.</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full border-2 border-orange-600 px-5 py-2 font-semibold text-orange-400 transition hover:bg-orange-900/40"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto my-10 w-[92%] max-w-3xl rounded-2xl border border-gray-800 bg-gray-900 p-6 text-center text-gray-200">
        <p className="text-lg font-semibold">Product not found.</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full border-2 border-orange-600 px-5 py-2 font-semibold text-orange-400 transition hover:bg-orange-900/40"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto my-6 w-[94%] max-w-6xl rounded-2xl border border-gray-800 bg-gray-900 px-4 py-5 shadow-2xl sm:my-8 sm:px-6 sm:py-7 lg:my-10 lg:px-8">
        <Link to={"/"}>
          <button className="mb-5 flex cursor-pointer items-center text-sm font-semibold text-gray-400 transition duration-150 hover:text-orange-400 sm:mb-7 sm:text-base">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Back to All Products</span>
          </button>
        </Link>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="w-full">
            <Link to={"/"}>
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto aspect-square w-full `max-w-[460px]` rounded-2xl border-4 border-gray-800 object-cover shadow-2xl shadow-gray-950/50"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h1 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                {product.name}
              </h1>
            </div>
            <p className="mb-2 text-2xl font-extrabold text-orange-400 sm:text-3xl">
              ₹{product.price.toFixed(2)}
            </p>
            <h2 className="mb-1 flex items-center space-x-2 border-b border-orange-900/50 pb-2 text-lg font-bold text-gray-200">
              <Tag className="w-5 h-5 text-orange-500" />
              <span className="whitespace-nowrap">Product Overview</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-3">
              {product.description}
            </p>

            <ul className="space-y-2 rounded-xl border border-gray-700 bg-gray-800 p-3 text-gray-300 sm:p-4">
              <li className="flex items-start space-x-2 text-sm sm:text-base">
                <Zap className="w-4 h-4 text-orange-500 " />
                <span>
                  High-Quality Professional Grade Materials
                </span>
              </li>
              <li className="flex items-start space-x-2 text-sm sm:text-base">
                <Zap className="w-4 h-4 text-orange-500 " />
                <span>
                  Comprehensive 1-year Warranty
                </span>
              </li>
              <li className="flex items-start space-x-2 text-sm sm:text-base">
                <Zap className="w-4 h-4 text-orange-500 " />
                <span>
                  Immediate Shipping for In-Stock
                </span>
              </li>
            </ul>

            <div className="mt-4 flex flex-col items-stretch justify-center space-y-3 sm:mt-5">
              <button
                onClick={() => addToCart(product)}
                className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-full bg-orange-600 py-3 font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-2 hover:ring-orange-300/40"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
              <Link
                to={"/"}
                className="w-full rounded-full border-2 border-orange-600 py-3 text-center font-bold uppercase tracking-wider text-orange-400 transition duration-300 hover:bg-orange-900/50"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetail;
