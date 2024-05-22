import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { TailSpin } from "react-loader-spinner";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const navigate = useNavigate();
  //testando senha consts abaixo
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(faEyeSlash);


  const handleToggle = () => {
    if (type==='password'){
       setIcon(faEye);
       setType('text')
    } else {
       setIcon(faEyeSlash)
       setType('password')
    }
 }
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    atualizarEstado(e);
    setPassword(e.target.value);
  };

  const valuePS = password; usuarioLogin.usuario;

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="bg-white flex-grow grid grid-cols-1  lg:grid-cols-2 place-items-center font-bold">
        <form
          className="flex justify-center items-center flex-col  w-1/2 gap-4"
          onSubmit={login}
        >
          <h2 className="text-primary text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">E-mail</label>
            <div className="mb-4 flex">
            <span className="flex justify-around items-center w-10  border-slate border-2 border-r-0 spEye hover:transition-colors hover:ease-in hover:duration-300"><FontAwesomeIcon icon={faEnvelope}/></span>
            
            <input
              type="text"
              id="usuario"
              name="usuario"
              autoComplete="on"
              placeholder="E-mail"
              className="border-2 font-light border-slate  rounded p-2 bg-white placeholder-primary border-l-0 text-primary w-full  focus:border-primary focus:border-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
        
              }
              
            />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <div className="mb-4 flex">
            <span className="flex justify-around items-center w-10  border-slate border-2 border-r-0 spEye hover:transition-colors hover:ease-in hover:duration-300" onClick={handleToggle}>
                  <FontAwesomeIcon
              icon={faKey}
              style={{}}
            />
              </span>
            <input
              type={type}
              id="senha"
              name="senha"
              autoComplete="on"
              placeholder="Senha"
              className="border-2 font-light border-slate  rounded p-2 bg-white placeholder-primary border-l-0 text-primary w-full  focus:border-primary focus:border-2"
              value={valuePS}
              
              onChange={handleChange} />

<span className="flex justify-around items-center bg-primary hover:bg-secondary w-16  border-slate border-2 border-l-0 spEye hover:transition-colors hover:ease-in hover:duration-300 hover:cursor-pointer" onClick={handleToggle}>
                  <FontAwesomeIcon className="spEyer"
              icon={icon}
              style={{}}
            />
              </span>
              </div>
          </div>
          <button
            type="submit"
            className="rounded bg-primary hover:bg-secondary text-white w-full h-14 py-2 flex items-center justify-center hover:transition-colors hover:ease-in hover:duration-300"
          >
            {isLoading ? (
              <TailSpin
              color="white"
                              strokeWidth="5"
                        
                              width="24"
                              visible={true}
                />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-green-700 hover:text-green-800"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;
