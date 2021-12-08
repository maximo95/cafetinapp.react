import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar.js"
function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo="Bienvenidos a mi e commerce" clase="texto-greeting"/>
    </>
  );
}

export default App;
