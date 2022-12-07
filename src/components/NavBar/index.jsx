import React from "react";
import CartWidget from "../CartWidget";
import imagen from "../../icons8-superball-96.png";

const NavBar = () => {
  return (
    <header>
      <nav className="d-flex justify-content-between align-items-center  navbar">
        <h1 className="navbar__title">
          <a href={"/"}>
            <img src={imagen} alt="logo" height={36} width={36} />
            Tienda de Mangas  
          </a>
        </h1>
        <ul className="d-flex justify-content-between align-items-center m-0 p-0 navbar__list">
          <li className="mx-4 navbar__list-item">
            <a href="#">Productos</a>
          </li>
          <li className="mx-4 navbar__list-item">
            <a href="#">Nosotros</a>
          </li>
          <li className="mx-4 navbar__list-item">
            <a href="#">Contacto</a>
          </li>
          <li className="mx-4 navbar__list-item">
            <a href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
