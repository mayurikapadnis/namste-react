const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const SWIGGY_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5323696&lng=73.8279381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// In-memory restaurant cache — populated once on startup
let restaurantCache = [];

// Local menu snapshots keyed by restaurant info.id
const localMenus = {};
try {
  const snapshot = require("./data/restaurants.json");
  snapshot.restaurants.forEach((r) => {
    if (r.menu) localMenus[r.info.id] = r.menu;
  });
  console.log(`📋 Loaded menus for ${Object.keys(localMenus).length} restaurants from local snapshot.`);
} catch (e) {
  console.warn("⚠️  Could not load local menu snapshots:", e.message);
}

// Generic fallback menu — used when no local menu exists for a restaurant
const fallbackMenu = {
  categories: [
    {
      title: "Recommended",
      items: [
        { id: "fb1", name: "Special Dish", price: 249, description: "Chef's special today", imageId: "fallback-1" },
        { id: "fb2", name: "Popular Item", price: 199, description: "Most ordered item", imageId: "fallback-2" },
      ],
    },
    {
      title: "Mains",
      items: [
        { id: "fb3", name: "House Special", price: 299, description: "Restaurant's signature dish", imageId: "fallback-3" },
        { id: "fb4", name: "Seasonal Special", price: 279, description: "Made fresh daily", imageId: "fallback-4" },
      ],
    },
    {
      title: "Beverages",
      items: [
        { id: "fb5", name: "Soft Drink", price: 79, description: "Chilled soft drink", imageId: "fallback-5" },
        { id: "fb6", name: "Fresh Juice", price: 99, description: "Freshly squeezed juice", imageId: "fallback-6" },
      ],
    },
  ],
};

// Fetch live restaurant list from Swiggy (server-side — no CORS issue)
const fetchRestaurantsFromSwiggy = async () => {
  try {
    console.log("🔄 Fetching live restaurant data from Swiggy...");

    const response = await fetch(SWIGGY_URL, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Referer: "https://www.swiggy.com/",
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy returned HTTP ${response.status}`);
    }

    const json = await response.json();

    // Find the card that has the largest restaurant list
    const restaurants = json?.data?.cards
      ?.map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ?.find((list) => Array.isArray(list) && list.length > 0);

    if (!restaurants || restaurants.length === 0) {
      throw new Error("No restaurants found in Swiggy response");
    }

    // Deduplicate by info.id
    const seen = new Set();
    restaurantCache = restaurants.filter((r) => {
      if (seen.has(r.info.id)) return false;
      seen.add(r.info.id);
      return true;
    });

    console.log(`✅ Cached ${restaurantCache.length} restaurants from Swiggy.`);
  } catch (err) {
    console.error("❌ Failed to fetch from Swiggy:", err.message);
    console.warn("⚠️  Falling back to local restaurants.json snapshot...");

    // Fallback to local snapshot if Swiggy is unreachable
    try {
      const localData = require("./data/restaurants.json");
      restaurantCache = localData.restaurants;
      console.log(`📦 Loaded ${restaurantCache.length} restaurants from local snapshot.`);
    } catch (fallbackErr) {
      console.error("❌ Local snapshot also failed:", fallbackErr.message);
    }
  }
};

// Enable CORS for React frontend running on localhost:1234
app.use(
  cors({
    origin: "http://localhost:1234",
  })
);

app.use(express.json());

// GET /api/restaurants — returns live restaurant list
app.get("/api/restaurants", (req, res) => {
  if (restaurantCache.length === 0) {
    return res.status(503).json({
      error: "Restaurant data not available yet. Please try again shortly.",
    });
  }
  res.json({ restaurants: restaurantCache });
});

// GET /api/restaurants/:restaurantId — returns single restaurant with menu attached
app.get("/api/restaurants/:restaurantId", (req, res) => {
  const { restaurantId } = req.params;

  const match = restaurantCache.find((r) => r.info.id === restaurantId);

  if (!match) {
    return res.status(404).json({
      error: `Restaurant with ID "${restaurantId}" not found`,
    });
  }

  // Attach menu: use local snapshot if available, otherwise generic fallback
  const menu = localMenus[restaurantId] || fallbackMenu;

  res.json({ ...match, menu });
});

// Startup: fetch live data, then start server
fetchRestaurantsFromSwiggy().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🚀 Server running at http://localhost:${PORT}`);
    console.log(`\n📡 Endpoints:`);
    console.log(`   GET http://localhost:${PORT}/api/restaurants`);
    console.log(`   GET http://localhost:${PORT}/api/restaurants/:restaurantId\n`);
  });
});
