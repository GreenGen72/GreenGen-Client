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
  handleAddToCart: (produto: Produto) => void;
  handleRemoveToCart: (produto: Produto) => void;
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
  const handleAddToCart = (produto: Produto) => {
    setProdutosNoCarrinho([...produtosNoCarrinho, produto]);
    console.log("add to the cart");
  };
  const handleRemoveToCart = (produto: Produto) => {
    // setProdutosNoCarrinho(() => {
    //   produtosNoCarrinho.filter((produto) => produto.id !== produto.id);
    // });
    console.log(`${produto}`);
  };
  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        produtosNoCarrinho,
        handleRemoveToCart,
        setProdutosNoCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
