import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="p-4 flex-grow">
      <h2 className="text-3xl font-bold mb-4 text-center text-green-700">Sobre a Green Gen</h2>
      <div className="border-l-4 border-r-4 border-green-500 p-4 space-y-6">
        <div className="text-justify">
          <p className="mb-4">
            Bem-vindo à Green Gen, onde a inovação encontra a sustentabilidade para um futuro mais brilhante. Somos uma equipe apaixonada dedicada a promover uma mudança positiva por meio do poder do sol.
          </p>
          <p className="mb-4">
            Na Green Gen, acreditamos que o futuro da energia está na luz do sol, uma fonte inesgotável e renovável de poder. Nossa missão é oferecer uma ampla gama de produtos inovadores que funcionam com energia solar, proporcionando não apenas soluções práticas para o seu dia a dia, mas também ajudando a construir um mundo mais limpo e sustentável para as gerações futuras.
          </p>
          <p className="mb-4">
            Cada produto em nossa loja é cuidadosamente selecionado, garantindo qualidade, eficiência e desempenho excepcionais. Desde iluminação externa e interna até gadgets e dispositivos de energia renovável, temos tudo o que você precisa para aproveitar ao máximo o poder do sol em sua vida diária.
          </p>
          <p className="mb-4">
            Além de oferecer produtos de alta qualidade, estamos empenhados em educar e inspirar nossa comunidade sobre os benefícios da energia solar e práticas sustentáveis. Acreditamos que, juntos, podemos fazer uma diferença significativa na proteção do nosso planeta para as gerações futuras.
          </p>
          <p className="mb-6">
            Junte-se a nós nesta jornada rumo a um futuro mais verde e brilhante. Na Green Gen, estamos iluminando o caminho para um amanhã mais sustentável.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            <a href="https://github.com/ApenasGabs">
              <img
                src="https://avatars.githubusercontent.com/u/52265978?v=4"
                width="100px"
                alt="Foto de Gabriel Rodrigues no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Gabriel Rodrigues</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/dori-minante">
              <img
                src="https://avatars.githubusercontent.com/u/99691142?v=4"
                width="100px"
                alt="Foto de Dorivania Minante no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Dorivania Minante</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/Jonathangaruti">
              <img
                src="https://avatars.githubusercontent.com/u/137525224?v=4"
                width="100px"
                alt="Foto de Jonathan Garuti no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Jonathan Garuti</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/NandayGB">
              <img
                src="https://avatars.githubusercontent.com/u/112911182?v=4"
                width="100px"
                alt="Foto de Fernanda Barbosa no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Fernanda Barbosa</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/RaviBrito">
              <img
                src="https://avatars.githubusercontent.com/u/147649384?v=4"
                width="100px"
                alt="Foto de Ravi Brito no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Ravi Brito</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/tainapoppi">
              <img
                src="https://avatars.githubusercontent.com/u/157232091?v=4"
                width="100px"
                alt="Foto de Tainá Poppi no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Tainá Poppi</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/devgabrielnascimento">
              <img
                src="https://avatars.githubusercontent.com/u/92201977?v=4"
                width="100px"
                alt="Foto de Gabriel Nascimento no GitHub"
                className="rounded-full"
              />
              <p className="text-center mt-2">Gabriel Nascimento</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
