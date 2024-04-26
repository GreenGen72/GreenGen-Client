import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import CardProduto from "../../components/produtos/cardProdutos/CardProdutos";
import { toastAlerta } from "../../utils/toastAlerta";

export default function Checkout() {
  const navigate = useNavigate();
  const { usuario, carrinhoProdutos } = useContext(AuthContext);
  const { setProdutosNoCarrinho } = useContext(CartContext);
  const [total, setTotal] = useState(
    carrinhoProdutos.reduce((acumulador, produto) => {
      return acumulador + parseFloat(produto.preco);
    }, 0)
  );

  useEffect(() => {
    if (carrinhoProdutos.length === 0 && usuario.token === "") navigate("/");
    if (carrinhoProdutos.length === 0 && usuario.token !== "")
      setTotal(
        carrinhoProdutos.reduce((acumulador, produto) => {
          return acumulador + parseFloat(produto.preco) * produto.quantidade;
        }, 0)
      );
  }, [carrinhoProdutos, usuario.token, navigate, setTotal]);

  async function pagar() {
    if (usuario.token === "") {
      navigate("/login");
    } else {
      try {
        for (const produto of carrinhoProdutos) {
          const produtoDaTransacao = await find(`/produtos/${produto.id}`);
          const transacao = {
            comprador: { id: usuario.id },
            produto: produtoDaTransacao,
            quantidade: produto.quantidade,
          };
          comprar(transacao);
        }
        setProdutosNoCarrinho([]);
        localStorage.setItem("carrinhoProdutos", JSON.stringify([]));
      } catch (error) {
        toastAlerta(
          "Ops, algo deu errado. Tente novamente mais tarde...",
          "erro"
        );
        console.log(error);
      }
    }
  }

  const frete = 9.99;

  return (
    <div className="min-h-screen bg-green-100 pt-52">
      <h1 className="mb-10 text-center text-2xl font-bold">Meu carrinho</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {carrinhoProdutos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-600">{total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Frete</p>
            <p className="text-gray-600">R${frete}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {(total + frete).toFixed(2).replace(".", ",")}
              </p>
              <p className="text-sm text-gray-600">+ Impostos</p>
            </div>
          </div>
          <button
            onClick={pagar}
            className="mt-6 w-full rounded-md bg-green-600 py-2 font-medium text-white hover:bg-green-700"
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
