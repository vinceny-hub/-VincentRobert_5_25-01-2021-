let carts = document.querySelectorAll('.addToCartBtn')

for (let i = 0; i < carts.length; i++){

carts[i].addEventListener('click', ()=> {
cartNumbers(galOurs[i]);
} )

}

function onLoadCartNumbers() {

let productNumbers = localStorage.getItem('cartNumbers')

if(productNumbers){
  document.querySelector('.cart span').textContent = productNumbers
} 

}

function cartNumbers (data){ 
console.log('Le nounours est : ', galOurs)
let productNumbers = localStorage.getItem('cartNumbers')

productNumbers = parseInt(productNumbers)

if (productNumbers){
  localStorage.setItem('cartNumbers' , productNumbers + 1)
  document.querySelector('.cart span').textContent = productNumbers + 1
}else{
  localStorage.setItem('cartNumbers', 1)
  document.querySelector('.cart span').textContent = 1
}



}
onLoadCartNumbers()

  