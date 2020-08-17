import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFudmVlcnNoYWgiLCJhIjoiY2s5c3drZ3VkMTlvdjNncXFqazBoeGI0dyJ9.hLCeXoHPe_jaCGrOKRk5Vw";
var map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v11",
});

// const elMarker = document.createElement("div");
// elMarker.style.height = "39px";
// elMarker.style.width = "32px";
// elMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(elMarker).setLngLat([-87.641, 41.895]).addTo(map);

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
markerDomEl.style.backgroundColor = grey;

new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map); // [-87.641, 41.895] for Chicago
