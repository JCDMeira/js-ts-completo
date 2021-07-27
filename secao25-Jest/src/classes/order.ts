import { OrderStatus } from "./interfaces/oderStatus";
import { CustomerOrder } from "./interfaces/costumer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus= "open";

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
