var xhr = new XMLHttpRequest(),
	stylesheet = 'min/stable.min.css';

if (/Chrome\/(\d\d)/.exec(navigator.userAgent)[1] > 43) {
	stylesheet = 'min/canary.min.css';
}

xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
