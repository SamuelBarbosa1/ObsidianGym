import React from "react";
import "./Footer.css";
import wp from "../../assets/whatsapp-logo.jpg"

const Footer = () => {
  return (
    <>
    <div className="Footer-container" id="about">
    <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Endereço</h3>
            <a href="googlemaplink">Riacho fundo II, BRASÍLIA-DF</a>
            <a href="https://wa.me/61999544335"><img alt="whatsapp" src={wp} height="80" width="240" className="btn"/></a>
          </div>
        <div className="box">
            <h3>CONTATE-NOS </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i className="fa">
                <a href="tel:+61999544335">+61999544335 </a></i>  
                <br></br>
                <i className="fa">
                <a href="samuelbarbosa2001oliveira@gmail.com">samuelbarbosa2001oliveira@gmail.com</a></i>
            </div>
        <div className="box">
            <h3>Seguem nos</h3>
            <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                     />
                <div className="hero1">
                <h1>Me encontre</h1>
                 <div className="home__social-icon">
                 <a href="Facebook"><i className="fab fa-facebook-f"> Facebook</i></a>
                 <a href="https://www.instagram.com/samu_barbosa1/"><i className="fab fa-instagram"> Instagram</i></a>
                 <a href="https://wa.me/61999544335"><i className="fab fa-whatsapp">Whatsapp</i></a>
                 <a href="https://www.google.com/maps/">
                <i className="fab fa-google">Google Maps</i></a>
               </div>
            </div>
        </div> 
      </div>
    </section>
    <div className="credits">
        <p>© 2023  Todos os direitos reservados.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
