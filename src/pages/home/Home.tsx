import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Home.css";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalProduto/modalProduto";
import Carrossel from "../../components/carrossel/carrossel.tsx";

function Home() {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <main className="bg-lite-grey h-full flex items-center justify-center">
        <div className="grid justify-items-center place-items-center">
        <div className="grid justify-items-center place-items-center">

        </div>
        <div className=" text-black">
          <Carrossel/>
          <div className="flex py-4">
            <h2 className="text-5xl font-bold">
              Seja bem vindo! {usuario.nome}
            </h2>
            <p className="text-xl">Greengen Energia Limpa e Renovável.</p>

            <div className="flex justify-around gap-4">
              <ModalProduto />
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center "></div>
        </div>

      <ListaProdutos />
        </div>
      </main>
    </>
  );
}

export default Home;
