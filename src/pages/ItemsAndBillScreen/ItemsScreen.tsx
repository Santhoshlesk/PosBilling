import React, { useState } from "react";
import { Category, MenuItem } from "./types";
import ProductCard from "./components/ProductCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Plus } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ItemsScreenProps {
  onAddToOrder: (item: MenuItem) => void;
}

const ItemsScreen = ({ onAddToOrder }: ItemsScreenProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category["id"]>("All Items");
  const [showAddProduct, setShowAddProduct] = useState(false);

  

  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MenuItem>();

  React.useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_API_URL + "/products?select=*", {
        headers: {
          apikey:
          import.meta.env.VITE_BASE_API_KEY,
          Authorization:
            `Bearer ${import.meta.env.VITE_BASE_AUTH_KEY}`,
        },
      })
      .then((input) => {
        const data = input.data as MenuItem[];
        if (data) {
          setMenuItems(data);
        }
      });
  }, []);

  

  const categories=["All Items",...Array.from(new Set(menuItems.map(item=>item.category)))]

  const filteredItems = menuItems.filter(
    (item) => selectedCategory === "All Items" || item.category === selectedCategory
  );

  const handleAddProduct:SubmitHandler<MenuItem> = async (data:MenuItem) => {
    setShowAddProduct(false);
    console.log(data);
    
    await axios
    .post(import.meta.env.VITE_BASE_API_URL + "/products", data,{
      headers: {
        apikey:
        import.meta.env.VITE_BASE_API_KEY,
        Authorization:
          `Bearer ${import.meta.env.VITE_BASE_AUTH_KEY}`,
      },
    })
    .then((input) => {
      if (input.status==201) {
        reset()
        setShowAddProduct(false);
      }
    });
  };

  return (
    <div className="w-full lg:w-3/5 h-full flex flex-col">
      <div className="flex flex-row justify-between items-center px-5 py-3">
        <div className="text-gray-800">
          <div className="font-bold text-xl">Santhosh Kumar A</div>
          <span className="text-xs">Location ID#SIMON123</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowAddProduct(true)}
            className="px-2 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 flex gap-1"
          >
            <Plus />
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
            key={category}
            className={`px-5 py-1 rounded-2xl text-sm cursor-pointer whitespace-nowrap ${
              selectedCategory === category
                ? "bg-yellow-500 text-white"
                : "font-semibold"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
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
              Fill in the product details below to add a new item to your
              inventory.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input {...register("name", { required: "Name is required" })} />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Weight</label>
              <Input
                {...register("weight", { required: "Weight is required" })}
              />
              {errors.weight && (
                <p className="text-red-500 text-sm">{errors.weight.message}</p>
              )}
            </div>


            <div>
              <label className="text-sm font-medium">Category</label>
              <Input
                {...register("category", { required: "category is required" })}
              />
              {errors.weight && (
                <p className="text-red-500 text-sm">{errors.weight.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium">Price</label>
              <Input
                type="text"
                {...register("price", {
                  required: "Price is required",
                  // valueAsNumber: true,
                })}
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Initial Inventory</label>
              <Input
                type="number"
                {...register("inventory", {
                  required: "Inventory is required",
                  valueAsNumber: true,
                })}
              />
              {errors.inventory && (
                <p className="text-red-500 text-sm">
                  {errors.inventory.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Image URL</label>
              <Input
                {...register("image", { required: "Image URL is required" })}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Add Product
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ItemsScreen;
