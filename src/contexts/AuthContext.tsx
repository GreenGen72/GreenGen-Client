import {createContext, ReactNode, useState} from "react";

import UsuarioLogin from "../models/UsuarioLogin";
import {login} from "../service/Service";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
  isAdmin: boolean;
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

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      alert("Usuário logado com sucesso");
      console.log(userLogin)
      if (userLogin.usuario == 'root@root.com') {
        setIsAdmin(true);
      }
      setIsLoading(false);
    } catch (error) {

      alert("Dados do usuário inconsistentes");
      setIsLoading(false);
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
  }

  return (
      <AuthContext.Provider
          value={{usuario, handleLogin, handleLogout, isLoading, isAdmin}}
      >
        {children}
      </AuthContext.Provider>
  );
}
