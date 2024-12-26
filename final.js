const image = localStorage.getItem('picture');
const savings = localStorage.getItem('savings');
const price = document.createElement('h3');
price.textContent = 'you saved: ' + Number(savings).toFixed(2) + '$';
const imgElement = document.createElement('img');
imgElement.src = 'images/' + image;
document.body.appendChild(imgElement);
document.body.appendChild(price);
