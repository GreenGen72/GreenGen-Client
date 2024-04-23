import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthProvider } from "./contexts/AuthContext";
import ListCategory from "./components/category/listCategory/ListCategory";
import FormCategory from "./components/category/formularioCategoria/FormularioCategoria";
import DeleteCategory from "./components/category/deleteCategory/DeleteCategory";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/categoria" element={<ListCategory />} />
              <Route path="/cadastrar" element={<FormCategory />} />
              <Route path="/editarCategoria/:id" element={<FormCategory />} />
              <Route
                path="/deletarCategoria/:id"
                element={<DeleteCategory />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
