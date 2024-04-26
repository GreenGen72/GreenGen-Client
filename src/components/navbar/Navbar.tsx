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
        <nav className="flex flex-col w-full bg-main-green text-white h-29">
            <div className="relative">
                <Link to="/home" className="absolute top-3 left-10">
                    <Logo/>
                </Link>
            </div>

            {usuario.token === "" && (
                <div className="flex justify-center items-center w-full h-20">
                    <div></div>
                    <Link to="/about" className="hover:underline px-2 uppercase">Sobre nós</Link>
                    <Link to="/contato" className="hover:underline px-2 uppercase">Contato</Link>
                    <Link to="/login" className="hover:underline px-2 uppercase">Login</Link>
                </div>
            )}

            {usuario.token !== "" && (
                <nav className="flex bg-main-light-green text-center w-full justify-center items-center h-8 mt-20">
                    <Link to="/home" className="hover:underline px-2 uppercase">Home</Link>
                    <Link to="/categoria" className="hover:underline px-2 uppercase">Categoria</Link>
                    <Link to="/cadastrar" className="hover:underline px-2 uppercase">Cadastrar categoria</Link>
                    <Link to="/about" className="hover:underline px-2 uppercase">Sobre nós</Link>
                    <Link to="/contato" className="hover:underline px-2 uppercase">Contato</Link>
                    <Link to='/perfil' className='hover:underline uppercase'>Perfil</Link>
                    <Link to="" onClick={logout} className="hover:underline px-2 uppercase">Sair</Link>
                </nav>
            )}
        </nav>
    );
}

export default Navbar;
