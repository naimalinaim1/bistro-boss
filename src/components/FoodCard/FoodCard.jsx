const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card bg-[#F3F3F3]">
      <figure className="min-h-[300px]">
        <img src={image} alt={name} />
        <p className="bg-slate-900 text-white absolute right-4 top-4 px-5 py-2 rounded">
          {price} $
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto mb-2">{name}</h2>
        <p className="text-gray-500">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-orange-400 bg-slate-200 border-0 border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
