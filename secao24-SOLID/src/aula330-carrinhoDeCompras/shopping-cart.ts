type CartItem = {name: string, price: number}
type OrderStatus = "open" | "closed"
export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
      this._items.push(item);
  }

  removeItem(index: number): void {
      this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
      return this._items;
  }
  get orderStatus(): OrderStatus {
      return this._orderStatus;
  }

  total(): number {
      return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  checkOut(): void {
      if(this.isEmpty()) {
          console.log("Seu carrinho está vazio");
          return;
      }

      this._orderStatus = "closed";
      this.sendMessage(`Seu pedido de ${this.total()} foi recebido`);
      this.saveOrder();
      this.clear();
  }

  isEmpty(): boolean {
      return this._items.length === 0;
  }

  sendMessage(msg: string): void {
      console.log("Mensagem:", msg);
  }

  saveOrder(): void {
      console.log("Pedido salvo com sucesso...");
  }

  clear(): void {
      console.log("Carrinho de compras foi limpo");
      this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({name: "Camisa", price: 49.9});
shoppingCart.addItem({name: "caderno", price: 9.9});
shoppingCart.addItem({name: "Lápis", price: 1.59});
// shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkOut();
console.log(shoppingCart.orderStatus);
