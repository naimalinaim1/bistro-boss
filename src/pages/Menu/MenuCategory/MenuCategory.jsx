import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, menuImg, title, description }) => {
  return (
    <div>
      {title && (
        <Cover bgImage={menuImg} title={title} description={description} />
      )}

      <div className="my-20 max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-10 mb-16">
        <Link to={`/order?category=${title || "offered"}`}>
          <button className="btn btn-outline border-0 border-b-4 ">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
