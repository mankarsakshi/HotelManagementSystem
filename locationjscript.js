function initMap() {
    // Hotel's coordinates
    const hotelLocation = { lat: 40.7128, lng: -74.006 };
  
    // Initialize the map
    const map = new google.maps.Map(document.getElementById('map'), {
      center: hotelLocation,
      zoom: 14,
    });
  
    // Add a marker for the hotel
    new google.maps.Marker({
      position: hotelLocation,
      map: map,
      title: 'Hotel Paradise',
    });
  }
  
  // Load the Google Maps API script
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.async = true;
  document.head.appendChild(script);
  