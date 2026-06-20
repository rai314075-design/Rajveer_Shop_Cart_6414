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
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-4 pt-4">
          Featured Gear ({products.length} Items)
        </h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
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
