const locationCategories = {
  limavady: ["pizza", "sides", "dips"],
  eglinton: ["pizza", "dips"]
};

// Opening days for each location
const openingDays = {
  limavady: ["wednesday", "thursday", "friday", "saturday", "sunday"],
  eglinton: ["saturday"]
};

const menuItems = {
  pizza: [
    {
      id: "margherita",
      name: "Margherita",
      desc: "Mozzarella, Parmesan, Oregano & Fresh Basil",
      price: 9
    },
    {
      id: "pepperoni",
      name: "Pepperoni",
      desc: "Mozzarella, Parmesan & Calabrian Pepperoni",
      price: 10
    }
  ],
  sides: [
    {
      id: "garlicbread",
      name: "Garlic Bread",
      desc: "Freshly baked bread with garlic butter",
      price: 5
    }
  ],
  dips: [
    {
      id: "tomato_dip",
      name: "Spicy Tomato Dip",
      desc: "Perfect for dipping your pizza or sides",
      price: 1.5
    }
  ]
};
