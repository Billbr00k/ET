
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
}

const CategoryCard = ({ name, image, count }: CategoryCardProps) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  
  return (
    <Link 
      to={`/products?category=${name}`}
      className="relative block group overflow-hidden rounded-lg hover-lift transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10 transition-opacity duration-500 group-hover:opacity-90" />
      
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={image}
          alt={`${formattedName} category`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
        <h3 className="text-white font-display text-xl md:text-2xl font-medium text-shadow">
          {formattedName}
        </h3>
        <p className="text-white/80 text-sm mt-1 transform transition-all duration-500 opacity-80 group-hover:opacity-100">
          {count} {count === 1 ? 'item' : 'items'}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
