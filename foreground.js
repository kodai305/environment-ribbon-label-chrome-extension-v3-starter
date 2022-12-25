// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

const newElement = document.createElement("div");
newElement.className = 'parent';

const childElement = document.createElement("span");
childElement.className = 'brook brook-after';

newElement.appendChild(childElement); 
const newContent = document.createTextNode("検証環境");
childElement.appendChild(newContent); 

newElement.style.position = 'absolute';
newElement.style.top = '0';
newElement.style.left = '0';
newElement.style.width = '250px';
newElement.style.height = '250px'
newElement.style.transform = 'rotateZ(-52deg)';
newElement.style.zIndex = '1000';
//newElement.style.overflow = 'hidden';

childElement.style.textAlign = 'center';
childElement.style.display = 'block'
childElement.style.width = '100%';
childElement.style.height = '40px';
childElement.style.lineHeight = '40px';
childElement.style.background = 'rgba(102,255,255,0.6)';
childElement.style.color = '#000000';
childElement.style.fontSize = '25px';
childElement.style.textShadow = '1 1 3px #000'

const parentElement = document.getElementById('app');
parentElement.prepend(newElement);
//document.body.prepend(newElement);

console.log("This prints to the console of the page (injected only if the page url matched)")
