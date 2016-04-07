var a = document.getElementsByClassName("tagline");
// the first one is your own in the sidebar for flair
// second is post submitter
for (var i = 2; i < a.length; i++) {
	var die = false;
	var c = a[i];
	do {
		if (c) c = c.nextElementSibling;
		else { die = true; break; }
	}
	while (!die && c.className !== "flat-list buttons");

	if (die) continue;

	var n = a[i].childNodes[0];
	while (true) {
		if (n && n.nextElementSibling) { n = n.nextElementSibling; }
		else { die = true; break; }

		if (die || n.className == "RESUserTag") {
			break;
		}
	}

	if (die) continue;

	var x = a[i].childNodes[0];
	var f = undefined;
	while (true) {
		if (x && x.nextElementSibling) { x = x.nextElementSibling; }
		else { break; }

		if (x.className == "flair flair-mozilla") {
			f = x.getAttribute("title");
			break;
		}
	}

	if (!die) {
		// make sure we've not already done shit here
		if (!c.innerHTML.startsWith("<b><a href=")) {
			n = n.firstChild.getAttribute("username");
			var full = n;
			if (f != undefined) { full = full + "[" + f + "]"; }
			c.innerHTML = "<b><a href='http://www.reddit.com/u/" + n + "'>" + full + "</a></b> | " + c.innerHTML;
		}
	}
}

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
