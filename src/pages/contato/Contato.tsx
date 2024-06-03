import React, { useState, FormEvent } from "react";
import { toastAlerta } from "../../utils/toastAlerta";
import "./Contato.css";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    phone: " ",
    message: " ",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneValue = e.target.value.replace(/\D/g, "");
    let formattedPhone = "";

    if (phoneValue.length <= 11) {
      if (phoneValue.length <= 2) {
        formattedPhone = phoneValue;
      } else if (phoneValue.length <= 6) {
        formattedPhone = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2)}`;
      } else if (phoneValue.length <= 10) {
        formattedPhone = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(
          2,
          6
        )}-${phoneValue.slice(6)}`;
      } else {
        formattedPhone = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(
          2,
          7
        )}-${phoneValue.slice(7, 11)}`;
      }
    }

    setFormData({
      ...formData,
      phone: formattedPhone,
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(e.target.value) || e.target.value !== "") {
      setFormData({
        ...formData,
        email: e.target.value,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toastAlerta("Contato enviado com sucesso!", "info");
    
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 place-items-center bg-white">
      <div className="fundoContato hidden lg:block"></div>
      <div className=" w-full  rounded p-8 ">
        <h1 className="text-4xl text-primary font-black mb-4 text-left">
          Entre em Contato
        </h1>
        <p className="text-3x1 text-left text-primary font-semibold">Mande uma mensagem para a gente!</p>
        
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-2 border-b-primary rounded p-2 focus:outline-none placeholder-gray-400 text-black w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleEmailChange}
              required
              className="border-2 border-b-primary rounded p-2 focus:outline-none placeholder-gray-400 text-black w-full"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">
              Telefone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
              className="border-2  border-b-primary  p-2 focus:outline-none placeholder-gray-400 text-black w-full"
            />
          </div>
          <div className="">
            <label htmlFor="message" className="block text-gray-700">
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="border-2 border-b-primary rounded p-2 focus:outline-none bg-transparent placeholder-gray-400 text-black w-full"
              style={{ minHeight: "150px" }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary font-bold text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-primary hover:scale-105 active:bg-green-800"
          >
            Enviar
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactPage;
