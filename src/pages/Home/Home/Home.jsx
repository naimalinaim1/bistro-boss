import useTitle from "../../../hooks/useTitle/useTitle";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PoplarMenu from "../PopularMenu/PoplarMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  // set title
  useTitle("Home");

  return (
    <main>
      <Banner />
      <div className="max-w-[1100px] mx-auto">
        <Category />
        <BistroBoss />
        <PoplarMenu />
      </div>
      <Featured />
      <div className="max-w-[1100px] mx-auto">
        <Testimonials />
      </div>
    </main>
  );
};

export default Home;
