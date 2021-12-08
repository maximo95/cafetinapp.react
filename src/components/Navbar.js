import './Navbar.css'
import logo_para_html_cafe from  '../assets/logo_para_html_cafe.png'
import CartWidget from './CartWidget'
function Navbar () {
    return (
        <nav>
            <a  href= "#"> <img src ={logo_para_html_cafe} className="imagenLogo" /> </a>
            <a  href= "#" className="nav-clase">home</a>
            <a  href= "#" className="nav-clase">productos</a>
            <a  href= "#" className="nav-clase">nosotros</a>
            <a  href= "#" className="nav-clase">contacto</a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;