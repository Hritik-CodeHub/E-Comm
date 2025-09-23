import type { FC } from "react";
import { useState } from "react";
import { HiOutlineSquares2X2, HiOutlineBars3 } from "react-icons/hi2";

interface FilterPanelProps {
    totalItems: number;
    sortBy: string;
    onChangeSortBy: (value: string) => void;
    pageSize: number;
    onChangePageSize: (value: number) => void;
}

const FilterPanel: FC<FilterPanelProps> = ({ totalItems, sortBy, onChangeSortBy, pageSize, onChangePageSize }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const Controls = (
        <div className="flex items-center gap-4">
            <div className="text-sm text-gray-700 font-medium">{totalItems} Items</div>

            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Sort By</span>
                <select
                    value={sortBy}
                    onChange={(e) => onChangeSortBy(e.target.value)}
                    className="text-sm bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none"
                >
                    <option value="name">Name</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="popularity">Popularity</option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Show</span>
                <select
                    value={pageSize}
                    onChange={(e) => onChangePageSize(Number(e.target.value))}
                    className="text-sm bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none"
                >
                    <option value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                </select>
            </div>

            {/* Color filter removed; handled in Sidebar */}
        </div>
    );

    return (
        <div className="bg-gray-50 rounded-md px-4 py-3 ">
            <div className="flex items-center justify-end md:justify-between w-full">
                {/* Left controls - hidden on small screens */}
                <div className="hidden md:block">
                    {Controls}
                </div>

                {/* Right icons */}
                <div className="flex items-center gap-3">
                    
                    <button aria-label="grid icon" className="text-sky-400">
                        <HiOutlineSquares2X2 className="w-6 h-6" />
                    </button>
                    {/* Mobile menu icon */}
                    <button
                        aria-label="open filters"
                        className="text-gray-400 hover:text-sky-400"
                        onClick={() => setIsMobileMenuOpen((v) => !v)}
                    >
                        <HiOutlineBars3 className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown list */}
            {isMobileMenuOpen && (
                <div className="mt-3 md:hidden space-y-3">
                    <div className="w-full flex flex-col gap-2">
                        <span className="text-sm text-gray-700">{totalItems} Items</span>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <span className="text-sm text-gray-700">Sort By</span>
                        <select
                            value={sortBy}
                            onChange={(e) => onChangeSortBy(e.target.value)}
                            className="text-sm bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none"
                        >
                            <option value="name">Name</option>
                            <option value="priceAsc">Price: Low to High</option>
                            <option value="priceDesc">Price: High to Low</option>
                            <option value="popularity">Popularity</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <span className="text-sm text-gray-700">Show</span>
                        <select
                            value={pageSize}
                            onChange={(e) => onChangePageSize(Number(e.target.value))}
                            className="text-sm bg-white border border-gray-200 rounded-md px-3 py-2 focus:outline-none"
                        >
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={24}>24</option>
                            <option value={36}>36</option>
                        </select>
                    </div>
                    {/* Color filter removed in mobile too */}
                </div>
            )}
        </div>
    );
};

export default FilterPanel;


