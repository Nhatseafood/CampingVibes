<html>
  <head>
    <title>JSON/Atom Custom Search API Example</title>
  </head>
  <body>
    <div id="content"></div>
    <script>
      function hndlr(response) {
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
      }
    }
    </script>
    <script src="https://www.googleapis.com/customsearch/v1?key= <span class="apiparam">"YOUR-KEY"</span>&amp;cx=017576662512468239146:omuauf_lfve&amp;q=cars&amp;callback=hndlr">
    </script>
  </body>
</html>