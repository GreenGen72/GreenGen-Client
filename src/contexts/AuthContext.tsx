import { createContext, ReactNode, useState, useEffect } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../service/Service";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLogged: boolean;
  isLoading: boolean;
  isAdmin: boolean;
  errorMessage: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const usuarioStorage = sessionStorage.getItem("usuario");
    return usuarioStorage ? JSON.parse(usuarioStorage) : {
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    };
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => {
    const usuarioStorage = sessionStorage.getItem("usuario");
    return usuarioStorage ? JSON.parse(usuarioStorage).usuario === 'root@root.com' : false;
  });

  useEffect(() => {
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const [errorMessage, setErrorMessage] = useState('');
  const [isLogged, setIsLogged] = useState(false)
  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    setErrorMessage('');
    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      alert("Usuário logado com sucesso");
      console.log(userLogin);
      if (userLogin.usuario === 'root@root.com') {
        setIsAdmin(true);
      }
      setIsLoading(false);

      
      setIsLogged(true);
    } catch (error) {

      setErrorMessage("Dados incorretos, tente novamente!");
      setIsLoading(false);
      setIsLogged(false);
    }
    
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
    setIsAdmin(false);
    sessionStorage.removeItem("usuario");
    setErrorMessage('');
  }
  return (
      <AuthContext.Provider
          value={{usuario, handleLogin, handleLogout, isLoading, isLogged, isAdmin, errorMessage}}
      >
        
        {children}
      </AuthContext.Provider>
  );
}