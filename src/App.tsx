import "./App.css";
import Home from "./pages/home/Home";
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

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/about" element={<SobreNos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/categoria" element={<ListaCategoria />} />
              <Route path="/cadastrar" element={<FormularioCategoria />} />
              <Route
                path="/editar-categoria/:id"
                element={<FormularioCategoria />}
              />
              <Route
                path="/deletar-categoria/:id"
                element={<DeletarCategoria />}
              />
              <Route path="/produtos" element={<ListaProduto />} />
              <Route path="/cadastro-produto" element={<FormularioProduto />} />
              <Route path="/deletar-produto/:id" element={<DeletarProduto />} />
              <Route
                path="/editar-produto/:id"
                element={<FormularioProduto />}
              />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
