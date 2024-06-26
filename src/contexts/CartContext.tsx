import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import Produto from "../models/Produto";

interface CartContextProps {
  produtosNoCarrinho: Produto[];
  setProdutosNoCarrinho: Dispatch<SetStateAction<Produto[]>>;
  adicionaProdutoNoCarrinho: (novoProduto: Produto) => void;
  removeProdutosNoCarrinho: (produtoId: number) => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

interface CartProviderProps {
  children: ReactNode;
}
export function CartProvider({ children }: CartProviderProps) {
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useState<Produto[]>([
    {
      id: 0,
      nome: "",
      descricao: "",
      foto: "",
      preco: 0,
      quantidade: 0,
      categoria: {
        id: 0,
        descricao: "",
        nome: "",
        foto: "",
      },
    },
  ]);

  const adicionaProdutoNoCarrinho = (novoProduto: Produto) => {
    setProdutosNoCarrinho((listaDeProdutosNoCarrinho) => {
      const produtoExistente = listaDeProdutosNoCarrinho.find(
        (produtoDoCarrinho) => produtoDoCarrinho.id === novoProduto.id
      );

      if (produtoExistente) {
        return listaDeProdutosNoCarrinho.map((produtoJaDoCarrinho) =>
          produtoJaDoCarrinho.id === novoProduto.id
            ? {
                ...produtoJaDoCarrinho,
                quantidadeNoCarrinho:
                  (produtoJaDoCarrinho?.quantidadeNoCarrinho ?? 0) + 1,
              }
            : produtoJaDoCarrinho
        );
      } else {
        return [
          ...listaDeProdutosNoCarrinho,
          { ...novoProduto, quantidadeNoCarrinho: 1 },
        ];
      }
    });
    console.log("add to the cart");
  };

  const removeProdutosNoCarrinho = (produtoId: number) => {
    setProdutosNoCarrinho((listaDeProdutosNoCarrinho) => {
      const produtoExistente = listaDeProdutosNoCarrinho.find(
        (produtoDoCarrinho) => produtoDoCarrinho.id === produtoId
      );

      if (
        produtoExistente?.quantidadeNoCarrinho &&
        produtoExistente?.quantidadeNoCarrinho > 1
      ) {
        return listaDeProdutosNoCarrinho.map((produtoJaDoCarrinho) =>
          produtoJaDoCarrinho.id === produtoId
            ? {
                ...produtoJaDoCarrinho,
                quantidadeNoCarrinho:
                  (produtoJaDoCarrinho?.quantidadeNoCarrinho ?? 0) - 1,
              }
            : produtoJaDoCarrinho
        );
      } else {
        return listaDeProdutosNoCarrinho.filter(
          (produtoJaDoCarrinho) => produtoJaDoCarrinho.id !== produtoId
        );
      }
    });
    console.log(`Updated cart`);
  };
  return (
    <CartContext.Provider
      value={{
        adicionaProdutoNoCarrinho,
        produtosNoCarrinho,
        removeProdutosNoCarrinho,
        setProdutosNoCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
