/*
var baseUrl = 'http://api.amp.active.com/'
var apiKey = 'bc9t36mudawubc2ajzkzne38';
var apiKey2 = 'HVQ3QUEPTRX3FKFXDMBAEHSZ/* '
var googleCustomSearchApi = 'AIzaSyBDvkJWRxyi3U8yPxLoJClo2Zm9mPyjRUo'
var googleCustomEngine = '016068319718830097589:iw357dqkr-a'


// var url = 'http://api.amp.active.com/camping/campgrounds/?pstate=tx&api_key=bc9t36mudawubc2ajzkzne38';
*/



//API call using jquery

$.ajax({

    url: 'http://api.amp.active.com/camping/campgrounds/?pstate=TX&api_key=bc9t36mudawubc2ajzkzne38',
    type: 'GET',
    crossDomain: true,
    dataType: 'text',
    success: function(respond) {
        var x = respond
        /*var y = x.getElementsByTagName("resultset")[0]
        var z = y.getElementsByTagName('result')[0].getAttribute('faciltyPhoto')
        */
        //console.log(x)
    
        
        
        
    },
    error: function() { alert('Failed!'); },
});


// google image search function
// script that needs to be added to html: <script src="https://www.google.com/jsapi"></script>
google.load('search', '1');
google.setOnLoadCallback(OnLoad);
var search;

    //i suggest instead of this to make keywords list so first to pick random keyword than to do search and pick random image
var keyword = 'mountains';

    function OnLoad()
    {
        search = new google.search.ImageSearch();

        search.setSearchCompleteCallback(this, searchComplete, null);

        search.execute(keyword);
    }

    function searchComplete()
    {
        if (search.results && search.results.length > 0)
        {
            //you will probably use jQuery and something like: $('body').css('background-image', "url('" + search.results[rnd]['url'] + "')");
            console.log(search.results);
        }
    }



 