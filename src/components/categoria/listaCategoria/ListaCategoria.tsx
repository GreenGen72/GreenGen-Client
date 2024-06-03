import { useContext, useEffect, useRef, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../service/Service";
import CardCategoria from "../cardCategoria/CardCategoria";
import { toastAlerta } from "../../../utils/toastAlerta";

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const alertShown = useRef(false);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategoria() {
    try {
      await buscar("/categoria", setCategoria, {
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
    if (token === "") {
      if (!alertShown.current) {
      toastAlerta("Você precisa estar logado", "erro");
      alertShown.current = true;
      }
      navigate("/login");
    } else {
      buscarCategoria();
    }
  }, [token]);

  useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);
  return (
    <>
      {categoria.length === 0 && (
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
      <div className="flex flex-grow justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;
