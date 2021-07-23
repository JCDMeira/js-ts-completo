/* eslint-disable @typescript-eslint/no-unused-vars */
import { ShoppingCart } from "./classes/shopping-cart";
import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount, NoPercentDiscount, TenPercentDiscount } from "./classes/interfaces/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noPercentDiscount = new NoPercentDiscount();
const shoppingCart = new ShoppingCart(noPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart,messaging, persistency);

shoppingCart.addItem(new Product("Camisa", 49.9));
shoppingCart.addItem(new Product("Caderno", 9.9));
shoppingCart.addItem(new Product("Lápis", 1.59));
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkOut();
console.log(order.orderStatus);
