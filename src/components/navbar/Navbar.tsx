import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
import LogoGreenGen from "../../assets/logo_greengen.svg";
import Verified from "../../assets/Verified.svg";
import wpIcon from "../../assets/logos_whatsapp-icon.svg";
import userIconNB from "../../assets/user_icon_nb.svg";
import userIconNBDB from "../../assets/user_icon_nb_dd.svg";
import exitIconNB from "../../assets/exit_sharp_icon.svg";
import shoppingCartIconNB from "../../assets/shopping_cart_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { CartContext } from "../../contexts/CartContext";
import Avatar from "../avatar/Avatar";

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
    navigate("/login");
  };

  const renderLoggedInNavbar = () => (
    <nav className="grid grid-cols-1 bg-primary justify-items-center items-center text-white">
      <div className="grid grid-flow-col items-center py-2 px-4 justify-center  bg-primary w- md:flex md:justify-between">
        <Link to="/home" className="w-full md:w-[500px]">
          <img
            src={LogoGreenGen}
            alt="Logo Green Gen"
            className="w-full md:w-auto"
          />
        </Link>
        <div className="flex flex-row text-xl w-full md:w-[500px] mt-4 md:mt-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow placeholder-gray-400 text-gray-900 p-6 h-14 text-base rounded-l-full"
            placeholder="Pesquise seu produto aqui"
          />
          <button
            className="bg-secondary p-2 rounded-e-full w-20 hover:bg-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleSearch}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: isHovered ? "#74A435" : "white" }}
            />
          </button>
        </div>
        <div className="flex gap-2 px-4 items-center justify-end mt-4 md:mt-0">
          <div className="dropdown dropdown-hover w-auto hover:bg-secondary rounded-se-2xl rounded-ss-2xl">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 flex px-4 gap-2 hover:bg-transparent rounded-full bg-transparent border-transparent hover:border-transparent"
            >
              <Avatar foto={usuario.foto} bordercolour="white" size="small" />
              <ul className="grid justify-items-start">
                <li className="text-sm text-white font-light">Olá, </li>
                <li className="flex text-sm text-white font-bold gap-2">
                  {usuario.nome.split(" ")[0].length > 24
                    ? usuario.nome.replace(/(.{24})..+/, "$1...")
                    : usuario.nome.split(" ")[0]}
                  {isAdmin && (
                    <>
                      <p className="text-accent font-light italic">(Admin)</p>
                      <img src={Verified} alt="" />
                    </>
                  )}
                </li>
              </ul>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-0 gap-4 bg-black rounded-b-box w-full box-border"
            >
              <li className="hover:bg-secondary">
                <Link
                  to={"/perfil"}
                  className="flex w-auto justify-end gap-2 px-1.5 py-2 box-border h-14"
                >
                  <p>Meu perfil</p>
                  <img
                    className="w-6"
                    src={userIconNBDB}
                    alt="Ícone de meu usuário, perfil"
                  />
                </Link>
              </li>
              <li className="hover:bg-secondary rounded-b-box">
                <Link
                  to=""
                  onClick={logout}
                  className="flex justify-end gap-2 w-full px-1.5 py-2 box-border h-14"
                >
                  <span>Sair</span>
                  <img className="w-6" src={exitIconNB} alt="Ícone de saída" />
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/checkout" className="hover:no-underline">
            <div className="indicator">
              <img
                src={shoppingCartIconNB}
                alt="Ícone de carrinho de compras"
              />
              {produtosNoCarrinho.length > 0 && (
                <span className="badge badge-md w-4 border-none font-black text-white indicator-item bg-accent rounded-full">
                  {produtosNoCarrinho.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      <nav className="flex justify-center bg-secondary text-center w-full items-center">
        <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto gap-4 md:gap-52">
          <div className="dropdown dropdown-hover hover:text-white hover:transition-colors hover:ease-in hover:duration-300">
            <div
              tabIndex={0}
              className="flex items-center justify-center h-10 px-2"
            >
              <Link
                to="/categoria"
                className="hover:not-underline px-2 uppercase hover:bg-accent hover:text-white flex items-center justify-center h-10 hover:transition-colors hover:ease-in hover:duration-300"
              >
                CATEGORIAS
              </Link>
            </div>

            {isAdmin && (
              <ul
                tabIndex={0}
                className="relative dropdown-content z-[1] menu p-4 shadow bg-primary w-full"
              >
                <li className="text-main-base-color hover:bg-secondary z-0">
                  <Link
                    to={`/cadastro-categoria/`}
                    className="hover:not-underline px-2 uppercase hover:bg-accent hover:text-white flex items-center justify-center h-10 hover:transition-colors hover:ease-in hover:duration-300"
                  >
                    Cadastrar nova categoria
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="dropdown dropdown-hover hover:text-white">
            <div
              tabIndex={0}
              className="flex items-center justify-center h-10 px-2"
            >
              <Link
                to="/produtos"
                className="hover:not-underline px-2 uppercase hover:bg-accent hover:text-white flex items-center justify-center h-10 hover:transition-colors hover:ease-in hover:duration-300"
              >
                Produtos
              </Link>
            </div>

            {isAdmin && (
              <ul
                tabIndex={0}
                className="relative dropdown-content z-[1] menu p-4 shadow bg-primary w-full"
              >
                <li className="text-main-base-color hover:bg-secondary z-0">
                  <Link to={`/cadastro-produto/`} className="text-white">
                    Cadastrar novo Produto
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/about"
            className="hover:not-underline px-2 uppercase hover:bg-accent hover:text-white flex items-center justify-center h-10 hover:transition-colors hover:ease-in hover:duration-300"
          >
            Sobre nós
          </Link>

          <Link
            to="/contato"
            className="hover:not-underline px-2 uppercase hover:bg-accent hover:text-white flex items-center justify-center h-10 hover:transition-colors hover:ease-in hover:duration-300"
          >
            Contato
          </Link>
        </div>
      </nav>
    </nav>
  );

  const renderLoggedOutNavbar = () => (
    <nav className="grid grid-cols-1 bg-primary justify-center items-center text-white">
      <div className="flex flex-wrap items-center py-4 px-10 justify-center md:justify-between w-full">
        <Link
          to="/home"
          className="flex w-full md:w-auto justify-center md:justify-start"
        >
          <img src={LogoGreenGen} alt="Logo Green Gen" />
        </Link>
        <section className="flex w-full md:w-auto text-xl mt-4 md:mt-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow placeholder-gray-400 text-gray-900 p-6 h-16 text-lg rounded-l-full"
            placeholder="Pesquise seu produto aqui"
          />
          <button
            className="bg-secondary rounded-e-full w-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleSearch}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: isHovered ? "white" : "white" }}
            />
          </button>
        </section>
        <div className="flex justify-center md:justify-end gap-2 px-4 w-full md:w-auto mt-4 md:mt-0">
          <div className="flex justify-center items-center px-4 gap-2 hover:bg-secondary rounded-full hover:transition-colors hover:ease-in hover:duration-300">
            <img src={userIconNB} alt="Ícone usuário padrão" />
            <ul>
              <li>
                Faça{" "}
                <Link
                  to="/login"
                  className="hover:no-underline hover:text-primary"
                >
                  {" "}
                  Login{" "}
                </Link>
                ou
              </li>
              <li>
                <Link
                  to="/cadastro"
                  className="hover:no-underline hover:text-primary"
                >
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/checkout" className="hover:no-underline">
            <div className="indicator">
              <img
                src={shoppingCartIconNB}
                alt="Ícone de carrinho de compras"
              />
              {produtosNoCarrinho.length > 0 && (
                <span className="badge badge-md w-4 border-none font-black text-white indicator-item bg-accent rounded-full">
                  {produtosNoCarrinho.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
      <nav className="flex flex-col md:flex-row justify-center md:justify-end bg-secondary text-center w-full items-center gap-4 md:gap-10">
        <div className="flex tracking-widest gap-10 basis-2/4 justify-center">
          <div className="dropdown dropdown-hover hover:bg-accent hover:text-white hover:transition-colors hover:ease-in hover:duration-300">
            <div
              tabIndex={0}
              className="flex items-center justify-center h-10 px-2"
            >
              <Link
                to="/categoria"
                className="hover:not-underline px-2 uppercase flex items-center justify-center h-10 hover:transition-all"
              >
                CATEGORIAS
              </Link>
            </div>
          </div>
          <Link
            to="/produtos"
            className="hover:not-underline px-2 uppercase hover:bg-accent hover:text-white flex items-center justify-center h-10 hover:transition-colors hover:ease-in hover:duration-300"
          >
            Produtos
          </Link>
          <Link
            to="/about"
            className="hover:not-underline px-2 uppercase hover:bg-accent hover:text-white flex items-center justify-center h-10 hover:transition-colors hover:ease-in hover:duration-300"
          >
            Sobre nós
          </Link>

          <Link
            to="/contato"
            className="hover:not-underline px-2 uppercase hover:bg-accent hover:text-white flex items-center justify-center h-10 hover:transition-colors hover:ease-in hover:duration-300"
          >
            Contato
          </Link>
        </div>
        <div
          className="flex justify-center basis-1/4 bg-wp-bg-color items-center gap-4 hover:bg-accent h-10 hover:transition-colors hover:ease-in hover:duration-300 cursor-pointer"
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
