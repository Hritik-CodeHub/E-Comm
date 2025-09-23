import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  rating: number;
  isHot?: boolean;
  selectedColor?: string | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  currentPrice,
  originalPrice,
  discount,
  rating,
  isHot = false,
  selectedColor = null
}) => {

  console.log(selectedColor);

  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = [] as React.ReactNode[];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} size={16} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" size={16} className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} size={16} className="text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-sm  overflow-hidden group relative">
      {/* HOT Label */}
      {isHot && (
        <div className="absolute top-1 left-0 z-10" >
          <span className="bg-[#ef4444] font-bold font-lg py-1 px-2 text-white rounded-[0.125rem]">
            HOT
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden h-64 flex items-center justify-center" >
        <img
          src={image}
          alt={name}
          className="w-full h-full  group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        {/* Product Name */}
        <h3 className="text-[#223263]  font-bold text-lg font-Poppins  mb-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center  mb-3">
          <div className="flex items-center gap-2">
            {renderStars(rating)}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-center space-x-2">
          <span className="text-[#40BFFF]  font-bold text-lg font-Poppins">
            ${currentPrice.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${originalPrice.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-sm font-bold text-red-500">
            {discount}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
