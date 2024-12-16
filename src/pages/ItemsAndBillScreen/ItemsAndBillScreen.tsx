import BillScreen from "./BillScreen";
import ItemsScreen from "./ItemsScreen";

const ItemsAndBillScreen = () => {
  return (
    <div className="min-h-screen p-2 bg-gray-200">
      <div className="flex h-full lg:flex-row flex-col-reverse shadow-lg bg-white rounded-lg">
        <ItemsScreen />
        <BillScreen />
      </div>
    </div>
  );
};

export default ItemsAndBillScreen;