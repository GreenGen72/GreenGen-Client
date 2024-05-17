import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthProvider } from "./contexts/AuthContext";
import SobreNos from "./pages/sobreNos/SobreNos";
import Contato from "./pages/contato/Contato";
import ListaCategoria from "./components/categoria/listaCategoria/ListaCategoria";
import FormularioCategoria from "./components/categoria/formularioCategoria/FormularioCategoria";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Perfil from "./pages/perfil/Perfil";
import ListaProduto from "./components/produtos/listaProdutos/ListaProdutos";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./pages/checkout/Checkout";

import React from "react";
import Home from "./pages/home/Home.tsx";
import BuscaProduto from "./components/produtos/buscaProdutos/BuscaProdutos.tsx";

const App: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-between bg-lite-grey">
      <ToastContainer />
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <section className="flex flex-col flex-grow bg-lite-grey">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/about" element={<SobreNos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/categoria" element={<ListaCategoria />} />
                <Route
                  path="/cadastro-categoria"
                  element={<FormularioCategoria />}
                />
                <Route
                  path="/editar-categoria/:id"
                  element={<FormularioCategoria />} 
                />
                <Route
                  path="/deletar-categoria/:id"
                  element={<DeletarCategoria />}
                />
                <Route path="/produtos" element={<ListaProduto />} />
                <Route
                  path="/cadastro-produto"
                  element={<FormularioProduto />}
                />
                <Route
                  path="/deletar-produto/:id"
                  element={<DeletarProduto />}
                />
                <Route
                  path="/editar-produto/:id"
                  element={<FormularioProduto />}
                />
                 <Route
                  path="/busca-produto/:query"
                  element={<BuscaProduto />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/perfil" element={<Perfil />} />
              </Routes>
              <Footer />
            </section>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </main>
  );
};

export default App;
