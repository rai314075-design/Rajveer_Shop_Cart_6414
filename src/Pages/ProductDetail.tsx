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
      <div className=" container `mx-auto` px-4 md:px-6 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-12 py-6 md:py-8 border border-gray-800 mx-12 ">
        <Link to={"/"}>
          <button className="cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-8 font-semibold text-base">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Back to All Products</span>
          </button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25">
          <div className="w-full ">
            <img
              src={product?.image}
              alt={product?.name ?? "Product image"}
              className="w-\[400px\] h-\[400px\] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white leading-tight mb-4 tracking-tighter">
                {product?.name}
              </h1>
            </div>
            <p className="text-2xl font-extrabold text-orange-400 mb-4">
              ₹{product?.price.toFixed(2)}
            </p>
            <h2 className="text-lg font-bold text-gray-200 mb-2 border-b border-orange-900/50 pb-2 flex items-center space-x-2">
              <Tag className="w-5 h-5 text-orange-500" />
              <span className="whitespace-nowrap">Product Overview</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-3">
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

            <div className="mt-5 space-y-4 flex justify-center items-center flex-col">
              <button
                onClick={() => product && addToCart(product)}
                className="w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg 
              shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center
               justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50  uppercase tracking-wider"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
              <Link
                to={"/"}
                className="w-full  py-3 border-2 border-orange-600 text-orange-400 font-bold rounded-full
                 cursor-pointer hover:bg-orange-900/50 transition duration-300  uppercase tracking-wider text-center"
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
