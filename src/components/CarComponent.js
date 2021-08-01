import {Component} from 'react';

export default class CardComponent extends Component {


  //estado
  state={
    count:0
  }

  
  componentDidMount(){
    console.log("ya estoy en el DOM");
    setTimeout(() => this.setState({
      count:7
    }),
    3000
    )
// llamados de APIS externas
// Usar API del DOM  (navegador)
  }

  componentDidUpdate(){
    console.log("Me actualize");
  }


  // componentWillMount(){
// este medoto ya no se usa (esta deprecado)
// console.log("Voy a estar en el DOM");
//   }

sumar= () =>{
  this.setState({
    count:this.state.count +1
  })
}

restar= () =>{
  this.setState({
    count:this.state.count -1
  })
}

  render(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.sumar}> +</button>
        <button onClick={this.restar}> -</button>
        {this.props.nombre}
        </div>
    )
  }
}