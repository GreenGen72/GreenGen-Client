import React from "react";
import { Link } from "react-router-dom";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import { faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PixIcon from "../../assets/Pix.tsx";
import Carrossel from "./carrossel/carrossel.tsx";

const Home: React.FC = () => {
  return (
    <>
      <section className="bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl px-6 py-6">
          <section className="flex justify-center items-center gap-60 mb-8">
            <div className="flex content-center justify-center items-center ">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-primary mr-3"
                size="2x"
              />
              <span className="text-primary">
                <p className="font-black text-xl">Entrega Flash </p>
                <p>em até 24h</p>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-primary mr-3"
                size="2x"
              />
              <span className="text-primary">
                <p className="font-black text-xl">Parcele em até 12x</p>
                <p> no cartão de crédito</p>
              </span>
            </div>
            <div className="flex items-center justify-center ">
              <PixIcon />
              <span className="text-primary ">
                <p className="font-black text-xl">5% no Pix</p>
                <p>Pagamento à vista</p>
              </span>
            </div>
          </section>

          <div className="flex justify-center mb-8">
            <Carrossel />
          </div>
          <section className="col-span-full md:col-span-2 lg:col-span-3 flex justify-center md:justify-start mt-20 mb-8">
            <Link to="/produtos" className="bg-green-800 text-white p-2.5">
              Lançamentos
            </Link>
          </section>

          <div className="col-span-full flex flex-wrap justify-center gap-6">
            <ListaProdutos />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;