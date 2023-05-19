"use client";

import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-start">
        <RestaurantCard />
      </div>
    </>
  );
};

export default HomePage;
