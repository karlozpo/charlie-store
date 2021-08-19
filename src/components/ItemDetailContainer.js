import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail"
export default function ItemDetailContainer() {

    return (
        <>

            <div className="text-left mt-3">
                <Link to="/productos">
                    <button className="btn-success ">
                        « volver a productos
                    </button>
                </Link>
            </div>
            <div className="row">
                <div className="col-12 col-md-8" style={{ backgroundColor: "white", marginTop: "10px" }}>
                    <ItemDetail />
                </div>
                <div className="col-12 col-md-4" style={{ backgroundColor: "white", marginTop: "10px", border: "4px solid green" }}> SIDEBAR</div>
            </div>


        </>
    )
}