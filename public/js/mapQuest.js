function initMap() {
	// add your code here
  L.mapquest.key = '5MAnruSZneH1xYez6AOit1Q6mhQ9hJcu';

// 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.87862840481292, -117.23517789881141],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  // Add marker to map
  L.marker([32.88, -117.236]).addTo(map);
}
