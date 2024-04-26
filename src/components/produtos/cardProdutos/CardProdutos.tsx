import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { CartContext } from "../../../contexts/CartContext";

interface CardProdutoProps {
  produto: Produto;
}
function CardProduto({ produto }: CardProdutoProps) {
  const { usuario } = useContext(AuthContext);
  console.log('usuario: ', usuario);
  const isAdmin = false;
  // const isAdmin = usuario.admin;

  const { handleAddToCart, produtosNoCarrinho } = useContext(CartContext);
  console.log("produtosNoCarrinho: ", produtosNoCarrinho);
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        Produto
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{produto.nome}</p>
      <p className="p-8 text-3xl bg-slate-200 h-full">{produto.descricao}</p>
      <p className="p-8 text-3xl bg-slate-200 h-full text-red-700">
        {produto.preco}
      </p>
      <p className="p-8 text-3xl bg-slate-200 h-full">{produto.quantidade}</p>
      <p className="p-8 text-3xl bg-slate-200 h-full">
        {produto.categoria?.descricao}
      </p>

      {isAdmin ?(
        <div className="flex">
          <Link
            to={`/editarProduto/${produto.id}`}
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletar-produto/${produto.id}`}
            className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
          >
            <button className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">
              Deletar
            </button>
          </Link>
        </div>
      ):
      <div className="flex">
        <button onClick={() => handleAddToCart(produto)}>Comprar </button>
      </div>
      }
    </div>
  );
}

export default CardProduto;
