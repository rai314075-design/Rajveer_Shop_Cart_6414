import { useCart } from "../context/CartContext";
import { Package, MapPin } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { type FormEvent } from "react";
import OrderConfimation from "./OrderConfirmation";

const CheckOut = () => {
  const { cartTotal, cart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return <OrderConfimation details={deliveryDetails} />;
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-4 sm:pt-6 md:px-8 md:pt-8">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:mb-8 sm:text-4xl lg:text-5xl">
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-2xl sm:p-6 lg:col-span-2 lg:p-8">
            <h3 className="mb-6 flex items-center gap-3 border-b border-gray-700 pb-4 text-2xl font-bold text-orange-400 sm:text-3xl">
              <MapPin className="w-7 h-7 text-orange-500" />
              <span>Shipping Information</span>
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold text-gray-300 capitalize mb-1"
                  >
                    {key === "zip" ? "Pin code" : key}
                  </label>
                  <input
                    type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key as keyof typeof deliveryDetails]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white shadow-inner placeholder-gray-500 sm:px-5"
                  />
                </div>
              ))}
              <div className="pt-6">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 py-3 text-base font-extrabold uppercase tracking-wider text-white shadow-lg shadow-orange-800/50 transition duration-300 hover:bg-orange-700 hover:ring-4 hover:ring-pink-600/50 sm:py-4 sm:text-xl"
                >
                  <span>
                    ₹ Pay and confirm Order (₹ {cartTotal.toFixed(2)})
                  </span>
                </button>
              </div>
            </form>
          </div>
          {/* Order Summary in CheckOut */}

          <div
            className="h-fit rounded-2xl border border-gray-800 bg-gray-900 p-4 shadow-2xl sm:p-6 lg:col-span-1 lg:sticky lg:top-20 lg:p-8"
          >
            <h3
              className="mb-5 flex items-center gap-2 border-b border-y-gray-700 pb-3 text-2xl font-bold text-white sm:text-3xl"
            >
              {/* <div className="flex justify-between"> */}
              <Package className="w-6 h-6 text-orange-400" />
              {/* <span className="w-6 h-6  text-orange-400">₹</span> */}
              <span>Summary</span>
              {/* </div> */}
            </h3>
            <div className="space-y-4 text-gray-400">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-base border-b border-gray-800 pb-2"
                >
                  <span className="trucate text-gray-300 ">{item.name}</span>
                  <span className="font-medium text-orange-300">
                    {(item.price * (item.quantity ?? 1)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
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
                  Total Due:
                </span>
                <span className="font-extrabold text-3xl text-orange-400">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
