
import React from 'react';
import { Search } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface SearchAndFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filterOptions: FilterOption[];
}

const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
  filterOptions
}) => {
  return (
    <div className="sticky top-[72px] z-20 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for pizzas..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ghibli-brown focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(option => (
              <button
                key={option.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === option.id
                    ? 'bg-ghibli-brown text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
