import React, { useState } from "react";
import { Modal, Button, Input } from "antd";

function AddHistoric({ onAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  
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
    };

    onAdd(newTransaction); 
    setCategoria("");
    setData("");
    setValor("");
    handleOk();
  };

  return (
    <div className="flex justify-center bg-white w-full gap-5 items-center h-60 flex-col">
      <span className="text-black font-light text-3xl font-oswald">
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
          class="stroke-green-400 fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
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
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // Remove os botões padrões
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 space-y-3">
          {/* Campo de Categoria (Texto Livre) */}
          <Input
            placeholder="Categoria"
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
            placeholder="Digite o valor em R$"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />

          {/* Botões de Ação */}
          <div className="flex justify-between mt-4">
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button className="bg-gradient-custom" type="primary" htmlType="submit">
              Salvar
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddHistoric;