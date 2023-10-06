import './style.css'

import logo from "../../assets/img/homepage/logo.png"
import admIcon from "../../assets/img/adm-icon.png"
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header id='header'>
            <img className='logoHeader' src={logo} alt="" />
            <nav>
                <Link to={"/"}>Home</Link>
                <a href="#">Eventos</a>
                {/* <a href="#">Usuários</a> */}
                <a href="#">Contatos</a>
                {/* <div>
                    <Link 
                    to={"/login"}
                    style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center"
                    }}
                    >
                    Administrador
                    <img 
                    style={{
                        width: "auto",
                        height: "15px"
                    }}
                    src={admIcon}
                    alt=""
                    />
                    </Link>
                </div> */}
                <div>
                    <Link className='link' to={"/login"}>Logar</Link>
                </div>
            </nav>
        </header>
    )
}