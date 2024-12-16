export interface MenuItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  image: string;
  inventory: number;
  category: string;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}