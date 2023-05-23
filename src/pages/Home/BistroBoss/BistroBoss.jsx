import bgImg from "../../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <div
      className="h-[500px] bg-cover border bg-right-top flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="text-[#151515] text-center bg-white mx-20 py-12 px-14">
        <h2 className="text-5xl leading-[62px] mb-4">Bistro Boss</h2>
        <p className="leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
