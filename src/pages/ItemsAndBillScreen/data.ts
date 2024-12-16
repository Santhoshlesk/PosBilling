import { Category, MenuItem } from "./types";

export const categories: Category[] = [
  { id: "all", name: "All items" },
  { id: "bakery", name: "Bakery" },
  { id: "food", name: "Food" },
  { id: "cold-drinks", name: "Cold Drinks" },
  { id: "hot-drinks", name: "Hot Drinks" },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Chocolate Croissant",
    weight: "80g",
    price: 3.50,
    inventory: 25,
    category: "bakery",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a"
  },
  {
    id: "2",
    name: "Sourdough Bread",
    weight: "500g",
    price: 6.00,
    inventory: 15,
    category: "bakery",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df"
  },
  {
    id: "3",
    name: "Blueberry Muffin",
    weight: "120g",
    price: 2.75,
    inventory: 30,
    category: "bakery",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa"
  },
  {
    id: "4",
    name: "Grilled corn",
    weight: "150g",
    price: 1.75,
    inventory: 50,
    category: "food",
    image: "https://images.pexels.com/photos/9848151/pexels-photo-9848151.jpeg"
  },
  {
    id: "5",
    name: "Ranch Burger",
    weight: "250g",
    price: 7.00,
    inventory: 20,
    category: "food",
    image: "https://source.unsplash.com/sc5sTPMrVfk/600x500"
  },
  {
    id: "6",
    name: "Pizza Bacon",
    weight: "350g",
    price: 12.50,
    inventory: 10,
    category: "food",
    image: "https://source.unsplash.com/MNtag_eXMKw/600x600"
  }
];
