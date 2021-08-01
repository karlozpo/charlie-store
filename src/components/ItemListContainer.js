import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemCardList() {
    
    return(
        <>
         
        <h3 className="mt-4">Estos son nuestros productos</h3>

        <div className="col-12 col-md-4">
        <div className="card-body">
        <img src={"https://via.placeholder.com/250x100/ffffff/000000"} className="card-img-top" alt="Item"></img>
        <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>

          <div className="col-12 col-md-4">
        <div className="card-body">
        <img src={"https://via.placeholder.com/250x100/ffffff/000000"} className="card-img-top" alt="Item"></img>
        <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>

          <div className="col-12 col-md-4">
        <div className="card-body">
        <img src={"https://via.placeholder.com/250x100/ffffff/000000"} className="card-img-top" alt="Item"></img>
        <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
        </>
    )
}
