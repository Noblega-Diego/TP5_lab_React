
import { Map, GoogleApiWrapper } from 'google-maps-react';

export function Menu(){
    return (
        
        <div>
            <h2>Somos Musical Hendrix</h2>
            <p>Una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el 
            conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            ></Map>
        </div>
    )
}