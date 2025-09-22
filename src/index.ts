// Day 5 - Exercise 1

interface CartItem {
  id: number
  title: string
  variantId?: number
}


function addToCart(item: CartItem) {
    console.log(`Adding "${item.title}" to cart.`);
  }

addToCart({id: 1, title: 'shoes'});

