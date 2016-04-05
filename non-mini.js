function doon(x,f) {
    var b = document.getElementsByClassName(x);
    for (var i = 0; i < b.length; i++) {
        f(b[i]);
    }
}
function hide(x){x.style["display"]="none";}
function el(x){return document.getElementById(x);}
var a = ["side", "thumbnail", "midcol", "rank", "tagline", "footer-parent", "panestack-title", "menuarea", "cloneable"];
for (var i = 0; i < a.length; i++) doon(a[i], function(x){x.style["display"]="none";});
doon("md", function(x){x.style.maxWidth="100%";});
hide(el("header-img"));
hide(el("sr-header-area"));
hide(el("header-bottom-right"));
