let map;
let service;

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  })

  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-33.8902, 151.1759),
    new google.maps.LatLng(-33.8474, 151.2631));
  
  var input = document.getElementById('searchTextField');
  
  var searchBox = new google.maps.places.SearchBox(input, {
    bounds: defaultBounds
  });
}