const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-4">
      <div>
        <img
          className="block w-[120px] h-20 rounded-[0_200px_200px_200px]"
          src={image}
          alt="Menu item"
        />
      </div>
      <div className="flex-1">
        <h2 className="uppercase text-[#151515] text-xl leading-7">
          {name}--------------
        </h2>
        <p className="text-[#737373] mt-2">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default MenuItem;
