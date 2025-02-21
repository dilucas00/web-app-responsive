import { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import '../App.css';

function SideBarM() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Itens do menu do dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1">Opção 1</Menu.Item>
      <Menu.Item key="2">Opção 2</Menu.Item>
      <Menu.Item key="3">Opção 3</Menu.Item>
    </Menu>
  );

  return (
    <div className='w-m h-10 bg-[#112942] pt-10 flex flex-row justify-center'>
      <div className='flex justify-center items-center'>
        <div className='flex items-center justify-center w-10'>
          <Dropdown
            overlay={menu}
            trigger={['click']}
            visible={dropdownVisible}
            onVisibleChange={(visible) => setDropdownVisible(visible)}
          >
            <img 
              src="/Menu.png" 
              alt="Dropdown Menu" 
              id='drop-menu'
              className='w-8 h-8 mr-25 cursor-pointer'
              onClick={(e) => e.preventDefault()}
            />
          </Dropdown>
        </div>
        <div className=''>
          <img src="/finxi-logo.png" alt="" className='w-60' />
        </div>
      </div>
    </div>
  );
}

export default SideBarM;