import { GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import LogoFooter from "./LogoFooter.tsx";

function Footer() {
  //const { usuario } = useContext(AuthContext);
  return (
    <footer className="text-white footer-1 w-full content-center items-center text-center">
      <div className="bg-main-green ">

        <p className="text-lg">Contato:</p>
        <div className="flex justify-center items-center py-2">
          <a className="text-center"
            href="https://www.instagram.com/greengen_72?igsh=MTdjNDU1Z2hkd2libg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo size={48} weight="bold" alt="Instagram" />
          </a>

          <a className="text-center"
            href="https://github.com/GreenGen72"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={48} weight="bold" alt="GitHub" />
          </a>
        </div>
        <p>
          E-mail: greengen@greengen.com <br/>
          Telefone: (11) 1234-5678 <br/>
          Endereço: Rua Green, 123 - Bairro Generation - São Paulo - SP <br/>
        </p>
        <div className="relative">
          <LogoFooter/>
        </div>
      </div>
      <div className="bg-main-light-green w-full py-0.5">
        <p className="text-xl font-bold">
          Green Gen 72 | © {new Date().getFullYear()}
        </p>
      </div>

    </footer>
  );
  // return usuario.token !== "" ? (
  //   <div className="bg-indigo-900 text-white">
  //     <div className="container flex flex-col items-center py-4">
  //       <p className="text-xl font-bold">
  //         Green Gen 72 | © {new Date().getFullYear()}
  //       </p>
  //       <p className="text-lg">Acesse nossas redes sociais:</p>
  //       <div className="flex gap-2">
  //         <a
  //           href="https://www.instagram.com/greengen_72?igsh=MTdjNDU1Z2hkd2libg=="
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <InstagramLogo size={48} weight="bold" alt="Instagram" />
  //         </a>
  //
  //         <a
  //           href="https://github.com/GreenGen72"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <GithubLogo size={48} weight="bold" alt="GitHub" />
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // ) : (
  //   <></>
  // );
}

export default Footer;
