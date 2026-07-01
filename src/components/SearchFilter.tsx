import { Search } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'

type SearchFilterProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

const SearchFilter = ({ searchTerm, setSearchTerm }: SearchFilterProps) => {
  return (
    <>
    <div className="mb-4 rounded-2xl border border-gray-800 bg-gray-900 p-3 shadow-xl sm:mb-5 sm:p-5">
      <div className="flex items-center overflow-hidden rounded-xl border border-gray-700 bg-gray-800 transition duration-300 focus-within:ring-4 focus-within:ring-orange-600/50">
        <Search className='ml-3 h-4 w-4 text-gray-500 sm:ml-4 sm:h-5 sm:w-5'/>
        <input type="text"  placeholder='Search products...' className='w-full bg-gray-800 p-3 text-sm font-medium text-white outline-none placeholder-gray-500 sm:p-4 sm:text-base'
         aria-label='Search Products'
         value={searchTerm} 
         onChange={(e)=>setSearchTerm(e.target.value)}
         />
      </div>
    </div>
    </>
  )
}

export default SearchFilter