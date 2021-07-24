/* eslint-disable @typescript-eslint/no-unused-vars */
import { ShoppingCart } from "./classes/shopping-cart";
import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./classes/interfaces/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
    "Luiz",
    "Miranda",
    "111.111.111-11",
);
const enterpriseCustomer = new EnterpriseCustomer(
    "Empresa Gigante",
    "2222222222222222",
);

const order = new Order(shoppingCart,messaging, persistency,enterpriseCustomer);


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
