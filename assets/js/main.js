function _0x148e(){const _0x408049=['none','529734tgKRMV','1566746GvCJhk','2583PLpCWW','162914IuiedA','style','55DbVOMm','10392WbGDLB','display','2438529tnIZAv','4002836XaPkYd','2108520SaqjOc'];_0x148e=function(){return _0x408049;};return _0x148e();}(function(_0x283cf5,_0x135810){const _0xd23dcf=_0x132b,_0x210633=_0x283cf5();while(!![]){try{const _0x3bac3c=-parseInt(_0xd23dcf(0xdc))/0x1+-parseInt(_0xd23dcf(0xe6))/0x2+parseInt(_0xd23dcf(0xe1))/0x3+parseInt(_0xd23dcf(0xe2))/0x4+-parseInt(_0xd23dcf(0xde))/0x5*(parseInt(_0xd23dcf(0xe5))/0x6)+-parseInt(_0xd23dcf(0xe7))/0x7*(-parseInt(_0xd23dcf(0xdf))/0x8)+parseInt(_0xd23dcf(0xe3))/0x9;if(_0x3bac3c===_0x135810)break;else _0x210633['push'](_0x210633['shift']());}catch(_0x52a98f){_0x210633['push'](_0x210633['shift']());}}}(_0x148e,0x94da1));function _0x132b(_0x1c9108,_0x308d6f){const _0x148eb3=_0x148e();return _0x132b=function(_0x132b7a,_0x5f0a90){_0x132b7a=_0x132b7a-0xdc;let _0x50a2de=_0x148eb3[_0x132b7a];return _0x50a2de;},_0x132b(_0x1c9108,_0x308d6f);}function toggleE(_0x87dde){const _0x46baa2=_0x132b,_0x244175=document['getElementById'](_0x87dde);_0x244175[_0x46baa2(0xdd)][_0x46baa2(0xe0)]===_0x46baa2(0xe4)?_0x244175['style'][_0x46baa2(0xe0)]='block':_0x244175['style']['display']=_0x46baa2(0xe4);}

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


var idx = lunr(function () {
    this.field('title')
    this.field('content')
    this.ref('url')

    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(function (doc) {
          this.add(doc)
        }, this)
      })
  })

  document.getElementById('search-input').addEventListener('input', function () {
    var query = this.value
    var results = idx.search(query)
    var resultList = document.getElementById('results')

    resultList.innerHTML = ''

    if (results.length > 0) {
      results.forEach(function (result) {
        var li = document.createElement('li')
        li.innerHTML = '<a href="' + result.ref + '">' + result.ref + '</a>'
        resultList.appendChild(li)
      })
    } else {
      resultList.innerHTML = '<li>No results found</li>'
    }
  })
