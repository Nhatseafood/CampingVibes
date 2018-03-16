/*
var baseUrl = 'http://api.amp.active.com/'
var apiKey = 'bc9t36mudawubc2ajzkzne38';
var apiKey2 = 'HVQ3QUEPTRX3FKFXDMBAEHSZ/* '
var googleCustomSearchApi = 'AIzaSyBDvkJWRxyi3U8yPxLoJClo2Zm9mPyjRUo'
var googleCustomEngine = '016068319718830097589:iw357dqkr-a'
var googleGeolocationAPi = 'AIzaSyCFaYviqNM0Ts59qcR5IV652b3C29xaF9g'


// var url = 'http://api.amp.active.com/camping/campgrounds/?pstate=tx&api_key=bc9t36mudawubc2ajzkzne38';
*/



//API call using jquery. Calls americareserve website by using the active access API
function Main(){
$.ajax({

    url: 'http://api.amp.active.com/camping/campgrounds/?pstate=TX&api_key=bc9t36mudawubc2ajzkzne38',
    type: 'GET',
    crossDomain: true,
    dataType: 'xml',
    success: function(respond) {
        var x = respond
        var y = x.getElementsByTagName("resultset")[0]
        var z = y.getElementsByTagName('result')[0].getAttribute('faciltyPhoto')
        
        //console.log(x)
    
        
        
        
    },
    error: function() { alert('Failed!'); },
});
}



// Image getter for the campsites using a custom google search engine
function campImg(campName) {
    var t= campName;
$.ajax({
    url: "https://www.googleapis.com/customsearch/v1?q="+ t + "&cx=016068319718830097589%3Aiw357dqkr-a&imgColorType=color&num=3&searchType=image&key=AIzaSyBDvkJWRxyi3U8yPxLoJClo2Zm9mPyjRUo",
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(respond) {
        var x = respond
         console.log(x['items'][0]['link']);
         var z = x['items'][0]['link']; 
         var a = document.getElementById('info')
         var b = document.createElement("IMG");
         b.setAttribute("src",z);
         a.appendChild(b);   
    },
    error: function(){ alert('Failed!'); },
});
}


function initMap() {
        console.log('Hello')
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
        
        });
        var geocoder = new google.maps.Geocoder;
        var infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log(pos)
            geocoder.geocode({'location': pos}, function(results, status) {
                if (status === 'OK') {
                  if (results[0]) {
                    console.log(results[9])
                    
                    
                  } else {
                    window.alert('No results found');
                  }
                } else {
                  window.alert('Geocoder failed due to: ' + status);
                }})











          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);}


