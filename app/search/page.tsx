import Link from "next/link";
import SearchSidebar from "./components/SearchSidebar";
import SearchHeader from "./components/SearchHeader";
import RestaurantCard from "./components/RestauranCard";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <SearchHeader />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSidebar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Search;
