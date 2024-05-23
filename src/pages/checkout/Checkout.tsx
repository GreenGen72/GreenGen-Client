import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import { toastAlerta } from "../../utils/toastAlerta";
import Produto from "../../models/Produto";

export default function Checkout() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const {
    produtosNoCarrinho,
    setProdutosNoCarrinho,
    removeProdutosNoCarrinho,
  } = useContext(CartContext);

  const [total, setTotal] = useState(
    produtosNoCarrinho.reduce((acumulador, produto) => {
      return acumulador + parseFloat(String(produto.preco));
    }, 0)
  );

  useEffect(() => {
    setTotal(
      produtosNoCarrinho.reduce((acumulador, produto) => {
        return (
          acumulador + parseFloat(String(produto.preco)) * produto.quantidade
        );
      }, 0)
    );
  }, [produtosNoCarrinho, usuario.token, navigate, setTotal]);
  useEffect(() => {
    const novoTotal = produtosNoCarrinho.reduce((acumulador, produto) => {
      return (
        acumulador + parseFloat(String(produto.preco)) * produto.quantidade
      );
    }, 0);

    setTotal(novoTotal);
  }, [produtosNoCarrinho, usuario.token, navigate]);
  const pagar = () => {
    if (usuario.nome == "") {
      toastAlerta("Voce precisa estar logado para concluir a compra", "info");
      navigate("/login");
    } else {
      toastAlerta("Produto comprado", "sucesso");
      setProdutosNoCarrinho([] as Produto[]);
    }
  };

  const frete = 9.99;
  return produtosNoCarrinho.length ? (
    <div className="flex flex-grow bg-green-100 pt-52">
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <h1 className="mb-10 text-center text-2xl font-bold">Meu carrinho</h1>
          {produtosNoCarrinho.map((produto) => (
            <div
              key={produto.id}
              className="flex items-center justify-between p-4 mb-4 bg-white rounded-md shadow"
            >
              <div className="flex items-center">
                <div>
                  <h2 className="text-xl font-bold">{produto.nome}</h2>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">
                  R${Number(produto.preco).toFixed(2)}
                </p>
                <button
                  onClick={() => removeProdutosNoCarrinho(produto.id)}
                  className="mt-2 text-sm text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </div>
            </div>
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
          <button
            onClick={() => setProdutosNoCarrinho([] as Produto[])}
            className="mt-6 w-full rounded-md bg-green-600 py-2 font-medium text-white hover:bg-green-700"
          >
            Limpar carrinho
          </button>
          <p className="text-sm mt-4">
            **Limitado a um produto de cada tipo por CPF
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-grow bg-green-100 pt-52">
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <h1 className="mb-10 text-center text-2xl font-bold">Carrinho vazio</h1>
      </div>
    </div>
  );
}
