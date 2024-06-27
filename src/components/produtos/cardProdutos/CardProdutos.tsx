import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { AuthContext } from "../../../contexts/AuthContext.tsx";
import Produto from "../../../models/Produto.ts";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const { adicionaProdutoNoCarrinho } = useContext(CartContext);

  const handleComprarClick = () => {
    adicionaProdutoNoCarrinho(produto);
    navigate(`/produto/${produto.id}`);
  };
  function handleEditButtonClick() {
    navigate(`/editar-produto/${produto.id}`);
    console.log(produto);
  }
  function handleDeleteButtonClick() {
    navigate(`/deletar-produto${produto.id}`);
  }

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <Link to={`/produto/${produto.id}`}>
        <figure>
          <img src={produto.foto} alt={produto.nome} />
        </figure>
      </Link>

      <div className="card-body justify-end flex-row bg-white ">
        <h2 className="card-title">
          {Number(produto.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>

        {isAdmin && (
          <>
            <button
              onClick={handleEditButtonClick}
              className="btn bg-white"
              title="Editar Produto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>

            <button
              onClick={handleDeleteButtonClick}
              className="btn bg-white"
              title="Deletar Produto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>

            <button onClick={handleComprarClick} className="btn bg-white">
              Comprar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CardProduto;
