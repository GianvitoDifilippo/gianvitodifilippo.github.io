(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"32EO":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n("hJNz"),o=n("ImH9"),l=n("GSP+"),u=n("nP85");t.default=function(e){return r.createElement(o.a,{className:"error-page"},r.createElement(u.a,{navThresholds:[0],sectionSlugs:[]}),r.createElement(a.a,{activeIndex:4}),r.createElement(l.a,null))}},ImH9:function(e,t,n){"use strict";var r=n("EQvh");t.a=r.a},X2MP:function(e,t,n){},bRzl:function(e,t,n){},hJNz:function(e,t,n){"use strict";var r=n("KQm4"),a=n("q1tI"),o=n("ymvm"),l=n("vie8"),u=['[HttpGet("{url}")]',"public async Task<IActionResult> GetContent(string url)","{",'    if (url == "easteregg") {','        return BadRequest("badrequest");',"    }","    ","    var content = await _router.GetPageAsync(url);","    if (content == null) {",'        return NotFound("notfound");',"    }","    ",'    content.Append("append");',"    return Ok(content);","}"],c={keyword:["public","async","await","string","var","null"],flowcontrol:["if","return"],type:["HttpGet","Task","IActionResult"],method:["GetContent","BadRequest","GetPageAsync","NotFound","Append","Ok"],string:[],variable:["url","content","_router"]};n("X2MP"),n("oTAn"),n("bRzl");function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(e){var t,n,s=a.useContext(o.c),m=s.locale,f=(s.setLocale,Object(r.a)(u));return["badrequest","notfound","append"].forEach((function(e){for(var t=0;t<f.length;t++)f[t]=f[t].replace(e,Object(l.b)("error:"+e,m))})),a.createElement("div",{id:"error"},a.createElement("div",{className:"container"},a.createElement("h1",null,a.createElement(l.a,{selector:"error:breakpoint"})),a.createElement("div",{className:"wrapper"},a.createElement("ul",{className:"has-shadow"},(t=f,n=e.activeIndex,a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement("li",{key:t,className:t===n?"active":""},function e(t){if(""===t)return null;for(var n in c){if("string"===n){var r=t.indexOf('"');if(-1===r)continue;var o=t.indexOf('"',r+1);if(-1===o)continue;return a.createElement(a.Fragment,null,e(t.substring(0,r)),a.createElement("span",{className:n},t.substring(r,o+1)),e(t.substring(o+1)))}for(var l,u=i(c[n]);!(l=u()).done;){var s=l.value,m=t.indexOf(s);if(-1!==m)return t=t.replace(s,""),a.createElement(a.Fragment,null,e(t.substring(0,m)),a.createElement("span",{className:n},s),e(t.substring(m)))}}return a.createElement(a.Fragment,null,t)}(e))}))))))))};t.a=m},oTAn:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-easteregg-tsx-1481f86d54bc7efc446a.js.map