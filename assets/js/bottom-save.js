
var idd = window.location.href + "";
  var __semio__params = {
    graphcommentId: "Mad-Mage-Dungeon", 
    behaviour: {
      uid: idd, 
    },
  }

  function __semio__onload() {
    __semio__gc_graphlogin(__semio__params)
  }
  (function() {
    var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
    gc.onload = __semio__onload; gc.defer = true; gc.src = 'https://integration.graphcomment.com/gc_graphlogin.js?' + Date.now();
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
  })();

