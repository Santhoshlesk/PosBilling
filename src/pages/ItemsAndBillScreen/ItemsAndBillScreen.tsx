import { useState } from "react";
import BillScreen from "./BillScreen";
import ItemsScreen from "./ItemsScreen";
import { MenuItem, OrderItem } from "./types";

const ItemsAndBillScreen = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const handleAddToOrder = (item: MenuItem) => {
    const existingItem = orderItems.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      const updatedItems = orderItems.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrderItems(updatedItems);
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="h-screen p-2 bg-gray-200">
      <div className="flex h-[calc(100vh-1rem)] lg:flex-row flex-col-reverse shadow-lg bg-white rounded-lg">
        <ItemsScreen onAddToOrder={handleAddToOrder} />
        <BillScreen orderItems={orderItems} setOrderItems={setOrderItems} />
      </div>
    </div>
  );
};

export default ItemsAndBillScreen;