/*
var baseUrl = 'http://api.amp.active.com/'
var apiKey = 'bc9t36mudawubc2ajzkzne38';
var apiKey2 = 'HVQ3QUEPTRX3FKFXDMBAEHSZ/* '
var googleCustomSearchApi = 'AIzaSyBDvkJWRxyi3U8yPxLoJClo2Zm9mPyjRUo'
var googleCustomEngine = '016068319718830097589:iw357dqkr-a'


// var url = 'http://api.amp.active.com/camping/campgrounds/?pstate=tx&api_key=bc9t36mudawubc2ajzkzne38';
*/



//API call using jquery
/*
$.ajax({

    url: 'http://api.amp.active.com/camping/campgrounds/?pstate=TX&api_key=bc9t36mudawubc2ajzkzne38',
    type: 'GET',
    crossDomain: true,
    dataType: 'xml',
    success: function(respond) {
        var x = respond
        /*var y = x.getElementsByTagName("resultset")[0]
        var z = y.getElementsByTagName('result')[0].getAttribute('faciltyPhoto')
        
        //console.log(x)
    
        
        
        
    },
    error: function() { alert('Failed!'); },
});

*/
function hndlr(response) {
    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      // in production code, item.htmlTitle should have the HTML entities escaped.
      document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
    }
  }

/*
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.googleapis.com/customsearch/v1?q=cars&cx=016068319718830097589%3Aiw357dqkr-a&imgColorType=color&num=3&searchType=image&key=AIzaSyBDvkJWRxyi3U8yPxLoJClo2Zm9mPyjRUo", false);
  xhr.send();
  console.log(xhr.status);
console.log(xhr.statusText);
*/

function campImg(campName) {
    var t= campName;
$.ajax({
    url: "https://www.googleapis.com/customsearch/v1?q="+ t + "&cx=016068319718830097589%3Aiw357dqkr-a&imgColorType=color&num=3&searchType=image&key=AIzaSyBDvkJWRxyi3U8yPxLoJClo2Zm9mPyjRUo",
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(respond) {
        var x = respond
        /*var y = x.getElementsByTagName("resultset")[0]
        var z = y.getElementsByTagName('result')[0].getAttribute('faciltyPhoto')
        */
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
campImg('car')
