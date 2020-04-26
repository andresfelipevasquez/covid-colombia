import React from 'react';
import useSwr from "swr";
import { latLang }  from '../data/coordinates';
import DeparmentTable from './DepartmentTable';
import { Map as L, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';



const fetcher = (...args) => fetch(...args).then(response => response.json());

const Map = () => {

    const url = 'https://www.datos.gov.co/resource/gt2j-8ykr.json?$select=departamento,COUNT(id_de_caso)&$group=departamento&$order=COUNT_id_de_caso DESC';
    const { data, error } = useSwr(url, {fetcher});

    if (error) return <div>failed to load</div>
      

    let geoJson = {};
    let feature = [];
    // let casosTotales = 0;
    if(data) {
      let name = '';
      geoJson = {
        type: 'FeatureCollection',
        features: data.map((departamento = {}) => {
          // casosTotales = casosTotales + Number(departamento.COUNT_id_de_caso);
          name = (departamento.departamento).toUpperCase();
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
    
    return (
      <div className="map-container">
        <DeparmentTable rows={data}></DeparmentTable>
        <L center={[4.624335, -74.063644]} zoom={5}>
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
                  // radius={50 * Math.log(city.properties.COUNT_id_de_caso / 1000)}
                  className = {"corona-app-marker"}
                >
                  <Tooltip direction="right" offset={[-8, -2]} opacity={0.5}>
                    <span className="corona-app-tooltip">
                        <h2>{city.properties.departamento}</h2>
                        <ul>
                          <li><strong>Casos:</strong> {city.properties.COUNT_id_de_caso}</li>
                        </ul>
                    </span>
                  </Tooltip>
              </CircleMarker>
            );
          })}
        </L>
      </div>
    );
}

export default Map;