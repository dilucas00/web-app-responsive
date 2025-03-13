import React, { useState } from "react";
import { Modal, Button, Input } from "antd";

// Lista de ícones disponíveis
const availableIcons = [
  { value: "bx bxs-cart" },
  { value: "bx bxs-car" },
  { value: "bx bx-money" },
  { value: "bx bxs-cool" },
  { value: "bx bxs-first-aid" },
  {  value: "bx bxs-book" },
];

function AddTransaction({ onAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedIcon("");
  };

  const formatarData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}-${mes}-${ano}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataFormatada = formatarData(data);

    const newTransaction = {
      category: categoria,
      date: dataFormatada,
      value: parseFloat(valor),
      icon: selectedIcon,
    };

    onAdd(newTransaction);
    setCategoria("");
    setData("");
    setValor("");
    setSelectedIcon("");
    handleOk();
  };

  return (
    <div className="flex justify-center bg-white w-full gap-5 items-center h-60 flex-col">
      <span className="text-black font-light text-2xl font-oswald">
        Adicione uma nova transação
      </span>

      <button
        onClick={showModal}
        title="Adicionar nova transação"
        className="group cursor-pointer outline-none hover:rotate-90 duration-300 mt-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          className="stroke-black fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </button>

      <Modal
        title="Insira as informações abaixo"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Seletor de Ícones */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selecione um ícone:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {availableIcons.map((icon) => (
                <button
                  type="button"
                  key={icon.value}
                  onClick={() => setSelectedIcon(icon.value)}
                  className={`p-3 rounded-lg border transition-all flex flex-col items-center
                    ${selectedIcon === icon.value 
                      ? "border-blue-500 bg-blue-50 shadow-sm" 
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"}`}
                >
                  <i className={`${icon.value} text-2xl text-gray-700 mb-1`}></i>
                  <span className="text-xs text-gray-600">{icon.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Campo de Categoria */}
          <Input
            placeholder="Categoria (ex: Alimentação, Transporte)"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />

          {/* Campo de Data */}
          <Input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />

          {/* Campo de Valor */}
          <Input
            type="number"
            step="0.01"
            placeholder="Valor (ex: 150.50)"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />

          {/* Botões de Ação */}
          <div className="flex justify-between mt-6">
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button 
              type="primary" 
              htmlType="submit"
              disabled={!selectedIcon}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            >
              Salvar Transação
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddTransaction;