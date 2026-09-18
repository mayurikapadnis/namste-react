const menuData = {
  1: {
    restaurant: {
      name: "Ishan Pure Veg",
      cuisines: ["North Indian", "South Indian", "Beverages", "Chinese"],
      rating: 4.5,
      ratingCount: "11K+",
      costForTwo: "₹200 for two",
      location: "Shivaji Nagar",
    },

    categories: [
      {
        title: "Recommended",
        items: [
          {
            name: "Paneer Butter Masala",
            price: 220,
            description: "Soft paneer cooked in a rich buttery tomato gravy",
            isVeg: true,
          },
          {
            name: "Veg Biryani",
            price: 180,
            description:
              "Fragrant basmati rice cooked with vegetables and spices",
            isVeg: true,
          },
        ],
      },
      {
        title: "North Indian",
        items: [
          {
            name: "Paneer Tikka",
            price: 200,
            description: "Grilled paneer with onions and capsicum",
            isVeg: true,
          },
          {
            name: "Dal Tadka",
            price: 150,
            description: "Yellow dal tempered with Indian spices",
            isVeg: true,
          },
          {
            name: "Butter Naan",
            price: 50,
            description: "Soft naan topped with butter",
            isVeg: true,
          },
        ],
      },
      {
        title: "Chinese",
        items: [
          {
            name: "Veg Manchurian",
            price: 170,
            description: "Crispy vegetable balls tossed in Manchurian sauce",
            isVeg: true,
          },
          {
            name: "Veg Hakka Noodles",
            price: 160,
            description: "Stir-fried noodles with fresh vegetables",
            isVeg: true,
          },
        ],
      },
    ],
  },

  2: {
    restaurant: {
      name: "Le Plaisir",
      cuisines: ["European"],
      rating: 4.6,
      ratingCount: "22K+",
      costForTwo: "₹1000 for two",
      location: "Deccan Gymkhana",
    },

    categories: [
      {
        title: "Recommended",
        items: [
          {
            name: "Chicken Steak",
            price: 450,
            description: "Grilled chicken steak served with vegetables",
            isVeg: false,
          },
          {
            name: "Pasta Alfredo",
            price: 350,
            description: "Creamy pasta with parmesan and herbs",
            isVeg: true,
          },
        ],
      },
      {
        title: "Pasta",
        items: [
          {
            name: "Arrabbiata Pasta",
            price: 320,
            description: "Pasta tossed in spicy tomato sauce",
            isVeg: true,
          },
          {
            name: "Pesto Pasta",
            price: 360,
            description: "Pasta with basil pesto and parmesan",
            isVeg: true,
          },
        ],
      },
      {
        title: "Main Course",
        items: [
          {
            name: "Grilled Chicken",
            price: 480,
            description: "Herb-marinated grilled chicken with vegetables",
            isVeg: false,
          },
          {
            name: "Vegetable Steak",
            price: 380,
            description: "Grilled seasonal vegetables with sauce",
            isVeg: true,
          },
        ],
      },
    ],
  },

  3: {
    restaurant: {
      name: "Abhishek Veg Restaurant",
      cuisines: [
        "North Indian",
        "South Indian",
        "Biryani",
        "Chinese",
        "Chaat",
        "Maharashtrian",
        "Thalis",
        "Desserts",
        "Beverages",
      ],
      rating: 4.5,
      ratingCount: "58K+",
      costForTwo: "₹300 for two",
      location: "Erandwane",
    },

    categories: [
      {
        title: "Recommended",
        items: [
          {
            name: "Paneer Biryani",
            price: 220,
            description: "Aromatic basmati rice with paneer and spices",
            isVeg: true,
          },
          {
            name: "Special Veg Thali",
            price: 250,
            description:
              "Complete Indian meal with vegetables, dal, roti and rice",
            isVeg: true,
          },
        ],
      },
      {
        title: "Biryani",
        items: [
          {
            name: "Veg Biryani",
            price: 180,
            description: "Fragrant rice cooked with vegetables and spices",
            isVeg: true,
          },
          {
            name: "Paneer Biryani",
            price: 220,
            description: "Biryani prepared with marinated paneer",
            isVeg: true,
          },
        ],
      },
      {
        title: "Maharashtrian",
        items: [
          {
            name: "Misal Pav",
            price: 120,
            description: "Spicy sprouts curry served with pav",
            isVeg: true,
          },
          {
            name: "Pav Bhaji",
            price: 140,
            description: "Spiced vegetable mash served with buttered pav",
            isVeg: true,
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Gulab Jamun",
            price: 80,
            description: "Soft milk-solid dumplings soaked in sugar syrup",
            isVeg: true,
          },
          {
            name: "Ice Cream",
            price: 100,
            description: "Creamy ice cream of your choice",
            isVeg: true,
          },
        ],
      },
    ],
  },

  4: {
    restaurant: {
      name: "Cafe Durga",
      cuisines: ["Indian"],
      rating: 3.8,
      ratingCount: "390",
      costForTwo: "₹300 for two",
      location: "Ghole Road",
    },

    categories: [
      {
        title: "Recommended",
        items: [
          {
            name: "Misal Pav",
            price: 100,
            description: "Spicy Maharashtrian misal served with pav",
            isVeg: true,
          },
          {
            name: "Masala Dosa",
            price: 120,
            description: "Crispy dosa filled with spiced potato",
            isVeg: true,
          },
        ],
      },
      {
        title: "Breakfast",
        items: [
          {
            name: "Poha",
            price: 70,
            description: "Maharashtrian flattened rice with peanuts and spices",
            isVeg: true,
          },
          {
            name: "Upma",
            price: 70,
            description: "Savory semolina breakfast dish",
            isVeg: true,
          },
        ],
      },
      {
        title: "Beverages",
        items: [
          {
            name: "Cold Coffee",
            price: 100,
            description: "Chilled creamy coffee",
            isVeg: true,
          },
          {
            name: "Fresh Lime Soda",
            price: 70,
            description: "Refreshing lime soda",
            isVeg: true,
          },
        ],
      },
    ],
  },

  5: {
    restaurant: {
      name: "SA Dosa Cafe",
      cuisines: [
        "South Indian",
        "Snacks",
        "Beverages",
        "Fast Food",
        "Pizzas",
        "Indian",
      ],
      rating: 4.2,
      ratingCount: "1.8K+",
      costForTwo: "₹200 for two",
      location: "Karve Road",
    },

    categories: [
      {
        title: "Recommended",
        items: [
          {
            name: "Masala Dosa",
            price: 120,
            description: "Crispy dosa filled with spiced potato masala",
            isVeg: true,
          },
          {
            name: "Mysore Masala Dosa",
            price: 140,
            description: "Spicy Mysore dosa with potato filling",
            isVeg: true,
          },
        ],
      },
      {
        title: "Dosa",
        items: [
          {
            name: "Plain Dosa",
            price: 90,
            description: "Crispy South Indian dosa",
            isVeg: true,
          },
          {
            name: "Cheese Dosa",
            price: 150,
            description: "Dosa topped with melted cheese",
            isVeg: true,
          },
          {
            name: "Paneer Dosa",
            price: 160,
            description: "Dosa filled with spicy paneer mixture",
            isVeg: true,
          },
        ],
      },
      {
        title: "South Indian",
        items: [
          {
            name: "Idli Sambar",
            price: 80,
            description: "Soft idlis served with hot sambar",
            isVeg: true,
          },
          {
            name: "Medu Vada",
            price: 90,
            description: "Crispy South Indian lentil fritters",
            isVeg: true,
          },
        ],
      },
    ],
  },

  6: {
    restaurant: {
      name: "Sattva Pure Veg Restaurant",
      cuisines: [
        "North Indian",
        "Beverages",
        "Juices",
        "Desserts",
        "Chinese",
        "Salads",
        "Snacks",
        "Pizzas",
        "Pastas",
        "South Indian",
      ],
      rating: 4,
      ratingCount: "211",
      costForTwo: "₹350 for two",
      location: "Baner",
    },

    categories: [
      {
        title: "Recommended",
        items: [
          {
            name: "Paneer Tikka",
            price: 220,
            description: "Grilled paneer with Indian spices",
            isVeg: true,
          },
          {
            name: "Veg Pizza",
            price: 250,
            description: "Pizza topped with fresh vegetables and cheese",
            isVeg: true,
          },
        ],
      },
      {
        title: "North Indian",
        items: [
          {
            name: "Paneer Butter Masala",
            price: 230,
            description: "Paneer cooked in creamy tomato gravy",
            isVeg: true,
          },
          {
            name: "Dal Makhani",
            price: 190,
            description: "Slow-cooked black lentils with butter",
            isVeg: true,
          },
        ],
      },
      {
        title: "Pizza",
        items: [
          {
            name: "Margherita Pizza",
            price: 220,
            description: "Classic pizza with tomato sauce and mozzarella",
            isVeg: true,
          },
          {
            name: "Farmhouse Pizza",
            price: 280,
            description: "Pizza loaded with fresh vegetables",
            isVeg: true,
          },
        ],
      },
    ],
  },

  7: {
    restaurant: {
      name: "Shri Swami Samartha Pure Veg",
      cuisines: [
        "North Indian",
        "Chinese",
        "Pav Bhaji",
        "Biryani",
        "Beverages",
        "Dessert",
      ],
      rating: 4.2,
      ratingCount: "24K+",
      costForTwo: "₹200 for two",
      location: "Kothrud",
    },

    categories: [
      {
        title: "Recommended",
        items: [
          {
            name: "Special Pav Bhaji",
            price: 140,
            description: "Buttery pav served with spicy vegetable bhaji",
            isVeg: true,
          },
          {
            name: "Veg Biryani",
            price: 170,
            description: "Aromatic vegetable biryani",
            isVeg: true,
          },
        ],
      },
      {
        title: "Pav Bhaji",
        items: [
          {
            name: "Classic Pav Bhaji",
            price: 120,
            description: "Mumbai-style spicy vegetable bhaji with pav",
            isVeg: true,
          },
          {
            name: "Cheese Pav Bhaji",
            price: 160,
            description: "Pav bhaji topped with melted cheese",
            isVeg: true,
          },
        ],
      },
      {
        title: "Chinese",
        items: [
          {
            name: "Veg Fried Rice",
            price: 150,
            description: "Fried rice with fresh vegetables",
            isVeg: true,
          },
          {
            name: "Veg Manchurian",
            price: 160,
            description: "Crispy vegetable balls in Manchurian sauce",
            isVeg: true,
          },
        ],
      },
    ],
  },

  8: {
    restaurant: {
      name: "Zillionth Bistro",
      cuisines: [
        "Chinese",
        "Burgers",
        "Thai",
        "Asian",
        "Pan Asian",
        "Fast Food",
        "Beverages",
      ],
      rating: 4.3,
      ratingCount: "5.0K+",
      costForTwo: "₹250 for two",
      location: "Karve Road",
    },

    categories: [
      {
        title: "Recommended",
        items: [
          {
            name: "Crispy Chicken Burger",
            price: 220,
            description: "Crispy chicken patty with fresh vegetables and sauce",
            isVeg: false,
          },
          {
            name: "Thai Green Curry",
            price: 280,
            description: "Thai curry with vegetables and aromatic herbs",
            isVeg: true,
          },
        ],
      },
      {
        title: "Burgers",
        items: [
          {
            name: "Classic Veg Burger",
            price: 150,
            description: "Crispy veg patty with fresh vegetables",
            isVeg: true,
          },
          {
            name: "Crispy Chicken Burger",
            price: 220,
            description: "Crispy chicken patty with house sauce",
            isVeg: false,
          },
        ],
      },
      {
        title: "Chinese",
        items: [
          {
            name: "Veg Hakka Noodles",
            price: 170,
            description: "Stir-fried noodles with vegetables",
            isVeg: true,
          },
          {
            name: "Schezwan Fried Rice",
            price: 180,
            description: "Spicy fried rice with Schezwan sauce",
            isVeg: true,
          },
        ],
      },
      {
        title: "Thai",
        items: [
          {
            name: "Thai Green Curry",
            price: 280,
            description: "Creamy Thai green curry with vegetables",
            isVeg: true,
          },
          {
            name: "Pad Thai",
            price: 240,
            description: "Thai-style stir-fried rice noodles",
            isVeg: true,
          },
        ],
      },
    ],
  },
};

export default menuData;
