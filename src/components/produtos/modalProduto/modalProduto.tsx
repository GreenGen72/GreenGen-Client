import FormularioProduto from "../formularioProduto/FormularioProduto";

import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

import "./ModalProduto.css";

const ModalProduto = () => {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 hover:bg-white hover:text-indigo-800">
            Novo Produto
          </button>
        }
        modal
      >
        <div>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
};
export default ModalProduto;
