import Avatar from "../../components/avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhoneVolume, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Usuario from "../../models/Usuario";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../service/Service";
import { toastAlerta } from "../../utils/toastAlerta";
import { Link, useParams } from "react-router-dom";




function Perfil() {
 
  const [usuarioDT, setUsuario] = useState<Usuario>({
    id: 0,
  nome: "",
  usuario: "",
  senha: "",
  foto: "",
  });
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  async function buscarUsuario() {
    try {
      await buscar(`/usuarios/${id}`, setUsuario, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarUsuario();
  }, [usuarioDT.id]);

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
            <p className="text-2xl font-extrabold">Informações Gerais</p>
            <FontAwesomeIcon className="text-2xl" icon={faUser} />
          </div>
          <div className="flex-row w-full justify-center flex items-center gap-8">
            <div className="flex  items-center justify-items-center justify-center">
              <Avatar foto={usuarioDT.foto} size="extrabig" bordercolour="primary" />
            </div>
            <div className="flex ">
              <form  className="flex justify-items-center  flex-col w-full text-primary gap-4">
                <label htmlFor="nome" className="font-bold text-primary">
                  Nome Completo <span className="font-light italic">(Nome a qual se identifica):</span>
                </label>
                <input
                  autoFocus
                  value={usuario.nome}
                  disabled
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
                  disabled
                  placeholder="Digite seu e-mail"
                  className="font-light border-slate border-2 p-2 bg-gray-100 placeholder-primary w-full focus:border-accent  focus:ring-0 !outline-none"
                  value={usuario.usuario}
                />
                <label htmlFor="senha" className="font-bold text-primary">Nova Senha:</label>
                <input
                  type="password"
                  id="senha"
                  disabled
                  name="senha"
                  value="senha"
                  placeholder="Digite uma nova senha, se desejar alterar"
                  className="font-light border-slate border-2 p-2 bg-gray-100 placeholder-primary w-full  focus:border-accent  focus:ring-0 !outline-none"
                />
                
              </form>
            </div>
          </div>
        </div>
        <div className="flex border-2 shadow-xl py-4 px-8 gap-10 text-primary">
          <div className="flex-1">
            <h2 className="font-bold text-xl">Deletar Perfil</h2>
            <p className="text-sm">Deletar seu perfil apagará todos os seus dados do site.</p>
          </div>
          <div className="flex items-center justify-end w-1/4">
          <Link
          to={`/deletar-usuario/${usuario.id}`}> <button className="flex w-20 h-10 gap-4 justify-center items-center text-white font-bold bg-red-500">deletar</button></Link>
          </div>
        </div>
        <div className="flex border-2 shadow-xl py-4 px-8 gap-10 text-primary">
          <div className="flex-1">
            <h2 className="font-bold text-xl">Editar perfil</h2>
            <p className="text-sm">Atualizar suas informações de perfil.</p>
          </div>
          <div className="flex items-center justify-end w-1/4">
          <Link
          to={`/editar-perfil/${usuario.id}`}> <button className="flex w-20 h-10 gap-4 justify-center items-center text-white font-bold bg-primary">editar</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;