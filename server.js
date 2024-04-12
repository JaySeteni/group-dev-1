window.onload = async function () {
    const productsList = document.getElementById('products-list');
    
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = 
        `<div class="imageNpriceCont">
            <img src="${product.image}" alt="${product.title}">
            <p class="price">${product.price}</p>
          </div>
          <div class="titleNdescription">
            <h3 class="title">${product.title}</h3>
            <p class="description">${product.description}</p>
          </div>
        `;
        
        productsList.appendChild(productDiv);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  