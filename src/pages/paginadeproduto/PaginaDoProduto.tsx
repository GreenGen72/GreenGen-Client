import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../models/Produto";
import { buscar } from "../../service/Service";
import { toastAlerta } from "../../utils/toastAlerta";
import { AuthContext } from "../../contexts/AuthContext";

const PaginaDoProduto: React.FC = () => {
  const [produto, setProduto] = useState<Produto>();
  console.log("setProduto: ", setProduto);
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  console.log("id: ", id);
  const { adicionaProdutoNoCarrinho } = useContext(CartContext);
  const navigate = useNavigate();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (id && !produto) {
      buscarPorId(id);
    }
  }, [buscarPorId]);

  const comprarProduto = () => {
    if (produto) {
      adicionaProdutoNoCarrinho(produto);
      console.log(`Compra finalizada: ${produto.nome} adicionado ao carrinho.`);
      navigate("/checkout");
    }
  };

  const calcularPrecoComDesconto = (preco: number, desconto: number) => {
    if (preco) {
      return preco - preco * (desconto / 100);
    }
  };

  // Verificar se produto está definido
  // if (!produto) {
  //   return <div>Produto não encontrado.</div>;
  // }
  const precoDoProduto = produto ? produto.preco : 0;
  const precoComDesconto = calcularPrecoComDesconto(precoDoProduto, 20);

  return produto ? (
    <section className="flex flex-col relative">
      <div className="md:flex-col md:items-center md:gap-y-[30px] w-[96.21%] flex justify-between gap-x-2.5 relative max-w-[1396.96875px] mt-[46px] mx-auto mb-[46px]">
        <div className="flex flex-col md:flex-row w-full mt-6">
          <img
            className="md:mt-[unset] md:mb-[unset] md:w-full md:min-w-[unset] md:max-w-[640px] w-[640px] object-cover relative min-w-0"
            src={produto.foto}
            alt={produto.nome}
          />
          <div className="md:mt-[unset] md:mb-[unset] md:w-full md:min-w-[unset] tn:gap-y-[50px] w-[626px] flex flex-col gap-y-[52px] relative min-w-0">
            <div className="flex flex-col relative items-center">
              <h2 className="md:text-[24px] md:items-start xxs:text-[20px] font-black text-[25px] leading-[1.52] font-Poppins text-[rgba(0,0,0,0.737)] tracking-[4.5px] relative text-center">
                {produto.nome}
              </h2>
              <h5 className="font-[275] text-base font-Poppins text-black tracking-[2.88px] w-[95.8%] relative mt-3.5 ml-px text-justify">
                {produto.descricao}
              </h5>
              <h3 className="md:items-start w-[409px] relative max-w-[85%] mt-[25px] text-center">
                <span
                  className={`$ italic font-medium text-[20px] leading-normal font-Poppins text-black md:text-[18px] xxs:text-[16px]`}
                >
                  <span className="font-medium text-[rgb(72,121,8)] tracking-[0.8px]">
                    De: R$ {produto.preco}
                    <br />
                  </span>
                  <span className="font-black text-[1.45em] leading-[1.51] text-[rgb(72,121,8)] tracking-[1.15px]">
                    Por: R$ {precoComDesconto}
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

            <div className="flex items-center justify-center">
              {" "}
              <h2 className="md:text-[22px] md:items-start xs:mt-[3px] xs:mx-auto xs:mb-[7px] xxs:text-[20px] tn:mt-[3px] tn:mx-2 tn:mb-[7px] flex justify-center font-semibold text-[24px] leading-normal font-Poppins text-white text-center tracking-[4.32px] w-[152px] h-9 relative max-w-[85%] mt-[3px] mr-[26px] mb-[7px] ml-[31px]">
                <button
                  className="bg-[rgb(116,164,53)] text-white px-2 p-2 rounded-md flex flex-col outline outline-white outline-1 outline-offset-[-1px] w-[200px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.247)] relative min-w-0"
                  onClick={comprarProduto}
                >
                  <p className="self-center"> Ver Carrinho</p>
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div>Produto não encontrado.</div>
  );
};

export default PaginaDoProduto;
