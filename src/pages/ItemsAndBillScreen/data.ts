import { Category, MenuItem } from "./types";

export const categories: Category[] = [
  { id: "all", name: "All items" },
  { id: "food", name: "Food" },
  { id: "cold-drinks", name: "Cold Drinks" },
  { id: "hot-drinks", name: "Hot Drinks" },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Grilled corn",
    weight: "150g",
    price: 1.75,
    image: "https://images.pexels.com/photos/9848151/pexels-photo-9848151.jpeg"
  },
  {
    id: "2",
    name: "Ranch Burger",
    weight: "250g",
    price: 7.00,
    image: "https://source.unsplash.com/sc5sTPMrVfk/600x500"
  },
  {
    id: "3",
    name: "Pizza Bacon",
    weight: "350g",
    price: 12.50,
    image: "https://source.unsplash.com/MNtag_eXMKw/600x600"
  }
];