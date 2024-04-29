import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const { isAdmin } = useContext(AuthContext);

  return (
    <div className="border flex flex-col flex-grow overflow-hidden place-content-centershadow-xl w-4/5 mx-12 h-full content-center justify-center ">
      <header className="py-2 px-6 bg-green-800 text-white font-bold text-2xl text-center">
        {categoria.nome}
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.descricao}</p>
      <div className="flex flex-grow">
        {isAdmin && (
          <>
            <Link
              to={`/editar-categoria/${categoria.id}`}
              className="w-full text-slate-100 bg-main-green hover:bg-main-light-green flex items-center justify-center py-2 mb-px"
            >
              <button>Editar</button>
            </Link>
            <Link
              to={`/deletar-categoria/${categoria.id}`}
              className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
            >
              <button>Deletar</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default CardCategoria;
