import React from "react"

const nonalcoholics = [
    {
        name: 'Mineral Water',
        price: 30
    },
    {
        name: 'Sparkling Water',
        price: 60
    },
    {
        name: 'Soda Water',
        price: 60
    },
    {
        name: 'Tonic Water',
        price: 30
    },
    {
        name: 'Calamansi Juice',
        price: 99
    },
    {
        name: 'Detox',
        price: 149
    },
    {
        name: 'Royal',
        price: 60
    },
    {
        name: 'Sprite',
        price: 60
    },
    {
        name: 'Coke Regular',
        price: 60
    },
    {
        name: 'Coke Zero',
        price: 60
    },
    {
        name: 'Ice Tea',
        price: '99/Pitcher'
    },
    {
        name: 'Woosh Ice Coffee',
        price: '99/₱149'
    }
]

const beers = [
    {
        name: 'San Miguel Flavored',
        price: 85
    },
    {
        name: 'San Miguel Light',
        price: 80
    },
    {
        name: 'Pale Pilsen',
        price: 75
    },
    {
        name: 'Red Horse',
        price: 80
    },
    {
        name: 'Apolong Beer West Coast',
        price: 180
    },
    {
        name: 'Apolong Beer Farm House',
        price: 130
    },
    {
        name: 'Apolong Imperial Stout',
        price: 180
    },
    {
        name: 'Apolong Grapefruit Burst',
        price: 180
    }
]

const wines = [
    {
        name: 'Red Wine',
        price: '150/₱180'
    },
    {
        name: 'White Wine',
        price: '150/₱180'
    }
]

const cocktails = [
    {
        name: 'Gin',
        price: '55/₱90'
    },
    {
        name: 'Smirnoff Mule',
        price: 90
    }
]

const spirits = [
    {
        name: 'Vodka',
        price: '60/₱140'
    },
    {
        name: 'Tequila',
        price: 150
    },
    {
        name: 'Emperor Brandy',
        price: 50
    },
    {
        name: 'Jagermeister',
        price: 140
    },
    {
        name: 'Tanduay (Dark / White)',
        price: 45
    },
    {
        name: 'Chivas',
        price: 150
    },
    {
        name: 'Whisky (Red Label)',
        price: 120
    },
    {
        name: 'Whisky (Black Label)',
        price: 140
    },
    {
        name: "Bailey's",
        price: 140
    },
    {
        name: "Jack Daniel's",
        price: 140
    },
    {
        name: 'Grey Goose Vodka',
        price: 150
    },
]

const Drinks = () => {
  return (
    <div className="flex flex-col gap-[6rem]">

      <div className="flex flex-col gap-[1.8rem]">
        <h3 className="text-[1.4rem]">Non-Alcoholic Beverages</h3>
      {nonalcoholics.map((nonalcoholic, index) => (
          <div key={index} className="flex justify-between gap-[.4rem]">
            <h2 className="w-[50%]">{nonalcoholic.name}</h2>
            <p>Price: ₱{nonalcoholic.price}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[1.8rem]">
        <h3 className="text-[1.4rem]">Beers</h3>
      {beers.map((beer, index) => (
          <div key={index} className="flex justify-between gap-[.4rem]">
            <h2 className="w-[50%]">{beer.name}</h2>
            <p>Price: ₱{beer.price}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[1.8rem]">
        <h3 className="text-[1.4rem]">Wines</h3>
      {wines.map((wine, index) => (
          <div key={index} className="flex justify-between gap-[.4rem]">
            <h2 className="w-[50%]">{wine.name}</h2>
            <p>Price: ₱{wine.price}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[1.8rem]">
        <h3 className="text-[1.4rem]">Cocktails</h3>
      {cocktails.map((cocktail, index) => (
          <div key={index} className="flex justify-between gap-[.4rem]">
            <h2 className="w-[50%]">{cocktail.name}</h2>
            <p>Price: ₱{cocktail.price}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[1.8rem]">
        <h3 className="text-[1.4rem]">Spirits/Hard Liquor</h3>
      {spirits.map((spirit, index) => (
          <div key={index} className="flex justify-between gap-[.4rem]">
            <h2 className="w-[50%]">{spirit.name}</h2>
            <p>Price: ₱{spirit.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Drinks;
