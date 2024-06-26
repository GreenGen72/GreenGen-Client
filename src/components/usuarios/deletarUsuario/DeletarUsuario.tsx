import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Usuario from "../../../models/Usuario";
import { buscar, deletar } from "../../../service/Service";
import { toastAlerta } from "../../../utils/toastAlerta";
import Avatar from "../../avatar/Avatar";

function DeleteUsuario() {
  const [usuarioDT, setUsuario] = useState<Usuario>({} as Usuario);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, setUsuario, {
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
    navigate("/home");
  }

  async function deleteUsuario() {
    try {
      await deletar(`/usuarios/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Usuario apagado com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o Usuario", "erro");
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto flex-grow">
      <h1 className="text-4xl text-center my-4">Deletar usuario</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja deletar sua conta?
      </p>

      <div className="border flex flex-col overflow-hidden justify-between">
        <header className="py-2 px-6 text-white bg-primary font-bold text-2xl text-center">
          Usuario
        </header>
        <div className="flex items-center justify-center"><Avatar foto={usuario.foto} bordercolour="white" size="medium" />
        <p className="p-8 text-2xl text-primary h-full">{usuarioDT.nome}</p></div>
        
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-primary hover:bg-secondary flex items-center justify-center"
            onClick={deleteUsuario}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteUsuario;
