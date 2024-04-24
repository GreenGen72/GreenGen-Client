import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  return (
    <>
      {usuario.token !== "" ? (
        <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
          <div className="container flex justify-between text-lg">
            <Link to="/home" className="text-2xl font-bold uppercase">
              GreenGen
            </Link>

            <div className="flex gap-4">
              <Link to="/home" className="hover:underline">
                Home
              </Link>
              <Link to="/categoria" className="hover:underline">
                Categoria
              </Link>
              <Link to="/cadastrar" className="hover:underline">
                Cadastrar categoria
              </Link>

              <Link to="/about" className="hover:underline">
                Sobre nós
              </Link>

              <Link to="/contato" className="hover:underline">
                Contato
              </Link>

              <Link to="" onClick={logout} className="hover:underline">
                Sair
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
          <div className="container flex justify-between text-lg">
            <Link to="/home" className="text-2xl font-bold uppercase">
              GreenGen
            </Link>

            <div className="flex gap-4">
              <Link to="/about" className="hover:underline">
                Sobre nós
              </Link>

              <Link to="/contato" className="hover:underline">
                Contato
              </Link>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
