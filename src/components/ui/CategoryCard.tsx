
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
      className="relative block group overflow-hidden rounded-lg hover-lift"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
      
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={image}
          alt={`${formattedName} category`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-white font-display text-xl md:text-2xl font-medium text-shadow">
          {formattedName}
        </h3>
        <p className="text-white/80 text-sm mt-1">
          {count} {count === 1 ? 'item' : 'items'}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
