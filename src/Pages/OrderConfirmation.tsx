import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface OrderConfimationProps {
  details: {
    name: string;
    address: string;
    city: string;
    zip: string;
  };
}

const OrderConfimation = ({ details }: OrderConfimationProps) => {
  const { name, address, city, zip } = details;
  return (
    <>
      <div className="container mx-auto md:px-8 pt-12">
        <div className="p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-gray-700 text-white">
          <CheckCircle className="w-24 h-24  text-green-500 mx-auto mb-6 drop-sahdow-lg" />
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Order Confirmed!
          </h2>
          <p className="text-;lg text-gray-300 mb-6">
            Your transaction is complete. A confiramtion email has been sent to
            your account.
          </p>
          <div className="p-6 bg-green-900/30 border border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm">
            <p className="font-semibold text-lg mb-1">{name}</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{zip}</p>
          </div>
          <Link
            to={"/"}
            className="mx-auto w-1/2 mt-10 px-4 py-4 bg-orange-600 text-white font-extrabold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider "
          >
            Continue Shopping
          </Link>
          </div>
        </div>
      </>
    );
  };

export default OrderConfimation;