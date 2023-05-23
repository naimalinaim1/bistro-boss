import useTitle from "../../../hooks/useTitle/useTitle";
import Cover from "../../Shared/Cover/Cover";

import menuImg from "../../../assets/menu/banner3.jpg";
import offeredImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  // change page title
  useTitle("Our Menu");

  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <section>
      {/* banner and  offered */}

      <Cover
        bgImage={menuImg}
        title={"Our Menu"}
        description={"Would you like to try a dish?"}
      />
      <div className="mt-20">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        />
      </div>

      {/* menu category */}
      {/* todays offered  */}
      <MenuCategory items={offered} />
      {/* desserts */}
      <MenuCategory
        items={desserts}
        menuImg={offeredImg}
        title={"desserts"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* pizza */}
      <MenuCategory
        items={pizza}
        menuImg={pizzaImg}
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* salad */}
      <MenuCategory
        items={salad}
        menuImg={saladImg}
        title={"salad"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* soup */}
      <MenuCategory
        items={soup}
        menuImg={soupImg}
        title={"soup"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
    </section>
  );
};

export default Menu;
