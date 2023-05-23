import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu/useMenu";

const PoplarMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mt-[90px]">
      <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---" />
      <div className="grid md:grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 text-xl font-bold text-center my-12">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PoplarMenu;
