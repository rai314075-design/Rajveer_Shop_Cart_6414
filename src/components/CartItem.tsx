import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

interface ProductsTypes {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity?: number;
}

type CartItemProps = {
  item: ProductsTypes;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const descreaseQ = () => removeFromCart(item.id);
  return (
    <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-2xl transition duration-300 hover:border-orange-600/50 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex w-full items-center gap-3 sm:w-auto sm:gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-20 w-20 rounded-lg border-2 border-gray-700 object-cover sm:h-24 sm:w-24"
        />
        <div className="grow">
          <h3 className="line-clamp-1 text-base font-bold text-white sm:text-xl">
            {item.name}
          </h3>
          <p className="text-base font-semibold text-orange-400 sm:text-lg">
            ₹ {item.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-3 sm:w-2/5 sm:justify-end sm:gap-4">
        <div className="flex items-center overflow-hidden rounded-full border border-gray-700 shadow-lg">
          <button
            onClick={descreaseQ}
            className=" p-1 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 items-center justify-center"
          >
            -
          </button>
          <span className="px-3 text-base font-bold text-white bg-gray-800">
            {item.quantity}
          </span>

          <button
            onClick={increaseQ}
            className=" p-1 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 items-center justify-center"
          >
            +
          </button>
        </div>
        <p className="ml-1 w-max whitespace-nowrap text-right text-sm font-extrabold text-orange-300 sm:ml-3 sm:text-base md:block">
          ₹ {(item.price * (item.quantity ?? 0)).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.id, true)}
          className="ml-1 rounded-full bg-red-800/20 p-2.5 text-red-400 shadow-md transition duration-150 hover:bg-red-800/40 sm:ml-3 sm:p-3"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
