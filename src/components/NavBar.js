import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import CardWidget from './CardWidget';

import './NavBar.css';
import { Link } from 'react-router-dom';



function NavBar() {
  return (

    
    <div className="bg-dollar">
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light">
         
          <a className="navbar-brand" href={'https://es.reactjs.org/'} target={'blank'} >

            La Bodeguita</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link btn btn-light mx-1" to="/" >Home</Link>
              <Link className="nav-item nav-link btn btn-light mx-1" to="/productos" >Productos</Link>
              <Link className="nav-item nav-link btn btn-light mx-1" to="/ofertas" >Ofertas</Link>
              <Link className="nav-item nav-link btn btn-light mx-1" to="/contacto">Contacto</Link>
            </div>
          </div>

          <CardWidget />
        </nav>
      </div>
    </div>




  )

}


export default NavBar;