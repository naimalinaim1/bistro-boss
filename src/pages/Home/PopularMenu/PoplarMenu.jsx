import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PoplarMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.splice(0, 6));
      });
  }, []);

  return (
    <section className="mt-[90px]">
      <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---" />
      <div className="grid md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <p className="text-xl font-bold text-center mt-12">View Full Menu</p>
    </section>
  );
};

export default PoplarMenu;
