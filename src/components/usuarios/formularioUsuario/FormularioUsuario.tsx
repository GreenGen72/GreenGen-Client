import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, atualizar} from "../../../service/Service";
import { toastAlerta } from "../../../utils/toastAlerta";
import Usuario from "../../../models/Usuario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../../avatar/Avatar";
import { faLocationDot, faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function FormularioUsuario() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: "" }>();
  const { senha } = useParams<{ senha: "" }>()
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [usuarioData, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });
 
  async function buscarUsuarioPorId(id: "") {
    await buscar(`/usuarios/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarUsuarioPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setUsuario({
      ...usuarioData,
    });
  }, []);

  function aoAtualizarInput(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuarioData,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/perfil");
  }

  async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id != undefined) {
      try {
        await atualizar("/usuarios/atualizar", usuarioData, setUsuario, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Usuário atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o usuário", "erro");
        }
      }
    }
  }

  return (
    <div className="flex w-full py-8 px-12 gap-4 justify-center">
      <div className="flex justify-left  flex-col gap-4 bg-primary h-auto py-8 justify-items-left px-8">
        <h1 className="font-bold text-3xl text-white">Meu Perfil</h1>
        <p className="text-white">Atualize aqui suas informações pessoais!</p>
        <div className="flex bg-secondary text-white text-xl font-semibold h-16">
          <div className="flex justify-center items-center w-1/6 bg">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <p className="flex justify-center items-center">Informações Gerais</p>
        </div>
        <div className="flex bg-white text-primary text-xl font-semibold h-16">
          <div className="flex justify-center items-center w-1/6 bg">
            <FontAwesomeIcon icon={faPhoneVolume} />
          </div>
          <p className="flex justify-center items-center">Contato</p>
        </div>
        <div className="flex bg-white text-primary text-xl font-semibold h-16">
          <div className="flex justify-center items-center w-1/6 bg">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <p className="flex justify-center items-center">Endereço</p>
        </div>
        <div className="flex text-white text-xl font-semibold h-16"></div>
        <div className="flex text-white text-xl font-semibold h-16"></div>
      </div>

      <div className="flex  gap-10 px-8 justify-right flex-col justify-items-center">
        <div className="flex flex-col justify-center border-2 shadow-xl py-8 gap-12 px-8">
          <div className="flex items-center justify-center text-white gap-4 bg-primary h-16">
            <p className="text-2xl font-extrabold">Editar meu perfil</p>
            <FontAwesomeIcon className="text-2xl" icon={faEdit} />
          </div>
          <div className="flex-row w-full justify-center flex items-center gap-8">
            <div className="flex  items-center justify-items-center justify-center">
              <Avatar foto={usuarioData.foto} size="extrabig" bordercolour="primary" />
            </div>
            <div className="flex ">
              <form onSubmit={atualizarUsuario} className="flex justify-items-center  flex-col w-full text-primary gap-4">
                <label htmlFor="nome" className="font-bold text-primary">
                  Nome Completo <span className="font-light italic">(Nome a qual se identifica):</span>
                </label>
                <input
                  autoFocus
                  value={usuarioData.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  className="font-light border-slate border-2 p-2 bg-gray-100 placeholder-primary w-full focus:border-accent  focus:ring-0 !outline-none"
                />
                <label htmlFor="usuario" className="font-bold text-primary">E-mail:</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Digite seu e-mail"
                  className="font-light border-slate border-2 p-2 bg-gray-100 placeholder-primary w-full focus:border-accent  focus:ring-0 !outline-none"
                  value={usuarioData.usuario}
                />
                <label htmlFor="senha" className="font-bold text-primary">Nova Senha:</label>
                <input
                  onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
                  type="password"
                  id="senha"
                  required
                  name="senha"
                  value={senha}
                  placeholder="Digite uma nova senha, se desejar alterar"
                  className="font-light border-slate border-2 p-2 bg-gray-100 placeholder-primary w-full  focus:border-accent  focus:ring-0 !outline-none"
                />
                <label htmlFor="foto" className="font-bold text-primary">Foto:</label>
                <input
                  value={usuarioData.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
                  type="text"
                  id="foto"
                  name="foto"
                  required
                  placeholder="Cole o link da sua foto aqui"
                  className="font-light border-slate border-2 p-2 bg-gray-100 placeholder-primary w-full  focus:border-accent  focus:ring-0 !outline-none"
                />

                <button
                  type="submit"
                  className="rounded disabled:bg-slate-200 bg-primary hover:bg-secondary text-white font-bold w-full mx-auto block py-2 my-2"
                >
                  Atualizar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex border-2 shadow-xl py-4 px-8 gap-10 text-primary">
          <div className="flex-1">
            <h2 className="font-bold text-xl">Deletar Perfil</h2>
            <p>Deletar seu perfil apagará todos os seus dados do site.</p>
          </div>
          <div className="flex items-center justify-end w-1/4">
            <button className="flex w-20 h-10 gap-4 justify-center items-center text-white font-bold bg-red-500">deletar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioUsuario;
