let map;
let service;

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.543177, lng: 126.949864 },
    zoom: 8,
  })
}

const $input_text_search = document.querySelector('.text_search');
const $input_find_place = document.querySelector('.find_place');
$input_text_search.addEventListener('keyup', async (e) => {
  if(e.keyCode === 13) {
    const request = {
      query: e.target.value,
    }
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, (results, status) => {
      if(status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          console.log('PLACE:::', place);
        }
      }
    });
  }
})

$input_find_place.addEventListener('keyup', async (e) => {
  if(e.keyCode === 13) {
    const request = {
      query: e.target.value,
      fields: ['name', "geometry", "formatted_address"]
    }
    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
      if(status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          console.log('PLACE:::', place);
        }
      }
    });
  }
})
