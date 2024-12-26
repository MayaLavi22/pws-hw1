const image = localStorage.getItem('picture');
const before = localStorage.getItem('price');
const after = localStorage.getItem('discounted_price');
const price = document.createElement('h3');
price.textContent = 'you saved: ' + Number(before - after).toFixed(2) + '$';
const imgElement = document.createElement('img');
imgElement.src = 'images/' + image;
document.body.appendChild(imgElement);
document.body.appendChild(price);
