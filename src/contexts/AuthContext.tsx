import {createContext, ReactNode, useState} from "react";

import UsuarioLogin from "../models/UsuarioLogin";
import {login} from "../service/Service";

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

export function AuthProvider({children}: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogged, setIsLogged] = useState(false)
  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    setErrorMessage('');
    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      console.log(userLogin)
      if (userLogin.usuario == 'root@root.com') {
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