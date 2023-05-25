import RestaurantCard from "./components/RestaurantCard";
import Header from "./components/Header";
import { PrismaClient, Cuisine, Location, PRICE } from "@prisma/client";

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  main_image: string;
  slug: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      main_image: true,
      slug: true,
      cuisine: true,
      location: true,
      price: true,
    },
  });

  return restaurants;
};

interface HomePageProps {}

async function HomePage() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
