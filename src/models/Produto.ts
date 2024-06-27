import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  quantidade: number;
  quantidadeNoCarrinho?: number;
  categoria?: Categoria;
  usuario?: Usuario;
}
