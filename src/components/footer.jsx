function Footer() {
    return ( <div id="Footer" className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <h5>CONTACTO:</h5>
            <li className="nav-item"><a href="https://www.linkedin.com/in/walter-sequeira-35058024a" target="_blank" className="nav-link px-2 text-body-secondary">LinkedIn</a></li>
            <li className="nav-item"><a href="mailto:waltereseq@gmail.com?subject=Hola%20Walter&body=Hola%2C%20te%20escribo%20para%20decirte%20que%20..." className="nav-link px-2 text-body-secondary">Correo Electrónico</a></li>
            <li className="nav-item"><a href="https://wa.me/3518169205" target="_blank" className="nav-link px-2 text-body-secondary">WhatsApp</a></li>
            <li className="nav-item"><a href="https://instagram.com/wallyseq" target="_blank" className="nav-link px-2 text-body-secondary">Instagram</a></li>
            <li className="nav-item"><a href="https://github.com/walseq" target="_blank" className="nav-link px-2 text-body-secondary">GitHub</a></li>
          </ul>
          <p className="text-center text-body-secondary">Gracias por visitar mi portfolio :) </p>
        </footer>
      </div> );
}

export default Footer;