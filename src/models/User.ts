import Category from "./Category";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  Category?: Category | null;
}
