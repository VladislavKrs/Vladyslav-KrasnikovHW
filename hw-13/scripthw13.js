"use strict"

const shoppingCart = {
  items: [
    {
      name: 'Headphone',
      count: 1,
      price: 100
    }
  ],
  addItem(item) {
    const indexItem = this.items.findIndex((i) => {
      return i.name === item.name
    })
    if (indexItem === -1) {
      this.items.push(item)
    } else {
      this.items[indexItem].count += item.count;
    }
  },
  deleteItem(name) {
    const indexItem = this.items.findIndex((item) => item.name === name);
    if (indexItem === -1) {
      return;
    }
    if (this.items[indexItem].count === 1) {
      this.items.splice(indexItem, 1);
    } else {
      --this.items[indexItem].count;
    }
  },
  getTotalSum() {
    return this.items.reduce((acc, number) =>
      acc + number.price * number.count, 0);
  }
};

shoppingCart.addItem({
  name: 'Headphone',
  count: 1,
  price: 100
})
shoppingCart.addItem({
  name: 'IPhone',
  count: 1,
  price: 100
})

shoppingCart.addItem({
  name: 'Headphone',
  count: 1,
  price: 100
})

shoppingCart.deleteItem('Headphone')

console.log(shoppingCart.items);

console.log(shoppingCart.getTotalSum());
