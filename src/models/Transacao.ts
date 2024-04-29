import Product from "./Produto";
import User from "./Usuario";

export default interface Transacao {
  comprador: User;
  produto: Product;
  quantidade: number;
}