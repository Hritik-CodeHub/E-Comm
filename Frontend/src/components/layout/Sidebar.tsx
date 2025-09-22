import { useState } from "react";
import type { FC } from "react";

const Sidebar: FC = () => {
  // Mock filter states
  const [price, setPrice] = useState<[number, number]>([13.99, 25.99]);
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  console.log(selectedColor);

  return (
    <aside className="w-64 space-y-4 hidden lg:block">
      {/* Hot Deals */}
      <div className="bg-[#F6F7F8] p-4 rounded-sm shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">Hot Deals</h3>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>Nike</span> <span>2</span>
          </li>
          <li className="flex justify-between hover:text-blue-500  text-gray-600 cursor-pointer">
            <span>Airmax</span> <span>48</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>Nike</span> <span>14</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>Adidas</span> <span>15</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>Vans</span> <span>23</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>All Stars</span> <span>1</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>Adidas</span> <span>1</span>
          </li>
          
        </ul>
      </div>

      {/* PRICES */}
      <div className="bg-[#F6F7F8] p-4 rounded-sm shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">PRICES</h3>
          
        </div>
        <p className="text-sm text-gray-500 mb-3">
          Ranger: ${price[0]} - ${price[1]}
        </p>
        <div className="relative">
          <input
            type="range"
            min="10"
            max="50"
            value={price[1]}
            onChange={(e) =>
              setPrice([price[0], parseFloat(e.target.value)])
            }
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* COLOR */}
      <div className="bg-[#F6F7F8] p-4 rounded-sm shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">COLOR</h3>
        <div className="flex gap-3">
          {[
            { name: "blue", color: "#3b82f6", selected: true },
            { name: "red", color: "#ef4444", selected: false },
            { name: "black", color: "#000000", selected: false },
            { name: "yellow", color: "#eab308", selected: false },
            { name: "pink", color: "#ec4899", selected: false },
            { name: "beige", color: "#f5f5dc", selected: false }
          ].map((colorOption) => (
            <button
              key={colorOption.name}
              className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-blue-300"
              style={{ backgroundColor: colorOption.color }}
              onClick={() => setSelectedColor(colorOption.name)}
            />
          ))}
        </div>
      </div>

      {/* BRAND */}
      <div className="bg-[#F6F7F8] p-4 rounded-sm shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">BRAND</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>Nike</span> <span>99</span>
          </li>
          <li className="flex justify-between hover:text-blue-500  text-gray-600 cursor-pointer">
            <span>Nike</span> <span>99</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>Adidas</span> <span>99</span>
          </li>
          <li className="flex justify-between hover:text-blue-500 text-gray-600">
            <span>Siemens</span> <span>99</span>
          </li>
        </ul>
      </div>

      {/* MORE Button */}
      <div className="bg-[#F6F7F8]  rounded-sm shadow-sm ">
        <button className="w-full bg-gray-100 text-gray-800 font-bold py-4 px-4 rounded hover:bg-gray-200 transition-colors">
          MORE
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
