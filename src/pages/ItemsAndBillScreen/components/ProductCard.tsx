import { MenuItem } from "../types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: MenuItem;
  onAddToOrder: (item: MenuItem) => void;
}

const ProductCard = ({ product, onAddToOrder }: ProductCardProps) => {
  const isInStock = product.inventory > 0;
  const isLowStock = product.inventory <= 5 && product.inventory > 0;

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:shadow-lg animate-fade-in">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge 
          variant="secondary"
          className="absolute left-2 top-2 bg-black/60 text-white hover:bg-black/70"
        >
          {product.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight text-lg line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            {isInStock ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500" />
            )}
            <span 
              className={cn(
                "font-medium",
                isInStock 
                  ? isLowStock 
                    ? "text-yellow-600" 
                    : "text-green-600"
                  : "text-red-600"
              )}
            >
              {isInStock 
                ? isLowStock 
                  ? "Low Stock" 
                  : "In Stock" 
                : "Out of Stock"}
            </span>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          {product.weight}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground">
              Stock: {product.inventory}
            </span>
          </div>
          
          <Button
            onClick={() => onAddToOrder(product)}
            disabled={!isInStock}
            className="transition-all duration-200 hover:scale-105"
            size="sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;