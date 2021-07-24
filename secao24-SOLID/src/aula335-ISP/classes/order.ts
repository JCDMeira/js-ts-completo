import { OrderStatus } from "./interfaces/oderStatus";
import { ShoppingCart } from "./shopping-cart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { CustomerOrder } from "./interfaces/costumer-protocol";

export class Order {
  private _orderStatus: OrderStatus= "open";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customerOrder: CustomerOrder
  ) {}

  get orderStatus(): OrderStatus {
      return this._orderStatus;
  }

  checkOut(): void {
      if(this.cart.isEmpty()) {
          console.log("Seu carrinho está vazio");
          return;
      }

      this._orderStatus = "closed";
      this.messaging.sendMessage(`Seu pedido de ${this.cart.totalWithDiscount()} foi recebido`);
      this.persistency.saveOrder();
      this.cart.clear();
      console.log("O cliente é: ", this.customerOrder.getName(), this.customerOrder.getIDN());

  }
}
