import { useState } from "react";
import { Search, MapPin } from "lucide-react";

const SearchBar = ({ onSearch, loading = false }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a city or location..."
            className="w-full pl-10 pr-12 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-lg bg-white/80 backdrop-blur-sm"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="loading-spinner h-5 w-5"></div>
            ) : (
              <Search className="h-5 w-5" />
            )}
          </button>
        </div>
      </form>

      {/* Quick search suggestions */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {["Chennai", "Salem", "Madurai", "Coimbatore", "Bangalore"].map(
          (city) => (
            <button
              key={city}
              onClick={() => {
                setQuery(city);
                onSearch(city);
              }}
              className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-all duration-200 border border-gray-200"
              disabled={loading}
            >
              {city}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBar;
