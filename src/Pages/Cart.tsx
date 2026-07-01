import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ChevronLeft, Zap } from "lucide-react";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cart, cartCount, cartTotal } = useCart();
  return (
    <>
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-4 sm:pt-6 md:px-8 md:pt-8">
        <div className="mb-6 flex items-center sm:mb-8 lg:mb-10">
          <Link
            to={"/"}
            className="flex items-center text-white-400 hover:text-orange-400 transition duration-150 font-semibold text-lg"
          >
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Store</span>
          </Link>
        </div>
        <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-white sm:mb-8 sm:text-3xl lg:text-4xl">
          Shopping Cart ({cartCount})
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div
            className="h-fit rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-2xl sm:p-6 lg:col-span-1 lg:sticky lg:top-20 lg:p-8"
          >
            <h3
              className="text-3xl font-bold text-white mb-5 border-b 
             border-y-gray-700 pb-3 flex items-center space-x-2"
            >
              <div className="flex justify-between">
                <span className="w-6 h-6  text-orange-400">₹</span>
                <span>Order Total</span>
              </div>
            </h3>
            <div className="space-y-4  text-gray-400">
              <div className="flex justify-between text-xl">
                <span>SubTotal :</span>
                <span className="font-semibold text-white">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Shipping (Express) :</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>
              <div className="flex justify-between pt-6 border-t border-gray-700">
                <span className="text-2xl font-extrabold text-white">
                  Estimated Total:
                </span>
                <span className="font-extrabold text-2xl text-orange-400">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
            <Link
              to={"/CheckOut"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 py-3 text-base font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-4 hover:ring-pink-600/50 sm:mt-8 sm:py-4 sm:text-xl"
            >
              <Zap className="w-6 h-6" />
              <span>Proceed Securely</span>
            </Link>
            <p className="text-xs text-gray-500 text-center mt-4">
              All transactions are encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
