import SearchSidebar from "./components/SearchSidebar";
import SearchHeader from "./components/SearchHeader";
import RestaurantCard from "./components/RestauranCard";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

export default Search;
