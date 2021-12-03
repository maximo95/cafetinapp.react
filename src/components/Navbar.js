import './Navbar.css'
import logo_para_html_cafe from  '../assets/logo_para_html_cafe.png'
function Navbar () {
    return (
        <nav>
            <a  href= "#"> <img scr ={logo_para_html_cafe} className="imagenLogo" /> </a>
            <a  href= "#" className="nav-clase">home</a>
            <a  href= "#" className="nav-clase">productos</a>
            <a  href= "#" className="nav-clase">nosotros</a>
            <a  href= "#" className="nav-clase">contacto</a>
        </nav>
    )
}

export default Navbar;