import type { FC } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, goToPage }) => {
    return (
        < div className="mt-6" >
            <div className="w-full bg-gray-50 rounded-md flex items-center justify-center py-3 gap-2">
                {/* Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={
                            page === currentPage
                                ? "px-4 py-2 text-white rounded-md bg-sky-400"
                                : "px-4 py-2 rounded-md hover:bg-gray-100"
                        }
                    >
                        {page}
                    </button>
                ))}

            </div>
        </div >
    );
}

export default Pagination;