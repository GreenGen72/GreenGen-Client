import PropTypes from "prop-types";
import lampiaoImage from "../../assets/prod-lampiao.png";
import removerItem from "../../assets/comprarMenos.svg";
import adicionarItem from "../../assets/comprarMais.svg";
import { useState } from "react";

// Componente PaginaDoProduto
const PaginaDoProduto = ({}) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const adicionarProduto = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const removerProduto = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  const comprarProduto = () => {
    // Lógica para finalizar a compra, se necessário
    console.log(
      `Compra finalizada: ${cartQuantity} produto(s) adicionado(s) ao carrinho.`
    );
  };

  return (
    <>
      <section className="flex flex-col relative">
        <div className="md:flex-col md:items-center md:gap-y-[30px] w-[96.21%] flex justify-between gap-x-2.5 relative max-w-[1396.96875px] mt-[46px] mx-auto mb-[46px]">
          <div className="flex flex-col md:flex-row w-full mt-6">
            <img
              className="md:mt-[unset] md:mb-[unset] md:w-full md:min-w-[unset] md:max-w-[640px] w-[640px] object-cover relative min-w-0"
              src={lampiaoImage}
              alt="Lampião"
            />
            <div className="md:mt-[unset] md:mb-[unset] md:w-full md:min-w-[unset] tn:gap-y-[50px] w-[626px] flex flex-col gap-y-[52px] relative min-w-0">
              <div className="flex flex-col relative items-center">
                <h2 className="md:text-[24px] md:items-start xxs:text-[20px] font-black text-[25px] leading-[1.52] font-Poppins text-[rgba(0,0,0,0.737)] tracking-[4.5px] relative text-center">
                  LAMPIÃO SOLAR LED LUMINÁRIA RECARREGÁVEL
                </h2>
                <h5 className="font-[275] text-base font-Poppins text-black tracking-[2.88px] w-[95.8%] relative mt-3.5 ml-px text-justify">
                  O Lampião Solar Retrátil oferece uma solução prática e
                  versátil para iluminação em diversas situações. Com um design
                  retrátil, ele se expande para iluminar o ambiente com uma luz
                  branca e forte, sendo ideal para acampamentos, residências ou
                  como luz de emergência. Seu sistema retrátil permite ocupar
                  menos espaço quando não está em uso.
                </h5>
                <h3 className="md:items-start w-[409px] relative max-w-[85%] mt-[25px] text-center">
                  <span
                    className={`$ italic font-medium text-[20px] leading-normal font-Poppins text-black md:text-[18px] xxs:text-[16px]`}
                  >
                    <span className="font-medium text-[rgb(72,121,8)] tracking-[0.8px]">
                      De: 89,99
                      <br />
                    </span>
                    <span className="font-black text-[1.45em] leading-[1.51] text-[rgb(72,121,8)] tracking-[1.15px]">
                      Por: R$ 59,99
                      <br />
                    </span>
                    <span className="font-[275] text-[0.8em] leading-normal text-[rgba(0,0,0,0.827)] tracking-[2.88px]">
                      À vista no PIX ou em até 12x no cartão.
                    </span>
                  </span>
                </h3>
                <h5 className="italic font-extrabold text-base font-Poppins text-[rgb(216,38,38)] tracking-[2.88px] relative mt-12 mx-px text-center">
                  “FRETE GRÁTIS EM TODO O BRASIL”
                </h5>
              </div>

              <div className="xs:mt-0 xs:mr-0 xs:mb-0 xs:ml-4 tn:mt-0 tn:mr-0 tn:mb-0 tn:ml-2 tn:gap-x-2 w-[85.14%] flex justify-between gap-x-2.5 relative m-auto p-7">
                <img
                  className="w-[46px] h-[46px] object-cover relative cursor-pointer"
                  src={removerItem}
                  alt="remover item"
                  onClick={removerProduto}
                />

                <div className="flex flex-col bg-[rgb(116,164,53)] rounded-[23px] outline outline-white outline-1 outline-offset-[-1px] w-[46px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.247)] relative min-w-0">
                  <h2 className="md:text-[22px] md:items-start xs:mt-[5px] xs:mr-3.5 xs:mb-[5px] xs:ml-4 xxs:text-[20px] tn:my-[5px] tn:mx-2 font-semibold text-[24px] leading-normal font-Poppins text-white tracking-[4.32px] w-3.5 h-9 relative max-w-[85%] mt-[5px] mr-3.5 mb-[5px] ml-[18px]">
                    {cartQuantity}
                  </h2>
                </div>

                <img
                  className="w-[46px] h-[46px] object-cover relative cursor-pointer"
                  src={adicionarItem}
                  alt="adicionar item"
                  onClick={adicionarProduto}
                />

                <h2 className="md:text-[22px] md:items-start xs:mt-[3px] xs:mx-auto xs:mb-[7px] xxs:text-[20px] tn:mt-[3px] tn:mx-2 tn:mb-[7px] flex justify-center font-semibold text-[24px] leading-normal font-Poppins text-white text-center tracking-[4.32px] w-[152px] h-9 relative max-w-[85%] mt-[3px] mr-[26px] mb-[7px] ml-[31px]">
                  <button
                    className="bg-[rgb(116,164,53)] text-white px-2 p-2 rounded-md flex flex-col outline outline-white outline-1 outline-offset-[-1px] w-[200px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.247)] relative min-w-0"
                    onClick={comprarProduto}
                  >
                    COMPRAR
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Definição das propTypes
PaginaDoProduto.propTypes = {
  className: PropTypes.string,
};

// Exportação do componente
export default PaginaDoProduto;
