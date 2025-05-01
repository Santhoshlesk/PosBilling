import { useState } from "react";
import { categories, menuItems } from "./data";
import { Category, MenuItem } from "./types";
import ProductCard from "./components/ProductCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ItemsScreenProps {
  onAddToOrder: (item: MenuItem) => void;
}

const ItemsScreen = ({ onAddToOrder }: ItemsScreenProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category["id"]>("all");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<MenuItem>>({
    name: "",
    weight: "",
    price: 0,
    inventory: 0,
    category: "bakery",
    image: ""
  });

  const filteredItems = menuItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  const handleAddProduct = () => {
    console.log("Adding new product:", newProduct);
    setShowAddProduct(false);
    setNewProduct({
      name: "",
      weight: "",
      price: 0,
      inventory: 0,
      category: "bakery",
      image: ""
    });
  };

  return (
    <div className="w-full lg:w-3/5 h-full flex flex-col">
      <div className="flex flex-row justify-between items-center px-5 py-3">
        <div className="text-gray-800">
          <div className="font-bold text-xl">Sethu Raman G</div>
          <span className="text-xs">Location ID#SIMON123</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowAddProduct(true)}
            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
          >
            Add Product
          </button>
          <div className="text-sm text-center">
            <div className="font-light text-gray-500">last synced</div>
            <span className="font-semibold">3 mins ago</span>
          </div>
        </div>
      </div>

      <div className="flex px-5 overflow-x-auto py-3 gap-4">
        {categories.map((category) => (
          <span
            key={category.id}
            className={`px-5 py-1 rounded-2xl text-sm cursor-pointer whitespace-nowrap ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-5 overflow-y-auto flex-grow">
        {filteredItems.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToOrder={onAddToOrder}
          />
        ))}
      </div>

      <Dialog open={showAddProduct} onOpenChange={setShowAddProduct}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Fill in the product details below to add a new item to your inventory.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Weight</label>
              <Input
                value={newProduct.weight}
                onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Price</label>
              <Input
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Initial Inventory</label>
              <Input
                type="number"
                value={newProduct.inventory}
                onChange={(e) => setNewProduct({ ...newProduct, inventory: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Image URL</label>
              <Input
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
            </div>
            <Button onClick={handleAddProduct} className="w-full bg-primary hover:bg-primary/90">
              Add Product
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ItemsScreen;