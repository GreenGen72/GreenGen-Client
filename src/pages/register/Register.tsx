import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";
import "./Register.css";
import { toastAlerta } from "../../utils/toastAlerta";

function Register() {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        toastAlerta("Usuário cadastrado com sucesso", "sucesso");
      } catch (error) {
        toastAlerta("Usuário cadastrado com sucesso", "sucesso");
      }
    } else {
      toastAlerta(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "erro"
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <>
      <section className="grid grid-cols-2 flex-grow place-items-center font-bold">
        <div className="flex justify-center items-center">
          <img
            src="https://i.ibb.co/TmrkgGg/cadastro.jpg"
            alt="Energia solar"
            className="w-full h-full"
          />
        </div>
        <div className="w-3/4">
          <form
            className="flex justify-center items-center flex-col w-full"
            onSubmit={cadastrarNovoUsuario}
          >
            <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-slate-700 rounded p-2 bg-white placeholder-gray-400 text-black w-full"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">E-mail</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 border-slate-700 rounded p-2 bg-white placeholder-gray-400 text-black w-full"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border-2 border-slate-700 rounded p-2 bg-white placeholder-gray-400 text-black w-full"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2 bg-white placeholder-gray-400 text-black w-full"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 border-slate-700 rounded p-2 bg-white placeholder-gray-400 text-black w-full"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
            </div>
            <div className="flex justify-around w-full gap-8 mt-2">
              <button
                className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
                onClick={back}
              >
                Cancelar
              </button>
              <button
                className="rounded text-white bg-green-700 hover:bg-green-800 w-1/2 py-2"
                type="submit"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
