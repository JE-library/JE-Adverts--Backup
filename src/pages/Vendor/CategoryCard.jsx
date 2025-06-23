const CategoryCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{title}</h3>

        <div className="flex justify-center gap-2 mt-auto">
          <button className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-3 py-1 rounded text-sm font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] hover:opacity-90 cursor-pointer">
            View
          </button>
          <button className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-3 py-1 rounded text-sm font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] hover:opacity-90 cursor-pointer">
            Edit
          </button>
          <button className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-3 py-1 rounded text-sm font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] hover:opacity-90 cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
