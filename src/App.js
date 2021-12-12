import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/Navbar.js"
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo="Bienvenidos a mi e commerce" clase="texto-greeting"/>
      <ItemCount/>
    </>
  );
}

export default App;
