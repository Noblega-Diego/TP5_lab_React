import './envio.css'

export function TipCostoEnvio(params){
    return ((params.price === "G")?
    <p className="green"><span className="icon"><img src={"http://"+ window.location.host + "/img/truck.svg"}></img></span> Envio Gratis</p>:
    <p className="narange">Costo de envio al interior de Argentina: $<span>{params.price}</span></p>)
}