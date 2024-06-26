import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { toastAlerta } from "../../../utils/toastAlerta";

function FormularioProduto() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
    foto: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    quantidade: 0,
    foto: "",
    categoria: categoria,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoria() {
    await buscar("/categoria", setCategorias, {
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
    buscarCategoria();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function aoAtualizarInput(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id != undefined) {
      try {
        await atualizar("/produtos", produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Produto atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar("/produtos", produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o Produto", "erro");
        }
      }
    }
  }
  const carregandoCategoria = categoria.descricao === "";

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
            type="text"
            placeholder="Digite a descrição do produto"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        
        
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Quantidade</label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
            type="number"
            placeholder="quantidade"
            name="quantidade"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto do Produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => aoAtualizarInput(e)}
            type="text"
            id="foto"
            placeholder="Coloque o link da foto do produto aqui"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma categoria
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.nome}</option>
              </>
            ))}
          </select>
        </div>
        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded disabled:bg-slate-200 bg-green-700 hover:bg-green-800 text-white font-bold w-1/2 mx-auto block py-2 my-2"
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;
