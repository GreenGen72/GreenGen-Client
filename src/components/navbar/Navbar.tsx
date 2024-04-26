import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";
import {toastAlerta} from '../../utils/toastAlerta';
import Logo from "./Logo.tsx";

function Navbar() {
    const navigate = useNavigate();

    const {usuario, handleLogout} = useContext(AuthContext);

    function logout() {
        handleLogout();
        toastAlerta("Usuário deslogado com sucesso", "info");
        navigate("/login");
    }

    return (
        <nav className="w-full bg-main-green text-white py-4 h-25">
            <div className="container ">
                <Link to="/home" className="">
                    <Logo/>
                </Link>


                {usuario.token === "" && (
                    <div className="text-center w-full content-center items-center text-center">
                        <Link to="/about" className="hover:underline px-2 uppercase">Sobre nós</Link>
                        <Link to="/contato" className="hover:underline px-2 uppercase">Contato</Link>
                        <Link to="/login" className="hover:underline px-2 uppercase">Login</Link>
                    </div>
                )}


                {usuario.token !== "" && (
                    <div className="text-center w-full content-center items-center text-center">
                        <Link to="/home" className="hover:underline px-2 uppercase">Home</Link>
                        <Link to="/categoria" className="hover:underline px-2 uppercase">Categoria</Link>
                        <Link to="/cadastrar" className="hover:underline px-2 uppercase">Cadastrar categoria</Link>
                        <Link to="/about" className="hover:underline px-2 uppercase">Sobre nós</Link>
                        <Link to="/contato" className="hover:underline px-2 uppercase">Contato</Link>
                        <Link to='/perfil' className='hover:underline  uppercase'>Perfil</Link>
                        <Link to="" onClick={logout} className="hover:underline px-2 uppercase">Sair</Link>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;
