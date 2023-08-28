let map;
let service;

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  })

  const center = { lat: 50.064192, lng: -130.605469 };
  // Create a bounding box with sides ~10km away from the center point
  // const defaultBounds = {
  //   north: center.lat + 0.1,
  //   south: center.lat - 0.1,
  //   east: center.lng + 0.1,
  //   west: center.lng - 0.1,
  // };
  const input = document.getElementById("pac-input");
  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: true,
  };

  let autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.bindTo("bounds", map);

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    console.log('place', place);
  })
}