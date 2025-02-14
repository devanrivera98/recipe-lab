import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface SearchCard {
  id: number;
  title: string;
  image: string;
  imageType?: string;
}

export default function SearchCard({ id, title, image }: SearchCard) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <li key={id} className="search-card-container">
        <div className="search-card-body flex md:flex-col h-full">
          <div className="search-image-container">
            <img
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://www.simplyrecipes.com/thmb/OqIa97v74_ejCGqPxeyCs2Lv-1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SimplyRecipesPlaceholder-d1f4bdc2330a4d5ea617df96c74321cc.png";
              }}
              src={image}
              className="search-image object-cover"
            />
            <button
              className="heart-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
            </button>
          </div>
          <div className="flex-1 bg-gray-100 p-4">
            <h1 className="text-xl md:text-2xl">{title}</h1>
          </div>
        </div>
      </li>
    </>
  );
}
