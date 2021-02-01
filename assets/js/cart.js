function displayCart() {
    let cartItems = localStorage.getItem('cartId');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let productContainer = document.querySelector('.container-ours');

 
    if (cartItems && productContainer) {
      
   
    productContainer.innerHTML = '';
    Object.values(cartItems).map(data => {
    productContainer.innerHTML  +=
      `
      <table class="table table-image">
      <thead class="thead-dark">
        <tr class="text-center">
            <th><img src=${data.imageUrl} class="img-fluid img-thumbnail w-50"></th>
            <th class="w-25">${data.name}</th>
            <th class="w-25">${data.price}</th>
            <td class="w-25"><button class="btn btn-info">view</button>
        </tr>
      </thead>
        <tbody class="container-ours">
        </tbody>
      </table>
    `
     } )
     displayCart()
      
          
     } }