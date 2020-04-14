import React from 'react';
import './App.css';
import { Map, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import { latLang }  from './data/latLang';
import axios from 'axios';
import useSwr from "swr";

  const fetcher = (...args) => fetch(...args).then(response => response.json());

  export default function App() {
    
    const [activePark, setActivePark] = React.useState(null);

    const url = 'https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=departamento,COUNT(id_de_caso)&$group=departamento';
    const { data, error } = useSwr(url, {fetcher});

    
    if ( error ) return;

    let geoJson = {}
    let feature = []
    if(data) {
      let name = '';
      geoJson = {
        type: 'FeatureCollection',
        features: data.map((departamento = {}) => {
          name = departamento.departamento;          
          return {
            type: 'Feature',
            properties: {
              ...departamento,
            },
            geometry: {
              type: 'Point',
              coordinates: latLang[name]
            }
          }
        })
      }
      feature = geoJson.features;
    }
    
    // http://covid19-us-api.herokuapp.com/county


    async function mapEffect() {
      let response;
      // https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=departamento,COUNT(id_de_caso)&$group=departamento
      try {
        response = await axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=departamento,COUNT(id_de_caso)&$group=departamento');
        // response = await axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json?&$limit=50000');
        
      } catch(e) {
        console.log(`Error realizando la petición: ${e.message}`, e);
        return;
      }

      const { data = [] } = response;
      const hasData = Array.isArray(data) && data.length > 0;

      if ( !hasData ) return;
      const latLang = {
        'Santa Marta D.T. y C.':	[-74.1990433, 11.2407904],
        Sucre: [-75.3977814, 9.3047199],
        'Bolívar': [-74.7546692, 9.2420197],
        Magdalena: [-75.366555, 10.1287919],
        Risaralda: [-75.6961136, 4.8133302],
        Tolima:	[-75.2322235, 4.43889], 
        Huila :	[-75.2818909, 2.9273],
        'Chocó': [-76.6583481, 5.6918802],
        'Bogotá D.C.': [-74.081749, 4.6097102],
        'Cartagena D.T. y C' :	[-75.5144424, 10.3997202],
        Cauca: [-76.6131592, 2.43823],
        Caldas: [-75.6356888, 6.0910602],
        'San Andrés': [-81.7005615, 12.5847197],
        'Quindío': [-75.6811066, 4.5338898],
        'Boyacá': [-73.3677826, 5.5352802],
        Santander: [-73.1197968, 7.1253901],
        Casanare: [-72.3958588, 5.33775],
        Meta: [-73.7579727, 3.9869499],
        Cundinamarca: [-74.2119522, 4.7163801],
        Cesar: [-73.2355804, 10.0367203],
        'Norte de Santander': [-72.507820, 7.8939099],
        'Atlántico': [-74.994167, 10.691823],
        'Buenaventura D.E.': [-77, 3.5833299],
        'Córdoba': [-75.8814316, 8.7479801],
        'Valle del Cauca': [-76.5224991, 3.4372201],
        'Nariño': [-77.2811127, 1.2136101],
        'Barranquilla D.E.': [-74.7813187, 10.9685402],
        'La Guajira': [-72.9072189, 11.5444403],
        'Antioquia': [-75.563591, 6.2518401]
    }
      const geoJson = {
        type: 'FeatureCollection',
        features: data.map((departamento = {}) => {
          let name = departamento.departamento;
          return {
            type: 'Feature',
            properties: {
              ...departamento,
            },
            geometry: {
              type: 'Point',
              coordinates: latLang[name]
            }
          }
        })
      }
    }

    return (
      <Map center={[4.624335, -74.063644]} zoom={6}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        { feature.map((city, k) => {
          return(
            <CircleMarker
                key = {k}
                center = {[city.geometry.coordinates[1], city.geometry.coordinates[0]]}
                fillOpacity = {0.5}
                stroke = {false}
                color = {"#E60000"}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={0.5}>
                  <span>
                    <span>
                      <h2>{city.properties.departamento}</h2>
                      <ul>
                        <li><strong>Departamento:</strong> {city.properties.COUNT_id_de_caso}</li>
                      </ul>
                    </span>
                  </span>
                </Tooltip>
            </CircleMarker>
          );
        })}

        {/* Arreglo en el archivo de data */}
        {/* {parkData.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0]
            ]}
            onClick={() => {
              setActivePark(park);
            }}
          />
        ))}

        {activePark && (
            <Popup
              position={[
                activePark.geometry.coordinates[1],
                activePark.geometry.coordinates[0]
              ]}
              onClose={() => {
                setActivePark(null);
              }}
            >
              <div>
                <h2>{activePark.properties.NAME}</h2>
                <p>{activePark.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          )} */}
      </Map>
      
    );
}

// export default App;
