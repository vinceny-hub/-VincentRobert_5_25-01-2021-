fetch ('http://localhost:3000/api/teddies')
.then((response) => response.json())
.then((data) => {
  
let dataStr = JSON.stringify(data)
data = JSON.parse(dataStr)
   
  function getProducts () { 
  const productsLocalStorage = localStorage.getItem(dataStr)
  if (productsLocalStorage !== null) {
  return JSON.parse(productsLocalStorage)
  }
  return []
  } 

  var search_params = new URLSearchParams(window.location.search); 

  let oursID = search_params.get('id');
  var search_params = new URLSearchParams(window.location.search);
  if(search_params.has('id')) {
  var id = search_params.getAll('id');
 
  for (var i = 0; i < 1; i++){
    let galOurs = data.find(nId => {
      return nId._id === oursID            
    })        

let carts = document.querySelectorAll('.shop-item-button')

for (let i = 0; i < carts.length; i++){

carts[i].addEventListener('click', ()=> {
cartNumbers(data[i]);
} )

 }

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers')

  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers
  } 

}

function cartNumbers (data){ 

let productNumbers = localStorage.getItem('cartNumbers')

productNumbers = parseInt(productNumbers)

if (productNumbers){
  localStorage.setItem('cartNumbers' , productNumbers + 1)
  document.querySelector('.cart span').textContent = productNumbers + 1
}else{
  localStorage.setItem('cartNumbers', 1)
  document.querySelector('.cart span').textContent = 1
}


setItems(data)
}

function setItems(data){
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)
 
  if (cartItems != null) {
      cartItems[data]
  }else{
  data.name = 1
  cartItems = {
  [data.name] : galOurs

  }
  
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems))

} }

  function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);
  let productContainer = document.querySelector('.container-ours');


  if (cartItems && productContainer) {
 
  productContainer.innerHTML = '';
  Object.values(cartItems).map(data => {
  productContainer.innerHTML += 
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
 
    
    </table>
  `
   } );
    
        
   } }
   onLoadCartNumbers()
   displayCart()
  

 
  
  
}



 }   )