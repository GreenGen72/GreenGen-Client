import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { AuthContext } from "../../../contexts/AuthContext.tsx";
import Produto from "../../../models/Produto.ts";
import { toastAlerta } from "../../../utils/toastAlerta.ts";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { isAdmin } = useContext(AuthContext);

  const { adicionaProdutoNoCarrinho } = useContext(CartContext);

  const handleComprarClick = () => {
    adicionaProdutoNoCarrinho(produto);
    toastAlerta("Produto adicionado no carrinho", "info");
  };

  return (
    <div className="flex flex-col items-center w-4/5 "><div className="border bg-white flex flex-col flex-grow overflow-hidden place-content-center shadow-xl w-full mx-12 items-center h-full content-center justify-center ">
    <img src={produto.foto} className="w-fit h-fit p-4" alt={"xxxx"} />
    <div>
    <p className="p-2 text-secondary">{produto.nome}</p>
    <p className="p-2 text-primary font-semibold text-2xl"> R$ {produto.preco}</p>
    </div>
    
    
    
   
  </div>
  {isAdmin ? (
      <div className="flex">
        <Link
          to={`/editar-produto/${produto.id}`}
          className="w-full text-slate-100 bg-primary hover:bg-secondary flex items-center justify-center py-2 mb-px"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletar-produto/${produto.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button className="w-full text-slate-100 bg-red-400 hover:bg-main-light-red flex items-center justify-center py-2 hover:transition-colors hover:ease-in hover:duration-300">
            Deletar
          </button>
        </Link>
      </div>
    ) : (
      <div className="flex w-full">
        <button
          onClick={handleComprarClick}
          className="w-full text-slate-100 bg-primary hover:bg-secondary hover:transition-colors hover:ease-in hover:duration-300 flex items-center justify-center py-2"
        >
          Comprar
        </button>
      </div>
    )}
  </div>
    
  );
}

export default CardProduto;
