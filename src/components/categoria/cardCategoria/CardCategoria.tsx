import { Link, useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="group relative block bg-black">
        <img
          alt={categoria.nome}
          src={categoria.foto}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <Link to={`/produtos/`}>
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-xl font-bold text-white sm:text-2xl">
              {categoria.nome}
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  <p className="">{categoria.descricao}</p>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className="inline-flex overflow-hidden rounded-md  border-gray-300 bg-white shadow-sm">
          {isAdmin && (
            <>
              <button
                onClick={() => navigate(`/editar-categoria/${categoria.id}`)}
                className="inline-block border text-gray-700 p-3 hover:bg-gray-50 focus:relative"
                title="Editar Categoria"
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
                onClick={() => navigate(`/deletar-categoria/${categoria.id}`)}
                className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                title="Deletar Categoria"
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CardCategoria;
