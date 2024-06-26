import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { useState, useContext, useEffect, ChangeEvent } from "react";
import { toastAlerta } from "../../../utils/toastAlerta";

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function aoAtualizarInput(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id !== undefined) {
      try {
        await atualizar(`/categoria/${id}`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Categoria atualizada com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar a Categoria", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Categoria cadastrada com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar a Categoria", "erro");
        }
      }
    }

    retornar();
  }

  function retornar() {
    navigate("/categoria");
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <div className="container flex flex-col flex-grow items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
          {id === undefined
            ? "Cadastre uma nova categoria"
            : "Editar categoria"}
        </h1>

        <form
          className="w-1/2 flex flex-col gap-4"
          onSubmit={gerarNovaCategoria}
        >
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
          />

          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            placeholder="Descricao"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
          />

          <label htmlFor="foto">Foto de Capa</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
          />
          {categoria.foto && (
            <img
              src={categoria.foto}
              alt="Foto de Capa"
              className="w-full h-auto mt-4"
              onError={(e) => (e.currentTarget.src = "/src/assets/login.jpg")}
            />
          )}

          <button
            className="rounded text-slate-100 bg-green-700 hover:bg-green-800 w-1/2 py-2 mx-auto block"
            type="submit"
          >
            {id === undefined ? "Cadastrar" : "Editar"}
          </button>
        </form>
      </div>
    </>
  );
}

export default FormularioCategoria;
