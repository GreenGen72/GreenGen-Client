import { useContext, useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../service/Service";
import CardProduto from "../cardProdutos/CardProdutos";
import { toastAlerta } from "../../../utils/toastAlerta";

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProduto() {
    try {
      await buscar("/produtos", setProduto, {
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
    buscarProduto();
  }, [produto.length]);
  return (
    <>
      {produto.length === 0 && (
        <Triangle
        visible={true}
        height="130"
        width="130"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="triangle-wrapper mx-auto"
        />
      )}
      <div className="flex flex-grow justify-center w-full my-4 ">
        <div className="container flex flex-col  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 content-center justify-center items-center ">
            {produto.map((produto) => (
              <>
                <CardProduto key={produto.id} produto={produto} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProduto;
