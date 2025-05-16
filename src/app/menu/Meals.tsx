import React from "react"

const Meals = () => {

    const meals = [
    {
      name: 'Woosh Steak & Cheese Sandwich',
      description: 'Tender steak & melted cheese on a hogie roll',
      price: 299
    },
    {
      name: 'Woosh Chili Cheese Dog',
      description: 'Juicy hotdog with ground pork/beef shredded with cheese',
      price: 299
    },
    {
      name: 'Woosh Hotdog',
      description: 'Classic hotdog shredded with cheese',
      price: 199
    }, 
    {
      name: 'Spicy Buffalo Wings',
      description: 'Crispy wing in spicy buffalo sauce with ranch',
      price: 399
    },
    {
      name: '(Thai) Stir Fried Chicken and Cashew',
      description: 'Chicken and cashew stir fried with vegetables, served with rice',
      price: 379
    },
    {
      name: 'Woosh Mega Spicy Chicken Burger',
      description: 'Spicy chicken fillet with lettuce and mayo',
      price: 299
    },
    {
      name: 'Woosh Mega Beef Burger',
      description: 'Hefty beef patty, with lettuce and tomato and special sauce',
      price: 299
    },
    {
      name: 'Woosh Mega Spicy Pork Burger',
      description: 'Flavorful spicy pork patty with fresh topping',
      price: 299
    },
    {
      name: '(Thai) Green Curry',
      description: 'Cooked with coconut, served with steam rice',
      price: 369
    },
    {
      name: 'Woosh Mega Wrap',
      description: 'Tortilla with spicy chicken, pork or beef with vegetables',
      price: 329
    },
    {
      name: 'Nachos',
      description: 'Tortilla chips with ground beef and melted cheese',
      price: 289
    },
    {
      name: 'Woosh Spring Rolls',
      description: 'Crispy spring rolls with sweet chili sauce',
      price: 159
    },
    {
      name: 'French Fries',
      description: 'Crispy golden fries',
      price: 139
    },
    {
      name: 'Cheesy Chips',
      description: 'Crispy chips with melted cheese',
      price: 189
    },
    {
      name: '(Mexican) Mega Tacos',
      description: 'Tacos with spicy protein and fresh topping',
      price: 289
    },
    {
      name: 'Filipino Carbonara',
      description: 'Creamy pasta with ham bacon and cheese',
      price: 289
    },
    {
      name: 'Mega Burrito',
      description: 'Tortilla filled with your choice of spicy beef, pork, and chicken',
      price: 329
    },
    {
      name: '(Thai) Phad Kraphao',
      description: 'Spicy stir fried meat with basil, served with rice and fried egg',
      price: 329
    },
    {
      name: 'Meat and Cheese Platter',
      description: 'A savory platter of meat and cheese',
      price: '359/₱550 for 2 persons'
    },
    {
      name: 'Greek Suovlaki',
      description: 'Grilled marinated meat',
      price: 339
    },
    
  ]

  return (
    <div className="flex flex-col gap-[2.2rem] md:grid md:grid-cols-2 lg:grid-cols-3">
      {meals.map((meal, index) => (
          <div key={index} className="flex flex-col gap-[.4rem]">
            <h2>{meal.name}</h2>
            <p className="md:w-[300px]">{meal.description}</p>
            <p>Price: ₱{meal.price}</p>
          </div>
        ))}
    </div>
  )
};

export default Meals 
