import Link from "next/link";

interface RestaurantNavbarProps {}

const RestaurantNavbar: React.FC<RestaurantNavbarProps> = () => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/grill/menu" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNavbar;
