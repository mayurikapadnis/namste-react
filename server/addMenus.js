const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "restaurants.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Menu data keyed by restaurant ID
const menus = {
  // Le Plaisir (5297) — European
  "5297": {
    categories: [
      { title: "Recommended", items: [
        { id: "lp1", name: "Chicken Steak", price: 450, description: "Herb-marinated grilled chicken with roasted vegetables", imageId: "lp-img-1" },
        { id: "lp2", name: "Pasta Alfredo", price: 350, description: "Creamy pasta with parmesan and fresh herbs", imageId: "lp-img-2" },
      ]},
      { title: "Main Course", items: [
        { id: "lp3", name: "Grilled Salmon", price: 620, description: "Atlantic salmon grilled to perfection with lemon butter", imageId: "lp-img-3" },
        { id: "lp4", name: "Vegetable Steak", price: 380, description: "Seasoned grilled seasonal vegetables with mushroom sauce", imageId: "lp-img-4" },
        { id: "lp5", name: "Beef Tenderloin", price: 750, description: "Classic beef tenderloin with red wine reduction", imageId: "lp-img-5" },
      ]},
      { title: "Pasta", items: [
        { id: "lp6", name: "Arrabbiata Pasta", price: 320, description: "Pasta tossed in spicy tomato sauce", imageId: "lp-img-6" },
        { id: "lp7", name: "Pesto Pasta", price: 360, description: "Basil pesto with parmesan and pine nuts", imageId: "lp-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "lp8", name: "Red Wine (Glass)", price: 450, description: "House red wine", imageId: "lp-img-8" },
        { id: "lp9", name: "Fresh Lemonade", price: 120, description: "Chilled fresh squeezed lemonade", imageId: "lp-img-9" },
      ]},
    ],
  },

  // Burger King (42581) — Burgers, American
  "42581": {
    categories: [
      { title: "Recommended", items: [
        { id: "bk1", name: "Whopper", price: 289, description: "¼ lb flame-grilled beef with fresh veggies, mayo, and ketchup", imageId: "bk-img-1" },
        { id: "bk2", name: "Crispy Chicken Burger", price: 229, description: "Crispy fried chicken fillet with lettuce and mayo", imageId: "bk-img-2" },
        { id: "bk3", name: "Veg Whopper", price: 239, description: "Flame-grilled veg patty with all the classic toppings", imageId: "bk-img-3" },
      ]},
      { title: "Burgers", items: [
        { id: "bk4", name: "Double Whopper", price: 369, description: "Two flame-grilled beef patties with cheese and veggies", imageId: "bk-img-4" },
        { id: "bk5", name: "Chicken Jr.", price: 149, description: "Crispy chicken burger — small but mighty", imageId: "bk-img-5" },
        { id: "bk6", name: "Mushroom Swiss Burger", price: 279, description: "Beef patty topped with Swiss cheese and sautéed mushrooms", imageId: "bk-img-6" },
      ]},
      { title: "Sides & Snacks", items: [
        { id: "bk7", name: "Onion Rings", price: 109, description: "Golden crispy battered onion rings", imageId: "bk-img-7" },
        { id: "bk8", name: "French Fries (Large)", price: 129, description: "Crispy golden fries — seasoned and fresh", imageId: "bk-img-8" },
      ]},
      { title: "Beverages", items: [
        { id: "bk9", name: "Pepsi (Large)", price: 89, description: "Chilled Pepsi served with ice", imageId: "bk-img-9" },
        { id: "bk10", name: "Mango Smoothie", price: 149, description: "Fresh mango blended smoothie", imageId: "bk-img-10" },
      ]},
    ],
  },

  // KFC (33723) — Burgers, Fast Food, Rolls & Wraps
  "33723": {
    categories: [
      { title: "Recommended", items: [
        { id: "kfc1", name: "Chicken Zinger Burger", price: 249, description: "Crispy chicken fillet with zinger sauce and lettuce", imageId: "kfc-img-1" },
        { id: "kfc2", name: "Chicken Bucket (8 Pcs)", price: 699, description: "8 pieces of KFC's original recipe crispy chicken", imageId: "kfc-img-2" },
        { id: "kfc3", name: "Popcorn Chicken", price: 179, description: "Bite-sized crispy chicken pieces in secret seasoning", imageId: "kfc-img-3" },
      ]},
      { title: "Burgers", items: [
        { id: "kfc4", name: "Classic Chicken Burger", price: 199, description: "Crispy chicken patty with creamy mayo and fresh veggies", imageId: "kfc-img-4" },
        { id: "kfc5", name: "Double Crunch Burger", price: 329, description: "Double crunch coating chicken with cheese", imageId: "kfc-img-5" },
      ]},
      { title: "Wraps & Rolls", items: [
        { id: "kfc6", name: "Chicken Zinger Roll", price: 199, description: "Crispy zinger chicken wrapped in a soft tortilla", imageId: "kfc-img-6" },
        { id: "kfc7", name: "Chicken Strips Wrap", price: 229, description: "Grilled chicken strips with sauce in a wrap", imageId: "kfc-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "kfc8", name: "Pepsi (Large)", price: 99, description: "Chilled Pepsi — large serving", imageId: "kfc-img-8" },
        { id: "kfc9", name: "Chocolate Shake", price: 149, description: "Rich creamy chocolate milkshake", imageId: "kfc-img-9" },
      ]},
    ],
  },

  // Barometer (36195) — Indian, Chinese, Continental, American, Italian, Beverages
  "36195": {
    categories: [
      { title: "Recommended", items: [
        { id: "bar1", name: "Paneer Tikka Pizza", price: 320, description: "Italian pizza topped with marinated paneer tikka", imageId: "bar-img-1" },
        { id: "bar2", name: "Chicken Pasta Bake", price: 380, description: "Baked pasta with grilled chicken in creamy sauce", imageId: "bar-img-2" },
      ]},
      { title: "Indian", items: [
        { id: "bar3", name: "Butter Chicken", price: 340, description: "Tender chicken in rich buttery tomato gravy", imageId: "bar-img-3" },
        { id: "bar4", name: "Paneer Butter Masala", price: 300, description: "Soft paneer in creamy tomato-cashew gravy", imageId: "bar-img-4" },
      ]},
      { title: "Chinese & Asian", items: [
        { id: "bar5", name: "Chicken Fried Rice", price: 240, description: "Wok-tossed fried rice with chicken and veggies", imageId: "bar-img-5" },
        { id: "bar6", name: "Veg Hakka Noodles", price: 220, description: "Stir-fried noodles with fresh vegetables", imageId: "bar-img-6" },
      ]},
      { title: "Beverages", items: [
        { id: "bar7", name: "Mojito", price: 149, description: "Classic mint lime mojito", imageId: "bar-img-7" },
        { id: "bar8", name: "Cold Coffee", price: 129, description: "Chilled creamy blended coffee", imageId: "bar-img-8" },
      ]},
    ],
  },

  // Subway (39705) — Sandwiches, Salads, Wraps
  "39705": {
    categories: [
      { title: "Recommended", items: [
        { id: "sub1", name: "Chicken Teriyaki Sub (6\")", price: 279, description: "Teriyaki chicken with fresh vegetables on your choice of bread", imageId: "sub-img-1" },
        { id: "sub2", name: "Veggie Delite Sub (6\")", price: 199, description: "Fresh vegetables loaded on fresh-baked bread", imageId: "sub-img-2" },
      ]},
      { title: "Subs", items: [
        { id: "sub3", name: "Italian BMT (6\")", price: 319, description: "Pepperoni, salami, and ham with veggies", imageId: "sub-img-3" },
        { id: "sub4", name: "Paneer Tikka Sub (6\")", price: 259, description: "Marinated paneer tikka with crispy veggies", imageId: "sub-img-4" },
        { id: "sub5", name: "Tuna Sub (6\")", price: 299, description: "Chunky tuna mix with fresh vegetables", imageId: "sub-img-5" },
      ]},
      { title: "Salads", items: [
        { id: "sub6", name: "Chicken Caesar Salad", price: 249, description: "Romaine lettuce with grilled chicken and Caesar dressing", imageId: "sub-img-6" },
        { id: "sub7", name: "Garden Fresh Salad", price: 199, description: "Fresh mixed vegetables with your choice of dressing", imageId: "sub-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "sub8", name: "Pepsi (Regular)", price: 69, description: "Chilled Pepsi", imageId: "sub-img-8" },
        { id: "sub9", name: "Lipton Iced Tea", price: 79, description: "Refreshing chilled iced tea", imageId: "sub-img-9" },
      ]},
    ],
  },

  // Domino's Pizza (24426) — Pizzas, Italian, Pastas, Desserts
  "24426": {
    categories: [
      { title: "Recommended", items: [
        { id: "dom1", name: "Margherita Pizza (Medium)", price: 299, description: "Classic pizza with golden corn, tangy tomato sauce and cheese", imageId: "dom-img-1" },
        { id: "dom2", name: "Chicken Dominator (Medium)", price: 549, description: "Loaded with grilled chicken rashers, peri peri chicken and more", imageId: "dom-img-2" },
        { id: "dom3", name: "Garlic Breadsticks (8 pcs)", price: 149, description: "Oven-baked garlic breadsticks with dipping sauce", imageId: "dom-img-3" },
      ]},
      { title: "Pizzas", items: [
        { id: "dom4", name: "Farmhouse Pizza (Medium)", price: 449, description: "Capsicum, mushroom, tomato and fresh veggie delight", imageId: "dom-img-4" },
        { id: "dom5", name: "Peppy Paneer (Medium)", price: 449, description: "Spicy paneer with capsicum and red paprika", imageId: "dom-img-5" },
        { id: "dom6", name: "Non Veg Supreme (Medium)", price: 549, description: "Chicken, capsicum, mushroom and black olives", imageId: "dom-img-6" },
      ]},
      { title: "Pasta", items: [
        { id: "dom7", name: "Mac & Cheese", price: 179, description: "Creamy mac and cheese — comfort food at its best", imageId: "dom-img-7" },
        { id: "dom8", name: "Chicken Penne Arrabiata", price: 219, description: "Penne pasta in spicy tomato chicken sauce", imageId: "dom-img-8" },
      ]},
      { title: "Desserts", items: [
        { id: "dom9", name: "Choco Lava Cake", price: 109, description: "Warm chocolate cake with molten chocolate centre", imageId: "dom-img-9" },
        { id: "dom10", name: "Butterscotch Mousse Cake", price: 129, description: "Chilled butterscotch mousse with sponge base", imageId: "dom-img-10" },
      ]},
    ],
  },

  // McDonald's (774703) — Burgers, Beverages, Cafe, Desserts
  "774703": {
    categories: [
      { title: "Recommended", items: [
        { id: "mcd1", name: "McVeggie Burger", price: 189, description: "Crispy veg patty with fresh veggies and McSpicy sauce", imageId: "mcd-img-1" },
        { id: "mcd2", name: "McChicken Burger", price: 219, description: "Crispy chicken patty with lettuce and mayo", imageId: "mcd-img-2" },
        { id: "mcd3", name: "Medium Fries", price: 119, description: "Golden crispy World Famous Fries", imageId: "mcd-img-3" },
      ]},
      { title: "Burgers", items: [
        { id: "mcd4", name: "Big Mac", price: 279, description: "Two beef patties with special sauce, lettuce and cheese", imageId: "mcd-img-4" },
        { id: "mcd5", name: "McSpicy Chicken", price: 249, description: "Extra spicy crispy chicken fillet burger", imageId: "mcd-img-5" },
      ]},
      { title: "Cafe", items: [
        { id: "mcd6", name: "McCafe Latte", price: 149, description: "Smooth espresso with creamy steamed milk", imageId: "mcd-img-6" },
        { id: "mcd7", name: "Cappuccino", price: 139, description: "Classic cappuccino with frothy milk", imageId: "mcd-img-7" },
      ]},
      { title: "Desserts", items: [
        { id: "mcd8", name: "Soft Serve Cone", price: 59, description: "Classic vanilla soft serve ice cream cone", imageId: "mcd-img-8" },
        { id: "mcd9", name: "McFlurry Oreo", price: 149, description: "Creamy soft serve blended with Oreo pieces", imageId: "mcd-img-9" },
      ]},
    ],
  },

  // Bakingo (857414) — Bakery, Desserts, Beverages, Snacks
  "857414": {
    categories: [
      { title: "Recommended", items: [
        { id: "bkg1", name: "Chocolate Truffle Cake (500g)", price: 499, description: "Rich dark chocolate truffle cake with ganache frosting", imageId: "bkg-img-1" },
        { id: "bkg2", name: "Red Velvet Cake (500g)", price: 529, description: "Velvety red cake with cream cheese frosting", imageId: "bkg-img-2" },
      ]},
      { title: "Cakes", items: [
        { id: "bkg3", name: "Black Forest Cake (500g)", price: 479, description: "Classic layered chocolate cake with cherries and cream", imageId: "bkg-img-3" },
        { id: "bkg4", name: "Butterscotch Cake (500g)", price: 459, description: "Moist sponge with butterscotch cream and praline", imageId: "bkg-img-4" },
        { id: "bkg5", name: "Pineapple Cake (500g)", price: 439, description: "Light pineapple cream cake with fresh pineapple", imageId: "bkg-img-5" },
      ]},
      { title: "Snacks & Pastries", items: [
        { id: "bkg6", name: "Croissant", price: 89, description: "Buttery flaky croissant — freshly baked", imageId: "bkg-img-6" },
        { id: "bkg7", name: "Chocolate Brownie", price: 119, description: "Fudgy chocolate brownie with walnut crunch", imageId: "bkg-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "bkg8", name: "Hot Chocolate", price: 129, description: "Rich hot chocolate drink", imageId: "bkg-img-8" },
        { id: "bkg9", name: "Strawberry Milkshake", price: 149, description: "Creamy strawberry milkshake", imageId: "bkg-img-9" },
      ]},
    ],
  },

  // Baskin Robbins (443251) — Desserts, Ice Cream
  "443251": {
    categories: [
      { title: "Recommended", items: [
        { id: "br1", name: "1 Scoop Ice Cream", price: 129, description: "Choose from 31 classic flavours", imageId: "br-img-1" },
        { id: "br2", name: "2 Scoop Ice Cream", price: 199, description: "Double the joy — pick two flavours", imageId: "br-img-2" },
      ]},
      { title: "Ice Cream", items: [
        { id: "br3", name: "Chocolate Chip", price: 129, description: "Creamy chocolate ice cream with chocolate chips", imageId: "br-img-3" },
        { id: "br4", name: "Strawberry Fields", price: 129, description: "Fresh strawberry ice cream with berry swirls", imageId: "br-img-4" },
        { id: "br5", name: "Pralines & Cream", price: 149, description: "Caramel ice cream with praline pieces", imageId: "br-img-5" },
      ]},
      { title: "Sundaes", items: [
        { id: "br6", name: "Hot Fudge Sundae", price: 249, description: "Vanilla ice cream with hot fudge and whipped cream", imageId: "br-img-6" },
        { id: "br7", name: "Brownie Sundae", price: 299, description: "Warm brownie topped with vanilla ice cream and fudge sauce", imageId: "br-img-7" },
      ]},
      { title: "Cakes", items: [
        { id: "br8", name: "Ice Cream Cake (500g)", price: 599, description: "Celebration ice cream cake with your favourite flavours", imageId: "br-img-8" },
      ]},
    ],
  },

  // Starbucks (288404) — Beverages, Cafe, Snacks, Desserts, Bakery, Ice Cream
  "288404": {
    categories: [
      { title: "Recommended", items: [
        { id: "sbx1", name: "Caramel Macchiato", price: 429, description: "Espresso with vanilla syrup, milk and caramel drizzle", imageId: "sbx-img-1" },
        { id: "sbx2", name: "Cold Brew Coffee", price: 399, description: "Slow-steeped cold brew — smooth and strong", imageId: "sbx-img-2" },
        { id: "sbx3", name: "Frappuccino (Mocha)", price: 449, description: "Blended coffee drink with mocha sauce and whipped cream", imageId: "sbx-img-3" },
      ]},
      { title: "Hot Beverages", items: [
        { id: "sbx4", name: "Cappuccino", price: 349, description: "Equal parts espresso, steamed milk and milk foam", imageId: "sbx-img-4" },
        { id: "sbx5", name: "Flat White", price: 369, description: "Ristretto shots with velvety steamed whole milk", imageId: "sbx-img-5" },
      ]},
      { title: "Snacks & Bakery", items: [
        { id: "sbx6", name: "Almond Croissant", price: 279, description: "Flaky croissant filled with almond cream and sliced almonds", imageId: "sbx-img-6" },
        { id: "sbx7", name: "Blueberry Muffin", price: 249, description: "Moist muffin loaded with fresh blueberries", imageId: "sbx-img-7" },
      ]},
      { title: "Desserts", items: [
        { id: "sbx8", name: "Java Chip Frappuccino", price: 479, description: "Mocha frappuccino with chocolate chips and whipped cream", imageId: "sbx-img-8" },
        { id: "sbx9", name: "Chocolate Cake Pop", price: 199, description: "Moist chocolate cake on a stick, dipped in chocolate coating", imageId: "sbx-img-9" },
      ]},
    ],
  },

  // The Good Bowl (229284) — Biryani, Pastas, Punjabi, Desserts, Beverages
  "229284": {
    categories: [
      { title: "Recommended", items: [
        { id: "tgb1", name: "Chicken Biryani Bowl", price: 279, description: "Aromatic basmati rice with tender chicken and spices", imageId: "tgb-img-1" },
        { id: "tgb2", name: "Paneer Makhani Pasta", price: 249, description: "Pasta tossed in rich paneer makhani sauce", imageId: "tgb-img-2" },
      ]},
      { title: "Biryani", items: [
        { id: "tgb3", name: "Veg Biryani Bowl", price: 219, description: "Fragrant vegetable biryani with raita", imageId: "tgb-img-3" },
        { id: "tgb4", name: "Mutton Biryani Bowl", price: 329, description: "Slow-cooked mutton biryani with caramelised onions", imageId: "tgb-img-4" },
      ]},
      { title: "Punjabi Bowls", items: [
        { id: "tgb5", name: "Dal Makhani Bowl", price: 229, description: "Slow-cooked black lentils in buttery tomato gravy", imageId: "tgb-img-5" },
        { id: "tgb6", name: "Butter Chicken Bowl", price: 279, description: "Classic butter chicken with steamed rice", imageId: "tgb-img-6" },
      ]},
      { title: "Beverages", items: [
        { id: "tgb7", name: "Sweet Lassi", price: 89, description: "Chilled creamy sweet yogurt drink", imageId: "tgb-img-7" },
        { id: "tgb8", name: "Lemonade", price: 69, description: "Fresh chilled lemonade", imageId: "tgb-img-8" },
      ]},
    ],
  },

  // Wow! China (226432) — Chinese, Asian, fastfood, Beverages, Snacks
  "226432": {
    categories: [
      { title: "Recommended", items: [
        { id: "wc1", name: "Chicken Fried Rice", price: 219, description: "Wok-tossed fried rice with chicken and egg", imageId: "wc-img-1" },
        { id: "wc2", name: "Veg Manchurian", price: 199, description: "Crispy vegetable balls in spicy manchurian sauce", imageId: "wc-img-2" },
      ]},
      { title: "Rice & Noodles", items: [
        { id: "wc3", name: "Schezwan Fried Rice", price: 229, description: "Spicy fried rice with Schezwan sauce", imageId: "wc-img-3" },
        { id: "wc4", name: "Hakka Noodles", price: 209, description: "Stir-fried egg noodles with fresh vegetables", imageId: "wc-img-4" },
        { id: "wc5", name: "Veg Chow Mein", price: 199, description: "Soft noodles tossed with veggies in Asian sauce", imageId: "wc-img-5" },
      ]},
      { title: "Snacks & Starters", items: [
        { id: "wc6", name: "Chicken Spring Rolls", price: 179, description: "Crispy rolls stuffed with chicken and vegetables", imageId: "wc-img-6" },
        { id: "wc7", name: "Veg Dim Sum (6 pcs)", price: 169, description: "Steamed vegetable dumplings with dipping sauce", imageId: "wc-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "wc8", name: "Lime Soda", price: 79, description: "Refreshing chilled lime soda", imageId: "wc-img-8" },
        { id: "wc9", name: "Iced Tea", price: 89, description: "Chilled lemon iced tea", imageId: "wc-img-9" },
      ]},
    ],
  },

  // Pizza Hut (141352) — Pizzas
  "141352": {
    categories: [
      { title: "Recommended", items: [
        { id: "ph1", name: "Veggie Supreme (Medium)", price: 449, description: "Loaded with fresh vegetables and mozzarella", imageId: "ph-img-1" },
        { id: "ph2", name: "Chicken Tikka (Medium)", price: 499, description: "Spiced chicken tikka with capsicum and onion", imageId: "ph-img-2" },
      ]},
      { title: "Pizzas", items: [
        { id: "ph3", name: "Margherita (Medium)", price: 349, description: "Classic tomato sauce and mozzarella pizza", imageId: "ph-img-3" },
        { id: "ph4", name: "BBQ Chicken (Medium)", price: 529, description: "Smoky BBQ chicken with caramelised onions", imageId: "ph-img-4" },
        { id: "ph5", name: "Double Cheese Margherita", price: 399, description: "Double mozzarella with our classic tomato sauce", imageId: "ph-img-5" },
      ]},
      { title: "Sides", items: [
        { id: "ph6", name: "Garlic Bread (4 pcs)", price: 149, description: "Butter garlic bread with herbs", imageId: "ph-img-6" },
        { id: "ph7", name: "Wedge Fries", price: 129, description: "Crispy seasoned potato wedges", imageId: "ph-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "ph8", name: "Pepsi (Large)", price: 89, description: "Chilled Pepsi — large", imageId: "ph-img-8" },
        { id: "ph9", name: "7Up (Regular)", price: 69, description: "Chilled 7Up", imageId: "ph-img-9" },
      ]},
    ],
  },

  // Theobroma (394784) — Bakery, Desserts
  "394784": {
    categories: [
      { title: "Recommended", items: [
        { id: "theo1", name: "Brownies (2 pcs)", price: 219, description: "Dense fudgy chocolate brownies — Theobroma's signature", imageId: "theo-img-1" },
        { id: "theo2", name: "Lemon Tart", price: 189, description: "Buttery pastry shell with tangy lemon curd", imageId: "theo-img-2" },
      ]},
      { title: "Cakes & Pastries", items: [
        { id: "theo3", name: "Chocolate Truffle Pastry", price: 229, description: "Rich dark chocolate truffle layered pastry", imageId: "theo-img-3" },
        { id: "theo4", name: "Red Velvet Pastry", price: 219, description: "Moist red velvet with cream cheese frosting", imageId: "theo-img-4" },
        { id: "theo5", name: "Tiramisu", price: 269, description: "Classic Italian tiramisu with espresso-soaked ladyfingers", imageId: "theo-img-5" },
      ]},
      { title: "Cookies & Snacks", items: [
        { id: "theo6", name: "Chocolate Chip Cookie", price: 89, description: "Freshly baked chewy chocolate chip cookie", imageId: "theo-img-6" },
        { id: "theo7", name: "Almond Biscotti", price: 109, description: "Crunchy almond biscotti — pairs great with coffee", imageId: "theo-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "theo8", name: "Hot Chocolate", price: 179, description: "Rich thick Belgian hot chocolate", imageId: "theo-img-8" },
        { id: "theo9", name: "Iced Mocha", price: 199, description: "Chilled espresso with chocolate and milk", imageId: "theo-img-9" },
      ]},
    ],
  },

  // LunchBox (229289) — Thalis, North Indian, Biryani
  "229289": {
    categories: [
      { title: "Recommended", items: [
        { id: "lb1", name: "Veg Thali", price: 229, description: "Complete meal — dal, sabzi, roti, rice and salad", imageId: "lb-img-1" },
        { id: "lb2", name: "Chicken Thali", price: 279, description: "Chicken curry, roti, dal, rice and salad", imageId: "lb-img-2" },
      ]},
      { title: "Thalis", items: [
        { id: "lb3", name: "Paneer Thali", price: 249, description: "Shahi paneer, dal, roti, rice and salad", imageId: "lb-img-3" },
        { id: "lb4", name: "Rajma Chawal Thali", price: 219, description: "Classic rajma with steamed rice and roti", imageId: "lb-img-4" },
      ]},
      { title: "Biryani", items: [
        { id: "lb5", name: "Veg Biryani", price: 199, description: "Aromatic basmati rice with mixed vegetables", imageId: "lb-img-5" },
        { id: "lb6", name: "Chicken Biryani", price: 249, description: "Dum-cooked chicken biryani with raita", imageId: "lb-img-6" },
      ]},
      { title: "Extras", items: [
        { id: "lb7", name: "Extra Roti (2 pcs)", price: 39, description: "Fresh whole wheat roti", imageId: "lb-img-7" },
        { id: "lb8", name: "Gulab Jamun (2 pcs)", price: 79, description: "Soft gulab jamun in rose syrup", imageId: "lb-img-8" },
      ]},
    ],
  },

  // The Belgian Waffle Co. (33848) — Waffle, Desserts, Ice Cream, Beverages
  "33848": {
    categories: [
      { title: "Recommended", items: [
        { id: "bwc1", name: "Classic Choco Waffle", price: 229, description: "Crispy waffle with rich chocolate sauce and ice cream", imageId: "bwc-img-1" },
        { id: "bwc2", name: "Strawberry Waffle", price: 249, description: "Waffle topped with strawberry compote and fresh cream", imageId: "bwc-img-2" },
      ]},
      { title: "Waffles", items: [
        { id: "bwc3", name: "Nutella Waffle", price: 269, description: "Waffle drizzled with Nutella and banana", imageId: "bwc-img-3" },
        { id: "bwc4", name: "Peanut Butter Waffle", price: 259, description: "Crispy waffle with peanut butter and honey", imageId: "bwc-img-4" },
        { id: "bwc5", name: "Lotus Biscoff Waffle", price: 299, description: "Waffle with Lotus Biscoff spread and caramel drizzle", imageId: "bwc-img-5" },
      ]},
      { title: "Ice Cream", items: [
        { id: "bwc6", name: "Waffle Ice Cream Sundae", price: 329, description: "Waffle with three scoops of ice cream and toppings", imageId: "bwc-img-6" },
        { id: "bwc7", name: "Soft Serve Cone", price: 99, description: "Classic vanilla soft serve", imageId: "bwc-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "bwc8", name: "Nutella Shake", price: 199, description: "Thick milkshake blended with Nutella", imageId: "bwc-img-8" },
        { id: "bwc9", name: "Oreo Cold Coffee", price: 179, description: "Cold coffee blended with Oreo biscuits", imageId: "bwc-img-9" },
      ]},
    ],
  },

  // Faasos (229278) — Wraps, Rolls, Shawarma, Fast Food
  "229278": {
    categories: [
      { title: "Recommended", items: [
        { id: "faa1", name: "Chicken Tikka Wrap", price: 249, description: "Chargrilled chicken tikka with onion, chutney in a flatbread", imageId: "faa-img-1" },
        { id: "faa2", name: "Paneer Tikka Wrap", price: 229, description: "Grilled paneer tikka with mint chutney in a wrap", imageId: "faa-img-2" },
      ]},
      { title: "Wraps & Rolls", items: [
        { id: "faa3", name: "Egg Bhurji Roll", price: 189, description: "Spiced scrambled egg wrapped in a soft roti", imageId: "faa-img-3" },
        { id: "faa4", name: "Chicken Kheema Roll", price: 229, description: "Spiced minced chicken roll with onions and chutney", imageId: "faa-img-4" },
      ]},
      { title: "Shawarma", items: [
        { id: "faa5", name: "Chicken Shawarma", price: 259, description: "Classic chicken shawarma with garlic sauce and pickles", imageId: "faa-img-5" },
        { id: "faa6", name: "Veg Shawarma", price: 219, description: "Grilled vegetable shawarma with hummus and garlic sauce", imageId: "faa-img-6" },
      ]},
      { title: "Beverages", items: [
        { id: "faa7", name: "Lime Soda", price: 69, description: "Refreshing lime soda", imageId: "faa-img-7" },
        { id: "faa8", name: "Masala Chaas", price: 79, description: "Spiced buttermilk — cool and refreshing", imageId: "faa-img-8" },
      ]},
    ],
  },

  // The Biryani Life (229285) — Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs
  "229285": {
    categories: [
      { title: "Recommended", items: [
        { id: "tbl1", name: "Chicken Hyderabadi Biryani", price: 299, description: "Dum-cooked Hyderabadi chicken biryani with raita", imageId: "tbl-img-1" },
        { id: "tbl2", name: "Mutton Lucknowi Biryani", price: 379, description: "Awadhi slow-cooked mutton biryani with saffron and kewra", imageId: "tbl-img-2" },
      ]},
      { title: "Biryani", items: [
        { id: "tbl3", name: "Veg Biryani", price: 229, description: "Fragrant basmati with seasonal vegetables and whole spices", imageId: "tbl-img-3" },
        { id: "tbl4", name: "Paneer Biryani", price: 269, description: "Marinated paneer cooked in dum style biryani", imageId: "tbl-img-4" },
        { id: "tbl5", name: "Chicken Mughlai Biryani", price: 319, description: "Rich Mughlai chicken biryani with dried fruits and nuts", imageId: "tbl-img-5" },
      ]},
      { title: "Kebabs", items: [
        { id: "tbl6", name: "Seekh Kebab (4 pcs)", price: 279, description: "Minced lamb kebabs grilled on skewers", imageId: "tbl-img-6" },
        { id: "tbl7", name: "Chicken Tikka (6 pcs)", price: 299, description: "Tandoor-grilled marinated chicken tikka", imageId: "tbl-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "tbl8", name: "Rose Sharbat", price: 89, description: "Chilled rose-flavoured drink", imageId: "tbl-img-8" },
        { id: "tbl9", name: "Sweet Lassi", price: 99, description: "Thick chilled sweet lassi", imageId: "tbl-img-9" },
      ]},
    ],
  },

  // Taco Bell (562873) — Mexican, Fast Food, Snacks
  "562873": {
    categories: [
      { title: "Recommended", items: [
        { id: "tb1", name: "Crunchy Taco", price: 149, description: "Crispy taco shell with seasoned filling and fresh toppings", imageId: "tb-img-1" },
        { id: "tb2", name: "Chicken Quesadilla", price: 279, description: "Grilled flour tortilla filled with chicken and cheese", imageId: "tb-img-2" },
        { id: "tb3", name: "Nachos with Dips", price: 199, description: "Crispy nachos with salsa, sour cream and jalapeños", imageId: "tb-img-3" },
      ]},
      { title: "Tacos & Burritos", items: [
        { id: "tb4", name: "Chicken Burrito", price: 319, description: "Large flour tortilla with chicken, rice, beans and cheese", imageId: "tb-img-4" },
        { id: "tb5", name: "Veg Burrito", price: 279, description: "Rice, beans, grilled veggies and cheese in a tortilla", imageId: "tb-img-5" },
        { id: "tb6", name: "Soft Taco", price: 159, description: "Soft flour tortilla with seasoned filling and toppings", imageId: "tb-img-6" },
      ]},
      { title: "Snacks", items: [
        { id: "tb7", name: "Cheesy Nachos", price: 169, description: "Nachos loaded with warm nacho cheese sauce", imageId: "tb-img-7" },
        { id: "tb8", name: "Cinnamon Twists", price: 99, description: "Light and crispy cinnamon-flavoured twists", imageId: "tb-img-8" },
      ]},
      { title: "Beverages", items: [
        { id: "tb9", name: "Pepsi Freeze (Large)", price: 99, description: "Icy Pepsi slushie — extra refreshing", imageId: "tb-img-9" },
        { id: "tb10", name: "Mountain Dew Freeze", price: 99, description: "Citrus icy freeze", imageId: "tb-img-10" },
      ]},
    ],
  },

  // Good Flippin' Burgers (834978) — Burgers, American, Fast Food
  "834978": {
    categories: [
      { title: "Recommended", items: [
        { id: "gfb1", name: "Classic Smash Burger", price: 299, description: "Smashed beef patty with American cheese, pickles and mustard", imageId: "gfb-img-1" },
        { id: "gfb2", name: "Crispy Chicken Burger", price: 269, description: "Buttermilk fried chicken with spicy mayo and slaw", imageId: "gfb-img-2" },
      ]},
      { title: "Burgers", items: [
        { id: "gfb3", name: "Double Smash Burger", price: 369, description: "Two smashed patties with double cheese and special sauce", imageId: "gfb-img-3" },
        { id: "gfb4", name: "BBQ Bacon Burger", price: 399, description: "Beef patty with crispy bacon, BBQ sauce and cheddar", imageId: "gfb-img-4" },
        { id: "gfb5", name: "Veg Smash Burger", price: 239, description: "Smashed veg patty with cheese and house sauce", imageId: "gfb-img-5" },
      ]},
      { title: "Sides", items: [
        { id: "gfb6", name: "Shoestring Fries", price: 129, description: "Thin crispy shoestring fries with dipping sauce", imageId: "gfb-img-6" },
        { id: "gfb7", name: "Onion Rings", price: 149, description: "Battered and golden crispy onion rings", imageId: "gfb-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "gfb8", name: "Vanilla Milkshake", price: 179, description: "Thick classic vanilla milkshake", imageId: "gfb-img-8" },
        { id: "gfb9", name: "Cold Brew Coffee", price: 199, description: "Smooth slow-steeped cold brew coffee", imageId: "gfb-img-9" },
      ]},
    ],
  },

  // Ishan Pure Veg (313969) — North Indian, South Indian, Beverages, Chinese
  "313969": {
    categories: [
      { title: "Recommended", items: [
        { id: "ipv1", name: "Paneer Butter Masala", price: 220, description: "Soft paneer in rich buttery tomato-cashew gravy", imageId: "ipv-img-1" },
        { id: "ipv2", name: "Special Veg Thali", price: 250, description: "Complete meal with sabzi, dal, roti, rice and salad", imageId: "ipv-img-2" },
      ]},
      { title: "North Indian", items: [
        { id: "ipv3", name: "Dal Tadka", price: 160, description: "Yellow dal tempered with cumin and Indian spices", imageId: "ipv-img-3" },
        { id: "ipv4", name: "Aloo Paratha", price: 90, description: "Stuffed potato paratha served with curd and pickle", imageId: "ipv-img-4" },
        { id: "ipv5", name: "Butter Naan", price: 55, description: "Soft naan topped with butter, fresh from the tandoor", imageId: "ipv-img-5" },
      ]},
      { title: "South Indian", items: [
        { id: "ipv6", name: "Masala Dosa", price: 130, description: "Crispy dosa with spiced potato filling and chutneys", imageId: "ipv-img-6" },
        { id: "ipv7", name: "Idli Sambar", price: 100, description: "Soft steamed idlis with vegetable sambar and coconut chutney", imageId: "ipv-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "ipv8", name: "Sweet Lassi", price: 79, description: "Chilled thick sweet lassi", imageId: "ipv-img-8" },
        { id: "ipv9", name: "Masala Chaas", price: 59, description: "Spiced buttermilk served chilled", imageId: "ipv-img-9" },
      ]},
    ],
  },

  // SA Dosa Cafe (445353) — South Indian, Snacks, Beverages, Fast Food
  "445353": {
    categories: [
      { title: "Recommended", items: [
        { id: "sad1", name: "Masala Dosa", price: 120, description: "Crispy South Indian dosa with spiced potato filling", imageId: "sad-img-1" },
        { id: "sad2", name: "Mysore Masala Dosa", price: 140, description: "Spicy Mysore-style dosa with potato masala filling", imageId: "sad-img-2" },
      ]},
      { title: "Dosa", items: [
        { id: "sad3", name: "Plain Dosa", price: 90, description: "Classic crispy South Indian dosa", imageId: "sad-img-3" },
        { id: "sad4", name: "Cheese Dosa", price: 160, description: "Crispy dosa topped with melted cheese", imageId: "sad-img-4" },
        { id: "sad5", name: "Paneer Dosa", price: 170, description: "Dosa stuffed with spicy paneer mixture", imageId: "sad-img-5" },
      ]},
      { title: "South Indian", items: [
        { id: "sad6", name: "Idli Sambar (3 pcs)", price: 90, description: "Soft steamed idlis with hot sambar and chutneys", imageId: "sad-img-6" },
        { id: "sad7", name: "Medu Vada (2 pcs)", price: 100, description: "Crispy South Indian lentil doughnuts with sambar", imageId: "sad-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "sad8", name: "Filter Coffee", price: 69, description: "Strong South Indian filter coffee with milk", imageId: "sad-img-8" },
        { id: "sad9", name: "Fresh Lime Soda", price: 59, description: "Refreshing lime soda", imageId: "sad-img-9" },
      ]},
    ],
  },

  // Cafe Durga (679074) — Indian
  "679074": {
    categories: [
      { title: "Recommended", items: [
        { id: "cd1", name: "Misal Pav", price: 100, description: "Spicy Maharashtrian misal with crispy farsan and pav", imageId: "cd-img-1" },
        { id: "cd2", name: "Masala Dosa", price: 120, description: "Crispy dosa with spiced potato filling", imageId: "cd-img-2" },
      ]},
      { title: "Maharashtrian", items: [
        { id: "cd3", name: "Pav Bhaji", price: 130, description: "Mumbai-style spiced vegetable bhaji with buttered pav", imageId: "cd-img-3" },
        { id: "cd4", name: "Kande Pohe", price: 70, description: "Flattened rice with onion, peanuts and spices", imageId: "cd-img-4" },
        { id: "cd5", name: "Vada Pav", price: 60, description: "Mumbai's favourite — spicy potato vada in a pav", imageId: "cd-img-5" },
      ]},
      { title: "Breakfast", items: [
        { id: "cd6", name: "Upma", price: 70, description: "Savory semolina dish with vegetables and spices", imageId: "cd-img-6" },
        { id: "cd7", name: "Sabudana Khichdi", price: 90, description: "Tapioca pearls with peanuts and cumin", imageId: "cd-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "cd8", name: "Cold Coffee", price: 100, description: "Chilled blended creamy coffee", imageId: "cd-img-8" },
        { id: "cd9", name: "Sugarcane Juice", price: 60, description: "Fresh pressed sugarcane juice", imageId: "cd-img-9" },
      ]},
    ],
  },

  // Aroma's Hyderabad House (4087) — Biryani, Hyderabadi, Mughlai, Chinese
  "4087": {
    categories: [
      { title: "Recommended", items: [
        { id: "ahh1", name: "Chicken Dum Biryani", price: 329, description: "Authentic Hyderabadi dum-cooked chicken biryani with raita", imageId: "ahh-img-1" },
        { id: "ahh2", name: "Mutton Biryani", price: 399, description: "Slow-cooked tender mutton biryani with whole spices", imageId: "ahh-img-2" },
      ]},
      { title: "Biryani", items: [
        { id: "ahh3", name: "Egg Biryani", price: 259, description: "Flavourful biryani with boiled eggs", imageId: "ahh-img-3" },
        { id: "ahh4", name: "Veg Biryani", price: 229, description: "Fragrant basmati with vegetables and spices", imageId: "ahh-img-4" },
        { id: "ahh5", name: "Prawn Biryani", price: 449, description: "Juicy prawns in aromatic biryani rice", imageId: "ahh-img-5" },
      ]},
      { title: "Hyderabadi Specials", items: [
        { id: "ahh6", name: "Haleem", price: 299, description: "Slow-cooked mutton and lentil stew — Hyderabadi classic", imageId: "ahh-img-6" },
        { id: "ahh7", name: "Nihari", price: 329, description: "Slow-braised mutton shank in spiced gravy", imageId: "ahh-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "ahh8", name: "Irani Chai", price: 49, description: "Strong Hyderabadi tea with milk", imageId: "ahh-img-8" },
        { id: "ahh9", name: "Rose Sharbat", price: 79, description: "Chilled rose-flavoured cooler", imageId: "ahh-img-9" },
      ]},
    ],
  },

  // Shri Swami Samartha Pure Veg (101442) — North Indian, Chinese, Pav Bhaji, Biryani
  "101442": {
    categories: [
      { title: "Recommended", items: [
        { id: "sss1", name: "Special Pav Bhaji", price: 140, description: "Buttery spiced vegetable bhaji with soft pav", imageId: "sss-img-1" },
        { id: "sss2", name: "Veg Biryani", price: 180, description: "Aromatic basmati rice with fresh vegetables", imageId: "sss-img-2" },
      ]},
      { title: "Pav Bhaji", items: [
        { id: "sss3", name: "Classic Pav Bhaji", price: 120, description: "Mumbai-style bhaji with buttered pav", imageId: "sss-img-3" },
        { id: "sss4", name: "Cheese Pav Bhaji", price: 160, description: "Pav bhaji topped with generous cheese", imageId: "sss-img-4" },
      ]},
      { title: "North Indian", items: [
        { id: "sss5", name: "Paneer Butter Masala", price: 210, description: "Soft paneer in buttery tomato gravy", imageId: "sss-img-5" },
        { id: "sss6", name: "Dal Tadka", price: 150, description: "Yellow dal with cumin and coriander tempering", imageId: "sss-img-6" },
      ]},
      { title: "Beverages", items: [
        { id: "sss7", name: "Sweet Lassi", price: 70, description: "Cold thick sweet lassi", imageId: "sss-img-7" },
        { id: "sss8", name: "Masala Chaas", price: 55, description: "Spiced chilled buttermilk", imageId: "sss-img-8" },
      ]},
    ],
  },

  // Nourishing Farms (701032) — Salads, Healthy Food, Sandwiches, Wraps
  "701032": {
    categories: [
      { title: "Recommended", items: [
        { id: "nf1", name: "Grilled Chicken Caesar Salad", price: 299, description: "Romaine lettuce, grilled chicken, parmesan and Caesar dressing", imageId: "nf-img-1" },
        { id: "nf2", name: "Quinoa Power Bowl", price: 319, description: "Quinoa with roasted veggies, chickpeas and tahini dressing", imageId: "nf-img-2" },
      ]},
      { title: "Salads", items: [
        { id: "nf3", name: "Greek Salad", price: 269, description: "Cucumber, tomatoes, olives, feta with olive oil and herbs", imageId: "nf-img-3" },
        { id: "nf4", name: "Detox Green Salad", price: 249, description: "Spinach, kale, cucumber, apple with lemon dressing", imageId: "nf-img-4" },
        { id: "nf5", name: "Mexican Bean Salad", price: 259, description: "Mixed beans, corn, peppers and chipotle dressing", imageId: "nf-img-5" },
      ]},
      { title: "Sandwiches & Wraps", items: [
        { id: "nf6", name: "Avocado Toast Sandwich", price: 249, description: "Multigrain bread with smashed avocado and poached egg", imageId: "nf-img-6" },
        { id: "nf7", name: "Grilled Veggie Wrap", price: 229, description: "Grilled vegetables in a whole wheat wrap with hummus", imageId: "nf-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "nf8", name: "Green Detox Smoothie", price: 199, description: "Spinach, cucumber, apple and ginger blended smoothie", imageId: "nf-img-8" },
        { id: "nf9", name: "Turmeric Latte", price: 179, description: "Warm golden turmeric milk", imageId: "nf-img-9" },
      ]},
    ],
  },

  // Cafe Arabia (120807) — Shawarma, Lebanese, Arabian, Mediterranean
  "120807": {
    categories: [
      { title: "Recommended", items: [
        { id: "ca1", name: "Chicken Shawarma", price: 249, description: "Classic chicken shawarma with garlic sauce, pickles and veggies", imageId: "ca-img-1" },
        { id: "ca2", name: "Lamb Shawarma", price: 299, description: "Tender slow-cooked lamb with tahini and fresh herbs", imageId: "ca-img-2" },
      ]},
      { title: "Shawarma", items: [
        { id: "ca3", name: "Veg Shawarma", price: 209, description: "Grilled vegetables in flatbread with garlic sauce", imageId: "ca-img-3" },
        { id: "ca4", name: "Mixed Meat Shawarma", price: 329, description: "Chicken and lamb combination with all the toppings", imageId: "ca-img-4" },
      ]},
      { title: "Lebanese Mains", items: [
        { id: "ca5", name: "Hummus with Pita (4 pcs)", price: 189, description: "Creamy homemade hummus with warm pita bread", imageId: "ca-img-5" },
        { id: "ca6", name: "Falafel Plate (6 pcs)", price: 199, description: "Crispy chickpea falafel with tahini dipping sauce", imageId: "ca-img-6" },
        { id: "ca7", name: "Chicken Kofta", price: 279, description: "Spiced minced chicken kofta with garlic sauce", imageId: "ca-img-7" },
      ]},
      { title: "Beverages", items: [
        { id: "ca8", name: "Mint Lemonade", price: 119, description: "Fresh Arabic-style mint and lemon refresher", imageId: "ca-img-8" },
        { id: "ca9", name: "Jallab Juice", price: 139, description: "Traditional Lebanese grape and rose water drink", imageId: "ca-img-9" },
      ]},
    ],
  },
};

// Inject menu into each restaurant object
let updated = 0;
let skipped = 0;

data.restaurants = data.restaurants.map((r) => {
  const id = r.info.id;
  if (menus[id]) {
    updated++;
    return { ...r, menu: menus[id] };
  } else {
    skipped++;
    console.warn(`⚠️  No menu defined for: ${id} - ${r.info.name}`);
    return r;
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`\n✅ Done! Updated ${updated} restaurants with menu data.`);
if (skipped > 0) console.log(`⚠️  Skipped ${skipped} restaurants (no menu defined).`);
