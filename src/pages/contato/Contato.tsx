import React, { useState, FormEvent } from "react";
import { toastAlerta } from "../../utils/toastAlerta";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    const phoneValue = e.target.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
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
    <div className="flex items-center justify-center flex-grow bg-gray-100">
      <div className="max-w-md w-full bg-white rounded p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Entre em Contato
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
              placeholder="email"
              value={formData.email}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 resize-none"
              style={{ minHeight: "150px" }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 active:bg-green-800"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
