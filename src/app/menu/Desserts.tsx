import React from "react"

const Desserts = () => {

  const desserts = [
    {
        name: 'Woosh Smoothies',
        price: 299
    },
    {
        name: 'Cakes per Slice',
        price: 179
    },
    {
        name: 'Fruity Sodas',
        price: 99
    },
    {
        name: 'Ice Cream 3 Flava Combo',
        price: 189
    },
    {
        name: 'Sticky Rice with Mango',
        price: 189
    },
    {
        name: 'Woosh Ice Coffee',
        price: '99/₱149'
    },
    {
        name: 'Waffles/Pancakes with various toppings',
        price: 189
    },
    {
        name: 'Mini Puto Cheese 6pcs',
        price: 99
    },
    {
        name: 'Woosh Fruit Salad',
        price: 169
    },
    {
        name: 'Woosh Chili Nut',
        price: 139
    },
    {
        name: 'Waffles/Pancakes with various toppings',
        price: 189
    },
    {
        name: 'Woosh Mixed Nut',
        price: 169
    },
  ]  
  return (
    <div className="flex flex-col gap-[1.8rem]">
      {desserts.map((dessert, index) => (
          <div key={index} className="flex justify-between gap-[.4rem]">
            <h2 className="w-[60%]">{dessert.name}</h2>
            <p>Price: ₱{dessert.price}</p>
          </div>
        ))}
    </div>
  )
};

export default Desserts;
