
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import scatterplotLayer from '@deck.gl/layers/dist/es5/scatterplot-layer/scatterplot-layer';
import mapStyles from './map-styles';

const dataJson = "./Crash_Analysis_System_(CAS)_data.json"

const scatterplot = () => new scatterplotLayer({
  id: 'scatterlayer',
  data: dataJson,
  opacity: 0.9,
  radiusMinPixels: 5,
  radiusMaxPixels: 12,
  getPosition: d => d.geometry.coordinates,
  getFillColor: d => d.properties.fatalCount > 0 ? [200, 0, 40, 150] : [255, 140, 0, 100], //Set fill colour to red if fatal, orange otherwise.
})


window.initMap = () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -36.854, lng: 174.762 }, //Center map on Auckland City.
    zoom: 14, //Default zoom to street level.
    styles: mapStyles
  });

  const overlay = new GoogleMapsOverlay({
    layers: [
      scatterplot(),
    ],
  });


  overlay.setMap(map);

}


