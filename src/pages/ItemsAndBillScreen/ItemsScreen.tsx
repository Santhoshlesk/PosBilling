import { useState } from "react";
import { categories, menuItems } from "./data";
import { Category } from "./types";

const ItemsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category["id"]>("all");

  return (
    <div className="w-full lg:w-3/5 h-full shadow-lg">
      <div className="flex flex-row justify-between items-center px-5 mt-5">
        <div className="text-gray-800">
          <div className="font-bold text-xl">Sethu Raman G</div>
          <span className="text-xs">Location ID#SIMON123</span>
        </div>
        <div className="flex items-center">
          <div className="text-sm text-center mr-4">
            <div className="font-light text-gray-500">last synced</div>
            <span className="font-semibold">3 mins ago</span>
          </div>
          <div>
            <span className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded">
              Help
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-row px-5 overflow-x-auto">
        {categories.map((category) => (
          <span
            key={category.id}
            className={`px-5 py-1 rounded-2xl text-sm mr-4 cursor-pointer whitespace-nowrap ${
              selectedCategory === category.id
                ? "bg-yellow-500 text-white"
                : "font-semibold"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto h-3/4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between"
          >
            <div>
              <div className="font-bold text-gray-800">{item.name}</div>
              <span className="font-light text-sm text-gray-400">
                {item.weight}
              </span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <span className="self-end font-bold text-lg text-yellow-500">
                ${item.price.toFixed(2)}
              </span>
              <img
                src={item.image}
                className="h-14 w-14 object-cover rounded-md"
                alt={item.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsScreen;