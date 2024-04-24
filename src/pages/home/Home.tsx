import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Home.css";

function Home() {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">
              Seja bem vindo! {usuario.nome}
            </h2>
            <p className="text-xl">Greengen Energia Renovavel e Limpa.</p>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>

          <div className="flex justify-center "></div>
        </div>
      </div>
    </>
  );
}

export default Home;
