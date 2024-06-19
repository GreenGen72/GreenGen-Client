import React from "react";
//import { AuthContext } from "../../contexts/AuthContext";
import "./Home.css";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import Carrossel from "./carrossel/carrossel.tsx";
import { faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PixIcon from "../../assets/Pix.tsx";

const Home: React.FC = () => {
  //const { isAdmin } = useContext(AuthContext);
  return (
    <>
      <section className="bg-white h-full flex items-center justify-center flex-grow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <section className="col-span-full md:col-span-2 lg:col-span-3 grid grid-cols-3  gap-4 content-center items-center">
            <div className="flex content-center justify-center items-center p-5 ">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-primary mr-3"
                size="2x"
              />
              <span className="text-primary">
                <p className="font-black text-xl">Entrega Flash </p><p>em até 24h</p>
                 
              </span>
            </div>
            <div className="flex items-center justify-center p-5 mr-4">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-primary mr-3"
                size="2x"
              />
              <span className="text-primary">
               <p className="font-black text-xl">Parcele em até 12x</p><p> no cartão de crédito</p>
              </span>
            </div>
            <div className="flex items-center justify-center p-5 gap-2">
              <PixIcon />
              <span className="text-primary ">
               <p className="font-black text-xl">5% no Pix</p>  <p>Pagamento à vista</p> 
              </span>
            </div>
          </section>

          <div className="col-span-full md:col-span-2 lg:col-span-1 relative z-10">
            <Carrossel />
          </div>

          <section className="col-span-full md:col-span-2 lg:col-span-3 flex justify-center md:justify-start">
  <button className="bg-green-800 text-white mt-32 ml-3 p-1.5">
              Lançamentos
            </button>
          </section>

          {/* Lista de Produtos */}
          <div className="col-span-full flex-grow relative z-0">
            <ListaProdutos />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
