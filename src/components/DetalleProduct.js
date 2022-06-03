import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../service/product.service";
import { TipCostoEnvio } from "./Envio";
import './DetalleProducto.css';

export function DetalleProduct(parms){
    const {idProduct} = useParams();
    let platoId;
    const [product, setProduct] = useState({})
    useEffect(()=>{
        if(!idProduct) return;
        platoId = parseInt(idProduct)
        setProduct(getById(platoId))
    })
    return (
        <div className="content">
            <div className="left">
                <div className="imagecontent"><img src={"http://"+ window.location.host + "/img/" + product.imagen}></img></div>
                <div className="description"><span>Descripcion:</span><p>{product.DetalleProduct}</p></div>
            </div>
            <div className="right">
                <div>
                    <p>{product.cantidadVendida} vendidos</p>
                    <h3>{product.instrumento}</h3>
                    <p>$ {product.precio}</p>
                    <p>Marca: <span>{product.marca}</span></p>
                    <p>Modelo: <span>{product.modelo}</span></p>
                    <div>
                        <p>Costo Envio:</p>
                        <TipCostoEnvio price={product.precio}></TipCostoEnvio>
                    </div>
                </div>
            </div>
        </div>
    )
}