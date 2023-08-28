import { Loader } from "@googlemaps/js-api-loader"
import { LAT_LNG } from "../../config/config";

let map

const loader = new Loader({
  apiKey: "AIzaSyD9HBU5ITlJSL-4fXr7wnx4TSicAWDMiH8x",
  version: "weekly",
});

loader.load().then(async () => {  
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.543021, lng: 126.951195 },
    zoom: 16,
  });

  const marker = new Marker({
    map: map,
    position: LAT_LNG.korea.SNU,
    title: "SNU 장학빌딩",
  });
});