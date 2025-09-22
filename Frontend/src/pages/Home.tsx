import { useMemo, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Sidebar from "../components/layout/Sidebar";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/layout/Pagination";
import FilterPanel from "../components/layout/FilterPanel";

// Sample product data
const sampleProducts = [
  {
    id: "1",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/NikeAirMax.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  },
  {
    id: "2",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/bagW.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  },
  {
    id: "3",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/SmallBag.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  },
  {
    id: "4",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/NikeAir2.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  },
  {
    id: "5",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/NikeAir3.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  },
  {
    id: "6",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/NikeXPro.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  },
  {
    id: "6",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/NikeXPro.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  },
  {
    id: "6",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/NikeXPro.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  },
  {
    id: "6",
    name: "Nike Air Max 270 React",
    image: "/src/assets/products/NikeXPro.png",
    currentPrice: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true
  }
];

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>("name");
  const [pageSize, setPageSize] = useState<number>(12);

  const sortedProducts = useMemo(() => {
    const arr = [...sampleProducts];
    switch (sortBy) {
      case "priceAsc":
        arr.sort((a, b) => a.currentPrice - b.currentPrice);
        break;
      case "priceDesc":
        arr.sort((a, b) => b.currentPrice - a.currentPrice);
        break;
      case "popularity":
        arr.sort((a, b) => b.rating - a.rating);
        break;
      default:
        arr.sort((a, b) => a.name.localeCompare(b.name));
    }
    return arr;
  }, [sortBy]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / pageSize));

  const pagedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedProducts.slice(startIndex, startIndex + pageSize);
  }, [currentPage, pageSize, sortedProducts]);

  const goToPage = (page: number) => {
    const safePage = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(safePage);
  };

  return (
    <div className="container mx-auto flex gap-6 p-6">
      <Sidebar />
      <div className="flex-1">
        <Carousel/>
        {/* Filter / Sort Panel */}
        <div className="mt-6">
          <FilterPanel
            totalItems={sortedProducts.length}
            sortBy={sortBy}
            onChangeSortBy={(v) => { setSortBy(v); setCurrentPage(1); }}
            pageSize={pageSize}
            onChangePageSize={(n) => { setPageSize(n); setCurrentPage(1); }}
          />
        </div>
        
        {/* Product Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {pagedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                currentPrice={product.currentPrice}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                isHot={product.isHot}
              />
            ))}
          </div>

          {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
