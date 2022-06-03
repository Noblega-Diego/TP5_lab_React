import { useEffect, useState } from "react"
import './product.css'
//import {Container, Row} from "react-bootstrap"
import {getById} from "../service/product.service"
import { TipCostoEnvio } from "./Envio";
import { Link } from "react-router-dom";


export function ProductItem(params) {
    let prod = getById(params.id);
    let [product, setProduct] = useState(prod);
    console.log(prod)
    const color = {color:'red'}
    return (
        <div className="product">
            <div className="left">
                <Link to={'/detalle/'+params.id}>
                    <img src={"http://"+ window.location.host + "/img/" + product.imagen}></img>
                </Link>
            </div>
            <div>
                <h3>{product.instrumento}</h3>
                <p className="price">${product.precio}</p>
                <TipCostoEnvio price={product.costoEnvio}></TipCostoEnvio>
                <p><span>{product.cantidadVendida}</span> Vendidos</p>
            </div>
        </div>
    )
}