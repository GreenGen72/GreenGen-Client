import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../service/Service";

function DeleteProduto() {
    const [produto, setProduto] = useState<Produto>({} as Produto);

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produto/${id}`, setProduto, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                alert("O token expirou, favor logar novamente");
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado");
            navigate("/login");
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate("/produto");
    }

    async function deleteProduto() {
        try {
            await deletar(`/produto/${id}`, {
                headers: {
                    Authorization: token,
                },
            });

            alert("Produto apagada com sucesso");
        } catch (error) {
            alert("Erro ao apagar a Produto");
        }

        retornar();
    }
    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar produto</h1>

            <p className="text-center font-semibold mb-4">
                Você tem certeza de que deseja apagar a produto a seguir?
            </p>

            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
                    Produto
                </header>
                <p className="p-8 text-3xl bg-slate-200 h-full">
                    {produto.descricao}
                </p>
                <div className="flex">
                    <button
                        className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
                        onClick={deleteProduto}
                    >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteProduto;
