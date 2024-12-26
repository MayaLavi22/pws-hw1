//import the productsData array from data.js
import { productsData } from './data.js';
console.log(productsData);

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

shuffle(productsData.products);

productsData.products.forEach((product) => {
  const productsContainer = document.getElementById('products-container');
  const productCard = document.createElement('div');
  productCard.className = 'product-card polaroid-frame';

  productCard.innerHTML = `
      <div class="image-container" style="position: relative;">
          <img src="${'images/' + product.image_file_name}" alt="${
    product.title
  }">
          <div class="discount">save ${(
            product.price - product.discounted_price
          ).toFixed(2)}$</div>
      </div>
      <div class="product-info">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p class="price">${product.price}$</p>
          <p class="discounted-price">${product.discounted_price}$</p>
      </div>
  `;

  productsContainer.appendChild(productCard);
  productCard.addEventListener('click', () => {
    const url = 'payment.html';
    localStorage.setItem('picture', product.image_file_name);
    localStorage.setItem('price', product.price);
    localStorage.setItem('discounted_price', product.discounted_price);
    window.location.href = url;
  });
});

/*const table = document.createElement('table');
  let row;
  array.forEach((element, index) => {
    if (index % columns === 0) {
      row = document.createElement('tr');
      table.appendChild(row);
    }

    const cell = document.createElement('td');
    cell.className = 'product-card polaroid-frame';
    const imgElement = document.createElement('img');
    imgElement.src = 'images/' + element.image_file_name;

    imgElement.addEventListener('click', () => {
      const url = 'payment.html';
      localStorage.setItem('picture', element.image_file_name);
      localStorage.setItem('price', element.price);
      localStorage.setItem('discounted_price', element.discounted_price);
      window.location.href = url;
    });

    cell.appendChild(imgElement);
    const title = document.createElement('h3');
    title.textContent = element.title;
    cell.appendChild(title);
    const description = document.createElement('p');
    description.textContent = element.description;
    cell.appendChild(description);
    const price = document.createElement('p');
    price.textContent = 'Price: ' + element.price;
    cell.appendChild(price);
    const discountedPrice = document.createElement('p');
    discountedPrice.textContent =
      'Discounted Price: ' + element.discounted_price;
    cell.appendChild(discountedPrice);
    row.appendChild(cell);
  });

  container.appendChild(table);*/

/*id": 1,
      "title": "Technion University Baseball Cap",
      "description": "Show your Technion pride with our embroidered baseball cap featuring the iconic 'T' logo. Comfortable and stylish, it's perfect for any occasion.",
      "price": 24.99,
      "discounted_price": 19.99,
      "image_file_name": "baseball_cap.jpeg"*/
