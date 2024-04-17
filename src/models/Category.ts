import Tema from "./Product";
import Usuario from "./User";

export default interface Category {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
  usuario: Usuario | null;
}
