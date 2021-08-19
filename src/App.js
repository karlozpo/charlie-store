//import logo from './spin.svg';
//import CardComponent from './components/CarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemCardList from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import './App.css';


function App() {
  return (
    <div className="App backSite">

      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <>home</>
          </Route>
          <Route exact path="/productos">
            <>
              <div className="container">
                <div className="row">
                  <ItemCardList />
                </div>
              </div>
            </>
          </Route>
          <Route exact path="/product-detail/:id">
            <>
              <div className="container">
                
                  <ItemDetailContainer />
             
              </div>
            </>
          </Route>
          <Route exact path="/ofertas">
            <>ofertas</>
          </Route>

          <Route exact path="/contacto">
            <>contacto</>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
