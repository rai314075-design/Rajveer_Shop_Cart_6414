import { useState, type ComponentType } from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { products } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = products.filter((products) => {
    const matchesSearch =
      products.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      products.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || products.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  const ProductCardComponent = ProductCard as ComponentType<{
    product: unknown;
  }>;
  return (
    <>
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-4 sm:pt-6 md:px-8 md:pt-8">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <h2 className="mx-auto px-1 pt-4 text-xl font-extrabold sm:text-2xl">
          Featured Gear ({products.length} Items)
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {filterProducts.map((product, index) => (
            <div key={index}>
              <ProductCardComponent product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
