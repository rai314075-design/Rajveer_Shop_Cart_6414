import { initialProducts } from "../Data/Product";
import { Tag } from "lucide-react";

const availableCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

type CategoryFilterProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  return (
    <>
      <div className="flex flex-nowrap gap-2 overflow-x-auto border-b border-gray-800 pb-4 sm:gap-3 sm:pb-6">
        <Tag className="mt-2 mr-1 hidden h-5 w-5 text-orange-500 sm:block" />
        {availableCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap px-4 py-2 text-sm font-bold rounded-full transition duration-200 shadow-md sm:px-5 ${
               selectedCategory === category
                 ? "bg-orange-600 text-white shadow-orange-800/50"
                 : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700"
             }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
