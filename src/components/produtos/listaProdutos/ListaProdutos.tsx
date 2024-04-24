import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../service/Service";
import CardProduto from "../cardProdutos/CardProdutos";

function ListaProduto() {
    const [produto, setProduto] = useState<Produto[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado");
            navigate("/login");
        }
    }, [token]);

    async function buscarProduto() {
        try {
            await buscar("/produto", setProduto, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                alert("O token expirou, favor logar novamente");
                handleLogout();
            }
        }
    }

    useEffect(() => {
        buscarProduto();
    }, [produto.length]);
    return (
        <>
            {produto.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {produto.map((produto) => (
                            <>
                                <CardProduto key={produto.id} produto={produto} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaProduto;
