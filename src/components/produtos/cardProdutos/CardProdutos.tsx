import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { AuthContext } from "../../../contexts/AuthContext.tsx";
import Produto from "../../../models/Produto.ts";
import { toastAlerta } from "../../../utils/toastAlerta.ts";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const navigate = useNavigate();
  const { usuario, isAdmin } = useContext(AuthContext);

  const { adicionaProdutoNoCarrinho } = useContext(CartContext);

  const handleComprarClick = () => {
    if (usuario.nome == "") {
      toastAlerta("Logue para comprar", "info");
      navigate("/login");
    } else {
      adicionaProdutoNoCarrinho(produto);
      toastAlerta("Produto adicionado no carrinho", "info");
    }
  };

  return (
    <div className="border flex flex-col flex-grow overflow-hidden place-content-centershadow-xl w-4/5 mx-12 h-full content-center justify-center ">
      <img src={produto.descricao} className="w-fit h-fit p-2" alt={"xxxx"} />
      <p className="p-2">{produto.nome}</p>
      <p className="p-2">{produto.preco}</p>
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
            onClick={handleComprarClick}
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
