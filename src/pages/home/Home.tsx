import React from "react";
//import { AuthContext } from "../../contexts/AuthContext";
import "./Home.css";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import { faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PixIcon from "../../assets/Pix.tsx";

const Home: React.FC = () => {
  //const { isAdmin } = useContext(AuthContext);
  return (
    <>
      <section className="bg-white  flex items-center justify-center">
        <div className="grid items-center px-6 py-6">
          <section className="flex  items-center gap-60 ">
            <div className="flex content-center justify-center items-center ">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-primary mr-3"
                size="2x"
              />
              <span className="text-primary">
                <p className="font-black text-xl">Entrega Flash </p><p>em até 24h</p>
                 
              </span>
            </div>
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-primary mr-3"
                size="2x"
              />
              <span className="text-primary">
               <p className="font-black text-xl">Parcele em até 12x</p><p> no cartão de crédito</p>
              </span>
            </div>
            <div className="flex items-center justify-center ">
              <PixIcon />
              <span className="text-primary ">
               <p className="font-black text-xl">5% no Pix</p>  <p>Pagamento à vista</p> 
              </span>
            </div>
          </section>
        
        
         
          <section className="col-span-full md:col-span-2 lg:col-span-3 flex justify-center md:justify-start">
  <button className="bg-green-800 text-white mt-32 ml-12 p-2.5">
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
