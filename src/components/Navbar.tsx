import { Home, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-orange-900 bg-gray-950/95 text-white shadow-2xl shadow-gray-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 lg:px-8">
          <Link to={"/"}>
            <div className="flex items-center gap-2 sm:gap-3">
              <Home className="ml-0 h-6 w-6 text-orange-400 drop-shadow-lg sm:ml-2 sm:h-8 sm:w-8" />
              <h1 className="text-lg font-extrabold uppercase tracking-widest sm:text-2xl lg:text-3xl">
                Rajveer<span className="text-orange-400">Shop</span>
              </h1>
            </div>
          </Link>

          <nav className="flex items-center">
            <Link
              to={"/Cart"}
              className="relative cursor-pointer rounded-xl border border-orange-400/50 bg-orange-500/10 p-2.5 shadow-lg transition duration-200 hover:bg-orange-500/20 sm:p-3"
            >
              <ShoppingCart className="h-5 w-5 text-orange-400 sm:h-6 sm:w-6" />
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex min-h-5 min-w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-red-600 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
