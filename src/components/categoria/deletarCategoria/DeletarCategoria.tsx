import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";
import { toastAlerta } from "../../../utils/toastAlerta";

function DeleteCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categoria");
  }

  async function deleteCategoria() {
    try {
      await deletar(`/categoria/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar a Categoria", "erro");
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto flex-grow">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-green-700 text-black text-center font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria.descricao}
        </p>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-green-700 hover:bg-green-800 flex items-center justify-center"
            onClick={deleteCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCategoria;
