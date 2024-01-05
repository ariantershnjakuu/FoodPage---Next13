import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuPage from "../components/MenuPage";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar />
        <MenuPage />
      </div>
    </>
  );
};

export default Menu;
