import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
import LogoGreenGen from "../../assets/logo_greengen.svg";
import wpIcon from "../../assets/logos_whatsapp-icon.svg";
import userIconNB from "../../assets/user_icon_nb.svg";
import exitIconNB from "../../assets/exit_sharp_icon.svg";
import shoppingCartIconNB from "../../assets/shopping_cart_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { CartContext } from "../../contexts/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { produtosNoCarrinho } = useContext(CartContext);
  const handleSearch = () => {
    navigate(`/busca-produto/${searchQuery}`);
  };

  const handleWhatsAppClick = () => {
    toastAlerta("Fale conosco pelo WhatsApp!", "info");
  };

  const { usuario, handleLogout, isAdmin } = useContext(AuthContext);

  const logout = () => {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "info");
    navigate("/login");
  };

  const renderLoggedInNavbar = () => (
    <nav className="grid grid-cols-1 bg-main-green justify-center items-center text-white">
      <div className="flex items-center  py-4 px-10">
        <Link to="/home" className="flex w-1/3 justify-start items-center">
          <img src={LogoGreenGen} alt="Logo Green Gen" />
        </Link>
        <div className="flex mx-auto text-xl w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex placeholder-gray-400 text-gray-900 p-6 w-full h-16"
            placeholder="Pesquise seu produto aqui"
          />
          <button
            className="bg-main-light-green ml-2 p-2 rounded-full w-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleSearch}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: isHovered ? "gray" : "white" }}
            />
          </button>
        </div>
        <div className="flex gap-2 px-4 w-1/3 justify-end items-center">
          <div className="flex px-4 gap-2 hover:bg-main-light-green rounded-full">
            <img
              src={usuario.foto}
              className="w-12 h-12 rounded-full"
              alt="foto de perfil"
            />
            <ul className="grid items-center">
              <li>Olá, {usuario.nome.split(" ")[0]}!</li>
            </ul>
          </div>
          <Link to="/checkout" className="hover:no-underline">
            <div className="indicator">
              <img
                src={shoppingCartIconNB}
                alt="Ícone de carrinho de compras"
              />
              {produtosNoCarrinho.length > 0 && (
                <span className="badge badge-sm indicator-item">
                  {produtosNoCarrinho.length}
                </span>
              )}
            </div>
          </Link>

          <Link to="" onClick={logout} className="hover:no-underline">
            <img src={exitIconNB} alt="Ícone de saída" />
          </Link>
        </div>
      </div>

      <nav className="flex flex-row justify-center bg-main-light-green text-center w-full items-center gap-10">
        <div className="flex tracking-widest gap-10 justify-center">
          <div className="dropdown dropdown-hover hover:bg-main-base-color hover:text-main-green">
            <div
              tabIndex={0}
              className="flex items-center justify-center h-10 px-2"
            >
              <Link
                to="/categoria"
                className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green hover:transition-all"
              >
                CATEGORIAS
              </Link>
            </div>

            {isAdmin && (
              <ul
                tabIndex={0}
                className="relative dropdown-content z-[1] menu p-4 shadow bg-main-green w-full"
              >
                <li className="text-main-base-color hover:bg-main-light-green z-0">
                  <Link to={`/cadastro-categoria/`} className="text-white">
                    Cadastrar Nova categoria
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="dropdown dropdown-hover hover:bg-main-base-color hover:text-main-green">
            <div
              tabIndex={0}
              className="flex items-center justify-center h-10 px-2"
            >
              <Link
                to="/produtos"
                className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green hover:transition-all"
              >
                Produtos
              </Link>
            </div>

            {isAdmin && (
              <ul
                tabIndex={0}
                className="relative dropdown-content z-[1] menu p-4 shadow bg-main-green w-full"
              >
                <li className="text-main-base-color hover:bg-main-light-green z-0">
                  <Link to={`/cadastro-produto/`} className="text-white">
                    Cadastrar Novo Produto
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/about"
            className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green"
          >
            Sobre nós
          </Link>
          <Link
            to="/perfil"
            className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green"
          >
            Perfil
          </Link>
          <Link
            to="/contato"
            className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green"
          >
            Contato
          </Link>
        </div>
      </nav>
    </nav>
  );

  const renderLoggedOutNavbar = () => (
    <nav className="grid grid-cols-1 bg-main-green justify-center items-center text-white">
      <div className="flex  items-center  py-4 px-10">
        <Link to="/home" className="flex w-1/3 justify-start items-center">
          <img src={LogoGreenGen} alt="Logo Green Gen" />
        </Link>
        <section className="flex mx-auto text-xl w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex  placeholder-gray-400 text-gray-900 p-6 w-full h-16"
            placeholder="Pesquise seu produto aqui"
          />
          <button
            className="bg-main-light-green ml-2 p-2 rounded-full w-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleSearch}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: isHovered ? "gray" : "white" }}
            />
          </button>
        </section>
        <div className="flex gap-2 px-4 w-1/3 justify-end">
          <div className="flex px-4 gap-2 hover:bg-main-light-green rounded-full">
            <img src={userIconNB} alt="Ícone usuário padrão" />
            <ul className="">
              <li>
                Faça{" "}
                <Link
                  to="/login"
                  className="hover:underline hover:text-main-green"
                >
                  {" "}
                  Login{" "}
                </Link>
                ou
              </li>
              <li>
                <Link
                  to="/cadastro"
                  className="hover:underline hover:text-main-green"
                >
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="flex flex-row justify-end bg-main-light-green text-center w-full items-center gap-10">
        <div className="flex tracking-widest gap-10 basis-2/4 justify-center">
          <div className="dropdown dropdown-hover hover:bg-main-base-color hover:text-main-green">
            <div
              tabIndex={0}
              className="flex items-center justify-center h-10 px-2"
            >
              <Link
                to="/categoria"
                className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green hover:transition-all"
              >
                CATEGORIAS
              </Link>
            </div>
          </div>
          <Link
            to="/produtos"
            className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green hover:transition-all"
          >
            Produtos
          </Link>
          <Link
            to="/about"
            className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green"
          >
            Sobre nós
          </Link>

          <Link
            to="/contato"
            className="hover:not-underline px-2 uppercase hover:bg-main-base-color flex items-center justify-center h-10 hover:text-main-green"
          >
            Contato
          </Link>
        </div>
        <div
          className="flex justify-center basis-1/4 bg-wp-bg-color items-center gap-4 hover:bg-wp-hv-bg-color h-10 "
          style={{ cursor: "pointer" }}
          onClick={handleWhatsAppClick}
        >
          <img src={wpIcon} alt="Icone do WhatsApp" />
          Fale conosco pelo WhatsApp
        </div>
      </nav>
    </nav>
  );

  return (
    <>
      {usuario.token === "" ? renderLoggedOutNavbar() : renderLoggedInNavbar()}
    </>
  );
}

export default Navbar;
