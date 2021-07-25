import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";


import './NavBar.css';

function NavBar() {
    return (     
        <div className="bg-dollar"> 
        <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href={'https://es.reactjs.org/'} target={'blank'} >La Bodeguita</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link btn btn-light mx-1" href={'https://es.reactjs.org/'} target={'blank'}>Home</a>
      <a className="nav-item nav-link btn btn-light mx-1" href={'https://es.reactjs.org/'} target={'blank'}>Productos</a>
      <a className="nav-item nav-link btn btn-light mx-1" href={'https://es.reactjs.org/'} target={'blank'}>Precios</a>
      <a className="nav-item nav-link btn btn-light mx-1" href={'https://es.reactjs.org/'} target={'blank'}>Contacto</a>
    </div>
  </div>

  
</nav>
  </div>

        </div>
        )
    
} 

export default NavBar;