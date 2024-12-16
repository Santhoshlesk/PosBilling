// import React from 'react'

const ItemsScreen = () => {
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
      <div className="mt-5 flex flex-row px-5">
        <span className="px-5 py-1 bg-yellow-500 rounded-2xl text-white text-sm mr-4">
          All items
        </span>
        <span className="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
          Food
        </span>
        <span className="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
          Cold Drinks
        </span>
        <span className="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
          Hot Drinks
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto h-3/4">
        <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-32 justify-between">
          <div>
            <div className="font-bold text-gray-800">Griled corn</div>
            <span className="font-light text-sm text-gray-400">150g</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span className="self-end font-bold text-lg text-yellow-500">
              $1.75
            </span>
            <img
              src="https://images.pexels.com/photos/9848151/pexels-photo-9848151.jpeg?cs=srgb&dl=pexels-ehioma-osih-109764575-9848151.jpg&fm=jpg&_gl=1*1xmb85t*_ga*MTQxNTIzNDY5Mi4xNzI3OTc3NTU2*_ga_8JE65Q40S6*MTcyNzk3NzU1NS4xLjEuMTcyNzk3NzU2NC4wLjAuMA.."
              className="h-14 w-14 object-cover rounded-md"
              alt="Grilled corn"
            />
          </div>
        </div>
        <div className="col-span-2 px-3 py-3 bg-orange-300 rounded-xl">
          <div className="flex h-full">
            <div className="w-1/3 h-full">
              <img
                src="https://images.unsplash.com/photo-1622180203374-9524a54b734d"
                alt="Shop preview"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex-1 ml-4 flex flex-col justify-between">
              <div>
                <div className="text-xs text-blue-700 font-medium">Shop</div>
                <h2 className="text-lg font-medium text-gray-800">Massive Dynamic</h2>
              </div>
              <div className="flex justify-between items-end">
                <button className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full text-sm">
                  <span className="text-green-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>62 Products</span>
                </button>
                <button className="bg-gray-900 px-4 py-1 text-sm text-white rounded-full hover:bg-gray-800">
                  Edit Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsScreen;