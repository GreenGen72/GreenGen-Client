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
  adicionaProdutosNoCarrinho: (produto: Produto) => void;
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
      id: 1,
      nome: "Produto Exemplo",
      descricao: "Descrição do Produto Exemplo",
      preco: 10.0,
      quantidade: 1,
      categoria: null,
      usuario: null,
    },
    {
      id: 2,
      nome: "Segundo Produto Exemplo",
      descricao: "Descrição do Produto Exemplo",
      preco: 18.0,
      quantidade: 1,
      categoria: null,
      usuario: null,
    },
  ]);

  const adicionaProdutosNoCarrinho = (novoProduto: Produto) => {
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
        adicionaProdutosNoCarrinho,
        produtosNoCarrinho,
        removeProdutosNoCarrinho,
        setProdutosNoCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
