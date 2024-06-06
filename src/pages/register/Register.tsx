import { ChangeEvent, useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
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
      <section className="grid grid-cols-2 flex-1 items-center font-bold">
        <div className="fundoCadastro hidden lg:block">
          
        </div>
        <div className="flex   w-1/2 gap-6">
          <form
            className="flex justify-right flex-col w-full"
            onSubmit={cadastrarNovoUsuario}
          >
            <h2 className="text-primary text-5xl font-extrabold">Crie sua conta</h2>
            <p className="text-primary">Junte-se com a gente na busca por um mundo mais sustentável!</p>
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="font-light border-secondary border-b-2 p-2 bg-white placeholder-primary border-0 text-primary w-full  focus:border-primary focus:ring-0 !outline-none "
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
                placeholder="Digite seu e-mail"
                className="font-light border-secondary border-b-2 p-2 bg-white placeholder-primary border-0 text-primary w-full  focus:border-primary focus:ring-0 !outline-none "
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
                placeholder="Cole o link da sua foto aqui"
                className="font-light border-secondary border-b-2 p-2 bg-white placeholder-primary border-0 text-primary w-full  focus:border-primary focus:ring-0 !outline-none "
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
                className="font-light border-secondary border-b-2 p-2 bg-white placeholder-primary border-0 text-primary w-full  focus:border-primary focus:ring-0 !outline-none "
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
                className="font-light border-secondary border-b-2 p-2 bg-white placeholder-primary border-0 text-primary w-full  focus:border-primary focus:ring-0 !outline-none "
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
            </div>
            <div className="flex justify-around w-full gap-8 mt-2">
              <button
                className="rounded text-white bg-primary hover:bg-secondary w-full py-2"
                type="submit"
              >
                Cadastrar
              </button>
              
            </div>
            <hr className="border-slate-800 w-full" />
            <p className="font-light">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="font-bold text-secondary hover:text-primary"
            >
              Logue agora!
            </Link>
          </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
