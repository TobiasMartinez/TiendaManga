import React from "react";

const Footer = () => {
  return (
    <div className="footer-sticky">
      <div className="footer-sticky__title">
        <h2>Black Friday</h2>
        <p>Aproveche nuestros ultimos descuentos  </p>
      </div>
      <div className="footer-sticky__promo">
        <p className="footer-sticky__promo--text">
          Mangas a solo por este viernes
        </p>
        <p className="footer-sticky__promo--price">$899 c/u</p>
        <p className="footer-sticky__promo--text">
          Oferta valida hasta las 23:59
        </p>
      </div>

      <button className="footer-sticky__button">Comprar</button>
    </div>
  );
};

export default Footer;
