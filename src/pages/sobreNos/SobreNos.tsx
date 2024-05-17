import React from "react";
import GithubIcon from '../../components/GithubIcon/GithubIcon';
import LinkedInIcon from "../../components/LinkedInIcon/LinkedInIcon";
const AboutUs: React.FC = () => {
  return (
    <div className="p-4 flex-grow bg-slate-50">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-700">
        Sobre a Green Gen
      </h2>
      <div className="border-l-4 border-r-4 border-green-500 p-4 space-y-6">
        <div className="text-justify">
          <p className="text-lg text-green-900 leading-normal mb-5">
            Bem-vindo à{" "}
            <span className="font-bold text-lime-950">Green Gen!</span>
          </p>

          <p className="text-lg text-green-900 leading-normal mb-5">
            Aqui a inovação encontra a sustentabilidade para um futuro mais
            brilhante. Somos uma equipe apaixonada{" "}
            <span className="font-bold text-lime-950">
              dedicada a promover uma mudança positiva{" "}
            </span>{" "}
            por meio do poder do sol.
          </p>
          <p className="text-lg text-green-900 leading-normal mb-5">
            Na Green Gen, acreditamos que{" "}
            <span className="font-bold text-lime-950">
              o futuro da energia está na luz do sol
            </span>
            , uma fonte inesgotável e renovável de poder. Nossa missão é
            oferecer uma ampla gama de{" "}
            <span className="font-bold text-lime-950">
              produtos inovadores que funcionam com energia solar,
            </span>{" "}
            proporcionando não apenas{" "}
            <span className="font-bold text-lime-950">
              soluções práticas para o seu dia a dia,
            </span>{" "}
            mas também ajudando a construir um mundo mais limpo e
            <span className="font-bold text-lime-950">
              sustentável para as gerações futuras.
            </span>
          </p>
          <p className="text-lg text-green-900 leading-normal mb-5">
            Cada produto em nossa loja é cuidadosamente selecionado, garantindo{" "}
            <span className="font-bold text-lime-950">
              qualidade, eficiência e desempenho excepcionais.
            </span>
            . Desde iluminação externa e interna até gadgets e dispositivos de
            energia renovável, temos tudo o que você precisa para{" "}
            <span className="font-bold text-lime-950">
              aproveitar ao máximo o poder do sol em sua vida diária.
            </span>
          </p>
          <p className="text-lg text-green-900 leading-normal mb-5">
            Além de oferecer{" "}
            <span className="font-bold text-lime-950">
              produtos de alta qualidade,
            </span>{" "}
            estamos empenhados em educar e inspirar nossa comunidade sobre os
            benefícios da energia solar e práticas sustentáveis. Acreditamos
            que, juntos, podemos fazer uma diferença significativa na{" "}
            <span className="font-bold text-lime-950">
              proteção do nosso planeta para as gerações futuras.
            </span>
          </p>
          <p className="text-lg text-green-900 leading-normal mb-6">
            Junte-se a nós nesta jornada , rumo a um futuro{" "}
            <span className="font-bold text-lime-950">
              {" "}
              mais verde e brilhante.
            </span>{" "}
            <span className="font-bold text-lime-950">
              Vamos iluminar o caminho para um amanhã mais sustentável.
            </span>
          </p>
        </div>
        <p className="text-2xl font-bold mb-4 text-center text-green-700">Nosso time</p>
        <div className="flex gap-10
 justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center text-center hoverSB">
              <img
                src="https://avatars.githubusercontent.com/u/52265978?v=4"
                width="100px"
                alt="Foto de Gabriel Rodrigues no GitHub"
                className="rounded-full"
              />
              <p className="mt-2">Gabriel Rodrigues</p>
            <div className="flex gap-4"> <a href="https://github.com/ApenasGabs" target="_blank" className=""><GithubIcon/>
              </a><a href="https://www.linkedin.com/in/apenasgabs/" target="_blank"><LinkedInIcon/></a></div> 
             </div>
          <div className="flex flex-col justify-center items-center text-center">
              <img
                src="https://avatars.githubusercontent.com/u/99691142?v=4"
                width="100px"
                alt="Foto de Dorivania Minante no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Dorivania Minante</p>
              <div className="flex gap-4"><a href="https://github.com/dori-minante " target="_blank"><GithubIcon/></a><a href="https://www.linkedin.com/in/dorivaniasm/" target="_blank"><LinkedInIcon/></a></div> 
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <a href="https://github.com/Jonathangaruti">
              </a>
              <img
                src="https://avatars.githubusercontent.com/u/137525224?v=4"
                width="100px"
                alt="Foto de Jonathan Garuti no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Jonathan Garuti</p>
              <div className="flex gap-4"><a href="https://github.com/Jonathangaruti" target="_blank"><GithubIcon/></a><a href="https://www.linkedin.com/in/jonathangaruti/" target="_blank"><LinkedInIcon/></a></div> 
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <a href="https://github.com/NandayGB">
              </a>
              <img
                src="https://avatars.githubusercontent.com/u/112911182?v=4"
                width="100px"
                alt="Foto de Fernanda Barbosa no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Fernanda Barbosa</p>
              <div className="flex gap-4"><a href="https://github.com/NandayGB" target="_blank"><GithubIcon/></a><a href="https://www.linkedin.com/in/barbosaafernanda/" target="_blank"><LinkedInIcon/></a></div> 
          </div>
          <div className="flex flex-col justify-center items-center text-center">
              <img
                src="https://avatars.githubusercontent.com/u/147649384?v=4"
                width="100px"
                alt="Foto de Ravi Brito no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Ravi Brito</p>
              <div className="flex gap-4"><a href="https://github.com/RaviBrito" target="_blank">
              <GithubIcon/></a><a href="https://www.linkedin.com/in/ravi-brito/" target="_blank"><LinkedInIcon/></a></div> 
          </div>
          <div className="flex flex-col justify-center items-center text-center">
              <img
                src="https://avatars.githubusercontent.com/u/157232091?v=4"
                width="100px"
                alt="Foto de Tainá Poppi no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Tainá Poppi</p>
              <div className="flex gap-4"><a href="https://github.com/tainapoppi" target="_blank"><GithubIcon/></a><a href="https://www.linkedin.com/in/tainapoppi/" target="_blank"><LinkedInIcon/></a></div> 
          </div>
          <div className="flex flex-col justify-center items-center text-center">
              <img
                src="https://avatars.githubusercontent.com/u/92201977?v=4"
                width="100px"
                alt="Foto de Gabriel Nascimento no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Gabriel Nascimento</p>
              <div className="flex gap-4"><a href="https://github.com/devgabrielnascimento" target="_blank"><GithubIcon/>
              </a><a href="https://www.linkedin.com/in/devgabrielnascimento" target="_blank"><LinkedInIcon/></a></div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
