import { useContext, useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../service/Service";
import CardProduto from "../cardProdutos/CardProdutos";
import { toastAlerta } from "../../../utils/toastAlerta";
import { useNavigate, useParams } from "react-router-dom";
import FinderIcon from "../../../assets/FinderIcon.svg";

function BuscaProduto() {
  const navigate = useNavigate();
  const { query } = useParams();
  const [produto, setProduto] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado de loading
  const [timerDone, setTimerDone] = useState<boolean>(false); // Estado do timer
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProduto() {
    setLoading(true);
    setTimerDone(false);

    if (usuario.nome === "") {
      toastAlerta("Logue para usar a busca", "info");
      navigate("/login");
      return;
    }

    if (!query) {
      toastAlerta("Por favor, insira um termo de busca", "info");
      setLoading(false);
      return;
    }

    try {
      await buscar("/produtos/nome/" + query, setProduto, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setTimerDone(true), 2200); // Timer de 3 segundos
    buscarProduto();
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      {loading ? (
        <Triangle
          visible={true}
          height="130"
          width="130"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass="triangle-wrapper mx-auto"
        />
      ) : (
        <div className="flex flex-grow justify-center w-full my-4">
          <div className="container flex flex-col">
            <h2>Resultados da busca para: {query}</h2>
            {produto.length === 0 && timerDone ? (
              <p>Nenhum resultado encontrado.</p>
            ) : (
              <>
                {!timerDone && (
                  <div className="grid justify-center flex-col items-center">
                    <p className="text-primary font-semibold text-lg">Pesquisando...</p>
                    <img src={FinderIcon} alt="" />
                     {}
                  </div>
                )}
                {timerDone && produto.length !== 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-center items-center">
                    {produto.map((produto) => (
                      <CardProduto key={produto.id} produto={produto} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default BuscaProduto;