import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { MenuItem, OrderItem } from "./types";
import { toast } from "sonner";

interface BillScreenProps {
  orderItems: OrderItem[];
  setOrderItems: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

const BillScreen = ({ orderItems, setOrderItems }: BillScreenProps) => {
  const [showInvoice, setShowInvoice] = useState(false);

  const handleIncrement = (item: OrderItem) => {
    const updatedItems = orderItems.map((orderItem) => {
      if (orderItem.id === item.id) {
        if (orderItem.quantity < orderItem.inventory) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        toast.warning("Maximum stock reached",{
          description: `Only ${orderItem.inventory} ${orderItem.name} available`,
          duration: 5000,
        });
        return orderItem;
      }
      return orderItem;
    });
    setOrderItems(updatedItems);
  };

  const handleDecrement = (item: OrderItem) => {
    const updatedItems = orderItems.map((orderItem) => {
      if (orderItem.id === item.id) {
        if (orderItem.quantity > 1) {
          return { ...orderItem, quantity: orderItem.quantity - 1 };
        }
        return null;
      }
      return orderItem;
    }).filter((item): item is OrderItem => item !== null);
    setOrderItems(updatedItems);
  };

  const handleClearAll = () => {
    setOrderItems([]);
    toast.success("Order cleared",{
      description: "All items have been removed from the order",
      duration: 5000,
    });
  };

  const addToOrder = (item: MenuItem) => {
    const existingItem = orderItems.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      handleIncrement(existingItem);
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const subtotal = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = orderItems.length>0 ? 5.00:0;
  const tax = subtotal * 0.0638;
  const total = subtotal - discount + tax;

  return (
    <div className="w-full lg:w-2/5 flex flex-col h-full">
      <div className="flex flex-row items-center justify-between px-4 py-4">
        <div className="font-bold text-xl">Current Order</div>
        <div className="font-semibold">
          <button 
            onClick={handleClearAll}
            className="px-4 py-2 rounded-md bg-red-100 text-red-500 cursor-pointer hover:bg-red-200"
          >
            Clear All
          </button>
          <span className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 ml-2 cursor-pointer">
            Setting
          </span>
        </div>
      </div>

      <div className="px-4 py-4 flex-grow overflow-y-auto">
        {orderItems.map((item) => (
          <div key={item.id} className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-row items-center w-2/5">
              <img
                src={item.image}
                className="w-10 h-10 object-cover rounded-md"
                alt={item.name}
              />
              <span className="ml-4 font-semibold text-sm">{item.name}</span>
            </div>
            <div className="w-32 flex justify-between">
              <button 
                onClick={() => handleDecrement(item)}
                className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer"
              >
                -
              </button>
              <span className="font-semibold mx-4">{item.quantity}</span>
              <button 
                onClick={() => handleIncrement(item)}
                className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer"
              >
                +
              </button>
            </div>
            <div className="font-semibold text-lg w-16 text-center">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 mt-5">
        <div className="py-4 rounded-md shadow-lg">
          <div className="px-4 flex justify-between">
            <span className="font-semibold text-sm">Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="px-4 flex justify-between">
            <span className="font-semibold text-sm">Discount</span>
            <span className="font-bold">- ${discount.toFixed(2)}</span>
          </div>
          <div className="px-4 flex justify-between">
            <span className="font-semibold text-sm">Sales Tax</span>
            <span className="font-bold">${tax.toFixed(2)}</span>
          </div>
          <div className="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
            <span className="font-semibold text-2xl">Total</span>
            <span className="font-bold text-2xl">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="px-4 my-5">
        <button
          className="w-full px-4 py-4 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition-colors"
          onClick={() => setShowInvoice(true)}
        >
          Pay With Cashless Credit
        </button>
      </div>

      <Dialog open={showInvoice} onOpenChange={setShowInvoice}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Invoice</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2">Order Details</h3>
              <p className="text-sm text-gray-600">
                Order #: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
              <p className="text-sm text-gray-600">
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Items</h3>
              <div className="text-sm space-y-1">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span>{orderItems.length>0 ? '-':''}${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sales Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
              onClick={() => {
                // Here you would typically handle the actual payment processing
                setShowInvoice(false);
              }}
            >
              Confirm Payment
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BillScreen;