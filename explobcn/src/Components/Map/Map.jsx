import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { getItinerary } from '../../services/itinerary.service';


const Map = () => {
    const position = [51.505, -0.09];
    const position2 = [54, -1];
    return (
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ minHeight: "50vh", minWidth: "50vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={position2}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
};

export default Map;
