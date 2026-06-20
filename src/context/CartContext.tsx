import { toast, Bounce } from "react-toastify";
import { createContext, useContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import { initialProducts } from "../Data/Product";

interface ProductsTypes {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity?: number;
}

// 1. Update your type interface to include the new function
interface CartContextType {
  products: ProductsTypes[];
  cart: ProductsTypes[]; // Or whatever your cart item type name is
  setCart: React.Dispatch<React.SetStateAction<ProductsTypes[]>>;
  addToCart: (product: ProductsTypes) => void;
  removeFromCart: (productsId: number, removeAll?: boolean) => void; // <-- ADD THIS LINE
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

// 2. Make sure your createContext initialization allows it (should look like this)
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductsTypes[]>([]);
  const products = initialProducts;

  const addToCart = (product: ProductsTypes) => {
    toast.success("Item Added to Cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  /// Remove Item from cart
  const removeFromCart = (productsId: number, removeAll = false) => {
    toast.error("Item Remove From Cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productsId);

      if (!existingItem) {
        return prevCart;
      }

      // If removeAll is true or it's the last item left, filter it out entirely
      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productsId);
      }

      // Otherwise, decrement the quantity by 1
      return prevCart.map((item) =>
        item.id === productsId
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item,
      );
    });
  };

  //clearCartAll in one click
  const clearCart = () => setCart([]);
  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + (item.quantity || 1), 0),

    [cart],
  );

  //Cart total price

  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0,
      ),
    [cart],
  );
  //   console.log(cart)
  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        removeFromCart,
        addToCart,
        setCart,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
//eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
