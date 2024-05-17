import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
import LogoGreenGen from "../../assets/logo_greengen.svg";
import wpIcon from "../../assets/logos_whatsapp-icon.svg";
import userIconNB from "../../assets/user_icon_nb.svg";
import userIconNBDB from "../../assets/user_icon_nb_dd.svg";
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
            className="bg-main-light-green  p-2 rounded-e-full w-20 hover:bg-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleSearch}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: isHovered ? "black" : "white" }}
            />
          </button>
        </div>
        <div className="flex gap-2 px-4 w-1/3 justify-end items-center">

        <div className="dropdown dropdown-hover hover:bg-main-light-green rounded-se-2xl rounded-ss-2xl">
  <div tabIndex={0} role="button" className="btn m-1 flex px-4 gap-2 hover:bg-transparent rounded-full bg-transparent border-transparent hover:border-transparent">
    <img
      src={usuario.foto}
      className="w-12 h-12 rounded-full"
      alt="foto de perfil"
    />
    <ul className="">
      <li className="text-white">Olá, {usuario.nome.split(" ")[0]}!</li>
    </ul>
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu  p-0 gap-4 bg-black rounded-b-box w-full box-border">
    <li className="w-full hover:bg-main-light-green">
      <Link to="/perfil" className="flex justify-end gap-2 w-full px-4 py-2 box-border h-14">
        <span>Meu perfil</span>
        <img className="w-6" src={userIconNBDB} alt="Ícone de meu usuário, perfil" />
      </Link>
    </li>
    <li className=" hover:bg-main-light-green rounded-b-box">
      <Link to="" onClick={logout} className="flex justify-end gap-2 w-full px-4 py-2  box-border h-14 ">
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
                <span className="badge badge-md w-4 border-none font-black text-white indicator-item bg-main-light-green rounded-full">
                  {produtosNoCarrinho.length}
                </span>
              )}
            </div>
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
            className="bg-main-light-green  rounded-e-full w-20"
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
        <div className="flex justify-items-center items-center text-align-center gap-2 px-4 w-1/3 justify-end">
          <div className="flex justify-center justify-items-center px-4 gap-2 hover:bg-main-light-green rounded-full">
            <img src={userIconNB} alt="Ícone usuário padrão" />
            <ul className="">
              <li>
                Faça{" "}
                <Link
                  to="/login"
                  className="hover:no-underline hover:text-main-green"
                >
                  {" "}
                  Login{" "}
                </Link>
                ou
              </li>
              <li>
                <Link
                  to="/cadastro"
                  className="hover:no-underline hover:text-main-green"
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
                <span className="badge badge-md w-4 border-none font-black text-white indicator-item bg-main-light-green rounded-full">
                  {produtosNoCarrinho.length}
                </span>
              )}
            </div>
          </Link>
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
