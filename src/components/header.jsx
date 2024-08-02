function Header() {
    return ( <div className="container" id="header">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="Carta" id="Carta" className="nav-link active" aria-current="page">Carta de presentación</a></li>
            <li className="nav-item"><a href="Datos" id="Datos" className="nav-link">Datos personales</a></li>
            <li className="nav-item"><a href="Estudios" id="Estudios" className="nav-link">Formación y estudios</a></li>
            <li className="nav-item"><a href="Experiencia" id="Experiencia" className="nav-link">Experiencia laboral</a></li>
            <li className="nav-item"><a href="Contacto" id="Contacto" className="nav-link">Contacto</a></li>
          </ul>
        </header>
      </div> );
}

export default Header;

