var div = document.createElement("div");
var imgPath = chrome.extension.getURL('img/mohawk.jpg');
div.innerHTML = `
<div id="clippy"></div>
    <img id="clippyImg" src=${imgPath} />
`;
document.body.appendChild(div);