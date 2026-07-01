import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../Data/Product";
import { useState, useEffect } from "react";
import { ChevronLeft, Tag, Zap, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

interface ProductsData {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setproduct] = useState<ProductsData | undefined>();
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = initialProducts.find((data) => data.id == Number(id));
    if (foundProduct) {
      setTimeout(() => {
        setproduct(foundProduct);
      }, 0);
    }
  }, [id]);

  // console.log("my Product", product);

  return (
    <>
      <div className="mx-2 my-4 min-h-screen rounded-2xl border border-gray-800 bg-gray-900 px-3 py-4 shadow-2xl sm:mx-4 sm:my-8 sm:px-4 sm:py-6 md:mx-6 md:px-6 md:py-8 lg:mx-12">
        <Link to={"/"}>
          <button className="cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-8 font-semibold text-base">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Back to All Products</span>
          </button>
        </Link>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex w-full justify-center">
            <img
              src={product?.image}
              alt={product?.name ?? "Product image"}
              className="h-[260px] w-full max-w-[420px] rounded-2xl border-4 border-gray-800 object-cover shadow-2xl shadow-gray-950/50 sm:h-[320px] lg:h-[420px]"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tighter text-white sm:text-3xl">
                {product?.name}
              </h1>
            </div>
            <p className="mb-4 text-xl font-extrabold text-orange-400 sm:text-2xl">
              ₹{product?.price.toFixed(2)}
            </p>
            <h2 className="mb-2 flex items-center gap-2 border-b border-orange-900/50 pb-2 text-base font-bold text-gray-200 sm:text-lg">
              <Tag className="w-5 h-5 text-orange-500" />
              <span className="whitespace-nowrap">Product Overview</span>
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-gray-400 sm:text-base">
              {product?.description}
            </p>

            <ul className="space-y-2 text-gray-300 p-3 bg-gray-800 rounded-xl border border-gray-700">
              <li className="flex items-center space-x-2 text-sm">
                <Zap className="w-4 h-4 text-orange-500 " />
                <span className="whitespace-nowrap">
                  High-Quality Professional Grade Materials
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Zap className="w-4 h-4 text-orange-500 " />
                <span className="whitespace-nowrap">
                  Comprehensive 1-year Warranty
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Zap className="w-4 h-4 text-orange-500 " />
                <span className="whitespace-nowrap">
                  Immediate Shipping for In-Stock
                </span>
              </li>
            </ul>

            <div className="mt-5 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
              <button
                onClick={() => product && addToCart(product)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-4 hover:ring-pink-600/50 sm:text-base"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
              <Link
                to={"/"}
                className="w-full rounded-full border-2 border-orange-600 py-3 text-center text-sm font-bold uppercase tracking-wider text-orange-400 transition duration-300 hover:bg-orange-900/50 sm:text-base"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
