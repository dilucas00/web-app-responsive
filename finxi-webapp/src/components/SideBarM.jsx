import { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import "boxicons/css/boxicons.min.css";

function SideBarM() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Renomeie o estado
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  // Estrutura do menu usando a sintaxe do Ant Design v5+
  const menuItems = [
    {
      key: '1',
      label: (
        <div className="flex items-center gap-3 text-base font-medium text-gray-700 px-6 py-4 hover:bg-gray-50/80">
          <i className="bx bx-user-circle text-xl text-[#0F2A3D]"></i>
          <span onClick={handleRegisterClick}>Meu Perfil</span>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="flex items-center gap-3 text-base font-medium text-gray-700 px-6 py-4 hover:bg-gray-50/80">
          <i className="bx bx-pie-chart-alt-2 text-xl text-[#0F2A3D]"></i>
          <span>Estatísticas</span>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div className="flex items-center gap-3 text-base font-medium text-gray-700 px-6 py-4 hover:bg-gray-50/80">
          <i className="bx bx-cog text-xl text-[#0F2A3D]"></i>
          <span>Configurações</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#0F2A3D] top-0 z-50 shadow-sm border-b border-[#1a3d54]">
      <div className="px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex-1">
            <Dropdown
              menu={{ items: menuItems }} // Sintaxe correta do Ant Design v5
              trigger={['click']}
              open={dropdownOpen}
              onOpenChange={(open) => setDropdownOpen(open)}
              dropdownClassName="dropdown-overlay"
            >
              {/* Remova o onClick e o e.preventDefault() */}
              <img 
                src="/icons/Menu.png" 
                alt="Dropdown Menu"
                className="w-7 h-7 cursor-pointer active:opacity-70 transition-opacity hover:scale-110"
              />
            </Dropdown>
          </div>


          {/* Logo */}
          <div className="flex-1 flex justify-center mx-2">
            <img 
              src="/icons/finxi-logo.png" 
              alt="Finxi Logo" 
              className="h-50 w-auto object-contain flex-shrink-0" 
              style={{ minWidth: '140px' }} 
            />
          </div>

          <div className="flex-1" />
        </div>

       
        <div className="pt-4 ">
          <p className="text-white font-medium text-[16px] leading-tight">
            Olá, Geraldo
          </p>
          <p className="text-[#7c9cad] text-xs mt-0.5">
            Bem-vindo de volta
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBarM;