import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Página Inicial</h2>
      <p>
        Bem-vindo à página inicial do nosso site. Aqui você pode adicionar o
        conteúdo principal da sua aplicação.
      </p>
      <div className="mt-4">
        <Link
          to="/about"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Sobre Nós
        </Link>
        <Link
          to="/contact"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Contato
        </Link>
      </div>
    </div>
  );
};

export default Home;
