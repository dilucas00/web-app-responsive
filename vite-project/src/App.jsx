import './App.css'
import SideBarM  from './components/SideBarM';
import TableHistoric from './components/TableHistoric';
import CardExemplo from './components/CardExample';
import AddHistoric from './components/AddHistoric';

function App() {


  return (
    <>
      <SideBarM></SideBarM>
      <CardExemplo></CardExemplo>
      <TableHistoric></TableHistoric>
      <AddHistoric></AddHistoric>
    </>
  )
}

export default App
