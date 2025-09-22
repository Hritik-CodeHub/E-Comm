import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  rating: number;
  isHot?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  currentPrice,
  originalPrice,
  discount,
  rating,
  isHot = false
}) => {
  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <svg
            className="w-4 h-4 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
          <div className="absolute top-0 left-0 w-2 h-4 overflow-hidden">
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
        </div>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
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
      <div className="relative overflow-hidden bg-white h-64 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full  group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        {/* Product Name */}
        <h3 className="product-name mb-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-center space-x-2">
          <span className="product-price">
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
