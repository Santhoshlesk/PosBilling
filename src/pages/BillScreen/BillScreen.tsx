import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const BillScreen = () => {
  const [showInvoice, setShowInvoice] = useState(false);

  const handlePayment = () => {
    setShowInvoice(true);
  };

  return (
    <div className="w-full lg:w-2/5 flex flex-col">
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold">Bill Summary</h2>
      </div>
      <div className="px-4 py-4 mt-5 flex-grow overflow-y-auto h-64">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span>Item 1</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between">
            <span>Item 2</span>
            <span>$15.00</span>
          </div>
          <div className="flex justify-between">
            <span>Item 3</span>
            <span>$20.00</span>
          </div>
        </div>
      </div>
      <div className="px-4 mt-5">
        <div className="py-4 rounded-md shadow-lg">
          <div className="flex justify-between">
            <span className="font-bold">Total</span>
            <span className="font-bold">$45.00</span>
          </div>
        </div>
      </div>
      <div className="px-4 my-5">
        <div 
          className="px-4 py-4 cursor-pointer rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition-colors"
          onClick={handlePayment}
        >
          Pay With Cashless Credit
        </div>
      </div>

      <Dialog open={showInvoice} onOpenChange={setShowInvoice}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Invoice</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-2">Order Details</h3>
              <p className="text-sm text-gray-600">Order #: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Items</h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Stuffed flank steak x2</span>
                  <span>$13.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Grilled Corn x10</span>
                  <span>$3.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Ranch Burger x1</span>
                  <span>$2.50</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>$35.25</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span>-$5.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sales Tax</span>
                <span>$2.25</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$37.50</span>
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
