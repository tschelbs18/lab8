function initMap() {
  // API Key
  L.mapquest.key = '3yDpnVVbmkYeAJ4u8z8SjKBKtmWAbYG0';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.878714002777485, -117.23596110428323],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  // Add a marker
  L.marker([32.88, -117.236]).addTo(map);
}
