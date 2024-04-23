import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  quantidade: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
