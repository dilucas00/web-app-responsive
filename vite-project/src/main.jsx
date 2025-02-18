import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SideBarM from './components/SideBarM';
import Table    from './components/Table';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <SideBarM></SideBarM>
  <Table></Table>
  
  </StrictMode>,
)
