import type { FC } from "react";
import { useState } from "react";
import { HiOutlineShoppingCart, HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const Navbar:FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="w-full bg-white shadow-sm">
      <div className='w-full  py-3 px-6'>
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="flex  items-center gap-2">
            <img
              src="./logo.png"
              className="w-13 h-11 object-contain"
            />
            <span className=" text-2xl font-bold text-gray-800 ">E-Comm</span>
          </div>

          {/* Desktop navBar */}
          <nav className="hidden   md:flex md:mx-4 text-grey-700 font-medium font-[Poppins] w-[804px] justify-between">
            <a href="/" className="hover:text-blue-500 transition text-xl text-[#22262A]">HOME</a>
            <a href="/bag" className="hover:text-blue-500 transition text-xl text-[#22262A]">BAG</a>
            <a href="/sneakers" className="hover:text-blue-500 transition text-xl text-[#22262A]">SNEAKERS</a>
            <a href="/belt" className="hover:text-blue-500 transition text-xl text-[#22262A]">BELT</a>
            <a href="/contact" className="hover:text-blue-500 transition text-xl text-[#22262A]">CONTACT</a>
          </nav>

          {/* Cart and Mobile toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <HiOutlineShoppingCart className="w-5 h-5 text-[#22262A]" />
              <span className="text-xl font-medium text-gray-700 font-[Proxima Nova]">Items</span>
              <span className="text-xl text-gray-400 font-[Proxima Nova]">$0.00</span>
            </div>

            
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <HiOutlineXMark className="w-6 h-6" /> : <HiOutlineBars3 className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 border-t border-gray-100 pt-3">
            <nav className="flex flex-col gap-3">
              <a href="/" className="py-2 text-[#22262A] text-lg hover:text-blue-500">HOME</a>
              <a href="/bag" className="py-2 text-[#22262A] text-lg hover:text-blue-500">BAG</a>
              <a href="/sneakers" className="py-2 text-[#22262A] text-lg hover:text-blue-500">SNEAKERS</a>
              <a href="/belt" className="py-2 text-[#22262A] text-lg hover:text-blue-500">BELT</a>
              <a href="/contact" className="py-2 text-[#22262A] text-lg hover:text-blue-500">CONTACT</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar