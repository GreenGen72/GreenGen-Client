import React from "react";
//import { AuthContext } from "../../contexts/AuthContext";
import "./Home.css";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import Carrossel from "./carrossel/carrossel.tsx";
import { faCreditCard, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: React.FC = () => {
  //const { isAdmin } = useContext(AuthContext);
  return (
    <>
      <section className="bg-lite-grey h-full flex items-center justify-center flex-grow overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <section className="col-span-full md:col-span-2 lg:col-span-3 grid grid-cols-3 gap-4 content-center items-center">
            <div className="flex content-center justify-center items-center p-5">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-main-green mr-3"
                size="2x"
              />
              <span className="text-lg">
                Entrega Flash <br /> em até 24h
              </span>
            </div>
            <div className="flex items-center justify-center p-5">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-main-green mr-3"
                size="2x"
              />
              <span className="text-lg">
                Parcele em até 12x <br /> no cartão de crédito
              </span>
            </div>
            <div className="flex items-center justify-center p-5">
              <svg
                fill="text-main-green"
                className="text-main-green mr-3"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#3C8059"
                  d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.8C231.1-7.6 280.3-7.6 310.6 22.8L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.8L22.8 310.6C-7.6 280.3-7.6 231.1 22.8 200.8L80.8 142.7H112.6z"
                />
              </svg>
              <span className="text-lg">
                5% no Pix <br /> Pagamento à vista
              </span>
            </div>
          </section>

          <div className="col-span-full md:col-span-2 lg:col-span-1 relative z-10">
            <Carrossel />
          </div>

          <section className="col-span-full md:col-span-2 lg:col-span-3 flex justify-center md:justify-center">
  <button className="bg-green-800 text-white mt-32 ml-3 p-1.5"> {/* Ajuste a margem superior conforme desejado */}
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
