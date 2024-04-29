import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { AuthContext } from "../../../contexts/AuthContext.tsx";

interface CardProdutoProps {
  produto: Produto;
}
function CardProduto({ produto }: CardProdutoProps) {
  const { isAdmin } = useContext(AuthContext);

  // const isAdmin = usuario.admin;
  const { adicionaProdutoNoCarrinho } = useContext(CartContext);

  return (
    <div className="border flex flex-col flex-grow overflow-hidden place-content-centershadow-xl w-4/5 mx-12 h-full content-center justify-center ">
      {/*<header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl " >*/}
      {/*  Produto*/}
      {/*</header>*/}
      <img src={produto.descricao} className="w-fit h-fit p-2" alt={"xxxx"} />
      <p className="p-2">{produto.nome}</p>
      <p className="p-2">{produto.preco}</p>
      {/* <p className="p-2">*/}
      {/*      {produto.categoria?.descricao}*/}
      {/*  </p>*/}

      {isAdmin ? (
        <div className="flex">
          <Link
            to={`/editar-produto/${produto.id}`}
            className="w-full text-slate-100 bg-main-green hover:bg-main-light-green flex items-center justify-center py-2 mb-px"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletar-produto/${produto.id}`}
            className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
          >
            <button className="w-full text-slate-100 bg-red-400 hover:bg-main-light-red flex items-center justify-center py-2">
              Deletar
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex">
          <button
            onClick={() => adicionaProdutoNoCarrinho(produto)}
            className="w-full text-slate-100 bg-main-green hover:bg-main-light-green flex items-center justify-center py-2"
          >
            Comprar
          </button>
        </div>
      )}
    </div>
  );
}

export default CardProduto;
