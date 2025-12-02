import { Link } from "react-router-dom";
import { useRef } from "react";
import musicaHarryPotter from "../assets/som/musicaHarry.mp3"
import logo from "../assets/imgs_02/harryPotterLogo.png";

export default function NavBar() {
    //O useRef guarda a instância do aúdio sem causar re-render ao tocar
    const audioRef = useRef(new Audio(musicaHarryPotter));

    //Função que ativa o som e define o loop
    function tocarMusica() {
        //Defino um loop para poder repitir a música
        audioRef.current.loop = true;
        audioRef.current.play();
    };

    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
            <div className="container-fluid">
                {/* Logo do topo da página com link para a página Home */}
                <Link to="/" className="navbar-brand position-absolute top-50 start-50 mt-4 translate-middle">
                    <img 
                        src={logo}
                        className="logo" 
                        alt="Harry Potter Logo" 
                        width="180" 
                    />
                </Link>
                
                {/* Botão hamburger para poder colapsar em mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Links de navegação */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {/* Link do react-router para evitar reload da página */}
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quiz">Quiz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/potions">Potions</Link>
                        </li>
                        <li className="nav-item mt-2 mt-lg-0">
                            {/* Botão que vai iniciar o som ao ser clicado */}
                            <button onClick={tocarMusica} className="btn btn-outline-light btn-sm mt-1">Música</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}