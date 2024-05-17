import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
import Avatar from "../../components/avatar/Avatar";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "erro"
      );
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="z-2 container mx-auto mt-4 rounded-2xl overflow-hidden">
      <img
        className="w-full h-72 object-cover border-b-8 border-white"
        src={
          "https://img.freepik.com/fotos-gratis/fundo-de-formas-geometricas-abstratas-em-azul_24972-1838.jpg?w=1380&t=st=1714352322~exp=1714352922~hmac=25e8ea0b480a84ea1402b62132a1e5869ccf355f11fc25501da8ecc6447ec25a"
        }
        alt="Capa do Perfil"
      />

      <div
        className="relative pl-24 text-black text-2xl items-center justify-center"
        style={{
          position: "relative",
          left: "86%",
          transform: "translateX(-50%)",
          top: "-110px",
        }}
      >
        <Avatar foto={usuario.foto} size="extrabig" bordercolour="white" />
        <p>Nome: {usuario.nome} </p>
      </div>

      <div className="relative mt-[-6rem] h-72"></div>
    </div>
  );
}

export default Perfil;
