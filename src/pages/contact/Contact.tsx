import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <div className="flex flex-col space-y-2">
        <p className="text-lg">
          E-mail: greengen@greengen.com
        </p>
        <p className="text-lg">
          Telefone: (11) 1234-5678
        </p>
        <p className="text-lg">
          Endereço: Rua Green, 123 - Bairro Generation - São Paulo - SP
        </p>
      </div>
    </div>
  );
};

export default Contact;

