import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { GithubLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react";
import LogoFooter from "./LogoFooter.tsx";
import LeafIcon from "./LeafIcon.tsx";
import "./Footer.css";

function Footer() {
  return (
    <footer className="text-white w-full content-center items-center text-center">
      <div className="bg-primary flex flex-col items-center relative">
        <div className="absolute top-4 right-4 text-center px-14">
          <p className="text-lg font-semibold">Siga-nos nas redes sociais</p>
          <div className="flex justify-center space-x-4 mt-0">
            <a
              href="https://www.instagram.com/greengen_72?igsh=MTdjNDU1Z2hkd2libg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo className="hover:fill-accent"size={32} weight="bold" alt="Instagram" />
            </a>
            <a
              href="https://github.com/GreenGen72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="hover:fill-accent"size={32} weight="bold" alt="GitHub" />
            </a>

            <a
              href="https://www.youtube.com/@greengen72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo className="hover:fill-accent"size={32} weight="bold" alt="Youtube ícone" />
            </a>


          </div>
          <div className="mt-8">
            <p className="text-base flex items-start pl-4 font-semibold">
              Contatos:
            </p>
            <ul>
              <li className="flex items-start pl-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="sm" style={{ marginTop: '6px' }}/>
                e-mail: greengen@greengen.com
              </li>
              <li className="flex items-start pl-4">
                <FontAwesomeIcon icon={faPhone} className="mr-2" size="sm" style={{ marginTop: '6px' }}/>
                telefone: (11) 1234-5678
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full items-start py-4 px-8">
          <LogoFooter />
          <div className="ml-4 mt-4 tracking-widest ">
            <p className="text-lg font-bold text-left">MENU</p>
            <ul className="text-base flex flex-col items-start space-y-1 mt-6 tracking-widest ">
              <li>
                <Link to="/categoria" className="ft-icon flex items-center gap-2 text-white hover:no-underline hover:text-accent">
                <LeafIcon /> Categorias
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="ft-icon flex items-center gap-2 text-white hover:no-underline hover:text-accent hover:fill-accent">
                <LeafIcon /> Produtos
                </Link>
              </li>
              <li>
                <Link to="/about" className="ft-icon flex items-center gap-2 text-white hover:no-underline hover:text-accent">
                 <LeafIcon /> Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
        </div>

<div className="mt-2 mb-4 flex items-center">
  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" size="sm" />
  <p className="mb-0">Endereço: Rua Green, 72 - Bairro Generation - São Paulo/SP</p>
</div>
      </div>
      <div className="bg-secondary w-full py-0.5">
        <p className="text-base">Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;