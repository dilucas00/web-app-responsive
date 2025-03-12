import { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import "boxicons/css/boxicons.min.css";

function SideBarM() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const menu = (
    <Menu className="bg-white rounded-xl shadow-2xl py-3 min-w-[220px]">
      <Menu.Item key="1" className="px-6 py-4 hover:bg-gray-50/80">
        <div className="flex items-center gap-3 text-base font-medium text-gray-700">
          <i className="bx bx-user-circle text-xl text-[#0F2A3D]"></i>
          <span onClick={handleLoginClick}>Meu Perfil</span>
        </div>
      </Menu.Item>
      
      <Menu.Item key="2" className="px-6 py-4 hover:bg-gray-50/80">
        <div className="flex items-center gap-3 text-base font-medium text-gray-700">
          <i className="bx bx-pie-chart-alt-2 text-xl text-[#0F2A3D]"></i>
          <span>Estatísticas</span>
        </div>
      </Menu.Item>
      
      <Menu.Item key="3" className="px-6 py-4 hover:bg-gray-50/80">
        <div className="flex items-center gap-3 text-base font-medium text-gray-700">
          <i className="bx bx-cog text-xl text-[#0F2A3D]"></i>
          <span>Configurações</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-full bg-[#0F2A3D]  top-0 z-50 shadow-sm border-b border-[#1a3d54]">
      <div className="px-4">
        {/* Header Superior */}
        <div className="h-16 flex items-center justify-between">
          {/* Ícone do Menu */}
          <div className="flex-1">
            <Dropdown
              overlay={menu}
              trigger={['click']}
              visible={dropdownVisible}
              onVisibleChange={(visible) => setDropdownVisible(visible)}
              overlayClassName="dropdown-overlay"
            >
              <img 
                src="/Menu.png" 
                alt="Dropdown Menu"
                className="w-7 h-7 cursor-pointer active:opacity-70 transition-opacity hover:scale-110"
                onClick={(e) => e.preventDefault()}
              />
            </Dropdown>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center mx-2">
            <img 
              src="/finxi-logo.png" 
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