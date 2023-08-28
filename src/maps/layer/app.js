let map;
let service;

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  })

  const { StreetViewCoverageLayer } = await google.maps.importLibrary("streetView")

  const streetViewLayer = new StreetViewCoverageLayer()
  streetViewLayer.setMap(map);
}