import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Usuario from "../../models/Usuario";
import Produto from "../../models/Produto";
import { CartContext } from "../../contexts/CartContext";
import Transacao from "../../models/transacao";
import { toastAlerta } from "../../utils/toastAlerta";

export default function Checkout() {
  const navigate = useNavigate();
  const { usuario, produtosNoCarrinho } = useContext(AuthContext);
  const { setProdutosNoCarrinho } = useContext(CartContext);
  const [total, setTotal] = useState(
    produtosNoCarrinho.reduce((acumulador, produto) => {
      acumulador += parseFloat(produto.preco);
      return acumulador;
    }, 0)
  );

  useEffect(() => {
    if (produtosNoCarrinho.length === 0 && usuario.token === "") navigate("/");
    if (produtosNoCarrinho.length === 0 && usuario.token !== "")
    setTotal(
      produtosNoCarrinho.reduce((acumulador, produto) => {
        acumulador += parseFloat(produto.preco) * produto.quantidade;
        return acumulador;
      }, 0)
    );
  }, [produtosNoCarrinho]);

  async function pagar() {
    if (usuario.token === "") {
      navigate("/login");
    } else {
      produtosNoCarrinho.map(async (produto) => {
        const produtoDaTransacao = (await find(
          `/produtos/${produto.id}`
        )) as unknown as Produto;
        const comprador = { id: usuario.id } as Usuario;
        const transacao: Transacao = {
          comprador,
          produto: produtoDaTransacao,
          quantidade: produto.quantidade,
        };
        try {
          comprar(transacao);
          setProdutosNoCarrinho([]);
          localStorage.setItem("produtosNoCarrinho", JSON.stringify([]));
        } catch (error) {
          toastAlerta(
            "Ops, algo deu errado. Tente novamente mais tarde...",
            "erro"
          );
          console.log(error);
        }
      });
    }
  }

  return (
    <div className="min-h-screen bg-green-100 pt-52">
      <h1 className="mb-10 text-center text-2xl font-bold">Meu carrinho</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {carrinhoProdutos.map((produto) => (
            <ProdutoCheckout key={produto.id} produto={produto} />
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-600">{total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Frete</p>
            <p className="text-gray-600">R$9,99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {(total + 4.99).toFixed(2).replace(".", ",")}
              </p>
              <p className="text-sm text-gray-600">+ Impostos</p>
            </div>
          </div>
          <button
            onClick={pagar}
            className="mt-6 w-full rounded-md bg-green-600 py-1.5 font-medium text-black-50 hover:bg-green-600"
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
