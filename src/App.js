//import logo from './spin.svg';
//import CardComponent from './components/CarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCardList from './components/ItemListContainer';

import './App.css';


function App() {
  return (
    <div className="App backSite">
      <header className="App-header">
      <NavBar />
      </header>
     <div className="container">
     <div className="row">
      <ItemCardList/>
      </div>
      </div>
    </div>
    
  );
}

export default App;
