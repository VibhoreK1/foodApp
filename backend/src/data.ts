export const sample_foods: any[] = [
  {
    id: "1",
    name: "Pizza",
    cookTime: "10-20",
    price: 500,
    favorite: false,
    origins: ["italy"],
    stars: 4.5,
    imageUrl: "assets/food-1.jpg",
    tags: ["FastFood", "Pizza", "Lunch"],
  },
  {
    id: "2",
    name: "Meatball",
    price: 200,
    cookTime: "20-30",
    favorite: true,
    origins: ["persia", "middle east", "china"],
    stars: 4.7,
    imageUrl: "assets/food-2.jpg",
    tags: ["SlowFood", "Lunch"],
  },
  {
    id: "3",
    name: "Burger",
    price: 80,
    cookTime: "10-15",
    favorite: false,
    origins: ["germany", "us"],
    stars: 3.5,
    imageUrl: "assets/food-3.jpg",
    tags: ["FastFood", "Burger"],
  },
  {
    id: "50",
    name: "Fries",
    price: 2,
    cookTime: "15-20",
    favorite: true,
    origins: ["belgium", "france"],
    stars: 3.3,
    imageUrl: "assets/food-4.jpg",
    tags: ["FastFood", "Fry"],
  },
  {
    id: "500",
    name: "Roasted Chicken",
    price: 11,
    cookTime: "40-50",
    favorite: false,
    origins: ["india", "asia"],
    stars: 3.0,
    imageUrl: "assets/food-5.jpg",
    tags: ["SlowFood", "Chicken"],
  },
  {
    id: "120",
    name: "Pav Bhaji",
    price: 9,
    cookTime: "40-50",
    favorite: false,
    origins: ["india"],
    stars: 4.0,
    imageUrl: "assets/food-6.jpg",
    tags: ["FastFood"],
  },
];

export const sample_tags: any[] = [
  { name: "All", count: 6 },
  { name: "FastFood", count: 4 },
  { name: "Pizza", count: 1 },
  { name: "Lunch", count: 2 },
  { name: "SlowFood", count: 2 },
  { name: "Burger", count: 1 },
  { name: "Fry", count: 1 },
  { name: "Chicken", count: 1 },
];

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];
