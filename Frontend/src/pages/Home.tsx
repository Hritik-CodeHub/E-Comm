import { useMemo, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Sidebar from "../components/layout/Sidebar";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/layout/Pagination";
import FilterPanel from "../components/layout/FilterPanel";
import { sampleProducts} from "../components/MockData/MockData"


function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>("name");
  const [pageSize, setPageSize] = useState<number>(12);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const productCardExtraProps = useMemo(() => ({ selectedColor } as any), [selectedColor]);

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

  // Color options are handled in the Sidebar UI

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / pageSize));

  const filteredProducts = useMemo(() => {
    if (!selectedColor) return sortedProducts;
    return sortedProducts.filter((p: any) => p.color === selectedColor);
  }, [sortedProducts, selectedColor]);

  const pagedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredProducts.slice(startIndex, startIndex + pageSize);
  }, [currentPage, pageSize, filteredProducts]);

  const goToPage = (page: number) => {
    const safePage = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(safePage);
  };

  return (
    <div className="container mx-auto flex gap-6 p-6">
      <Sidebar selectedColor={selectedColor} onChangeSelectedColor={(c) => { setSelectedColor(c); setCurrentPage(1); }} />
      <div className="flex-1">
        <Carousel/>
        {/* Filter / Sort Panel */}
        <div className="mt-6">
          <FilterPanel
            totalItems={filteredProducts.length}
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
                {...productCardExtraProps}
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
