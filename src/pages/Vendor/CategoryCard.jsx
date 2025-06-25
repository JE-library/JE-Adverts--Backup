import { useNavigate } from "react-router";


const CategoryCard = ({ title, image, onDelete }) => {
 
  const navigate = useNavigate();

  return (
    <div className=  "shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="flex justify-between">
          <button
            onClick={() => navigate(`/ads/${title.toLowerCase()}`)}
            className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-2 py-1 rounded text-sm font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] transition"
          >
            View
          </button>
          <button
            onClick={() => navigate(`/ads/${title.toLowerCase()}/edit`)}
            className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-2 py-1 rounded text-sm font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] transition"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-2 py-1 rounded text-sm font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
