import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      className="w-full min-h-[800px] bg-fixed  text-white bg-cover mt-[130px] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${featuredImg})`,
      }}
    >
      <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---" />
      <div className="min-h-[400px] md:flex items-center gap-10 w-[90%] mx-auto">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p className="text-2xl">March 20, 2023</p>
          <p className="uppercase text-2xl mt-2">WHERE CAN I GET SOME?</p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
