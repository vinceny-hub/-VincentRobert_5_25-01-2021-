if(localStorage.getItem('cartId')){ 
    console.log('Panier Ok')
    }

    else{ 
      let init = []
      localStorage.setItem('cartId', JSON.stringify(init)) 
      console.log('création du panier')
    }
    
    var OP  = JSON.parse(localStorage.getItem('cartId'))

    function addCart(){ 
          
    const addToCartButton = document.getElementById('addCart')
    
    addToCartButton.addEventListener('click', async function() { 
           
    OP.push(galOursStr)
    
    localStorage.setItem('cartId', JSON.stringify(OP))
    alert('Added to Storage')
    location.reload()


    
    // let productContainer = document.querySelector('.container-ours');

 
    // if (cartItems && productContainer) {
      
   
   
      
          
     } 
    // }
    
     
    // })
  

     ) }   
    addCart()
  
    
     
// **************************fin set local storage ************************************

// ******************get local storage ****************************************


// const displayToCart = document.getElementsByClassName('addToCart');
// console.log(displayToCart) 
// for (var i = 0; i < displayToCart.length; i++){

// displayToCart[i].addEventListener('click', () => (
// console.log(displayToCart),
// localStorage.getItem('cartId', galOursStr)



// // , alert('Added to Cart')


//  ) )  
// var OP  = JSON.parse(localStorage.getItem('cartId', galOursStr))
// console.log(OP)

// document.querySelector('.container-ours').innerHTML += `
// <th class w-20><img src=${OP.imageUrl} class="img-fluid img-thumbnail w-20"></th>
// `

// for (var i = 0; i < OP.length ; i++){ 
// let productContainer = document.querySelector('.container-ours')
// // productContainer.innerHTML = ''
// Object.values(OP).map(data => {
// productContainer.innerHTML 

let productContainer = document.querySelector('.container-ours')
productContainer.innerHTML = ``
// OP.forEach((data) => { 

// newDiv.appendChild(productContainer)
Object(OP).map(data => {
let newDiv = document.createElement ('div')
// OP.map(data => {

productContainer.innerHTML
=`
<div>
<table class="table table-image">
<thead class="thead-dark">
<tr class="text-center">
<th class w-20><img src=${galOurs.imageUrl} class="img-fluid img-thumbnail w-20"></th>
  <th class="w-20"><p class"h4">${galOurs.name}</p></th>
  <th class="w-20"><p class"h4">${galOurs.price}</p></th>
  <td class="w-20"><button class="btn btn-info">Pay</button>
  <td class="w-20"><button class="btn btn-info">Remove</button>
 <!-- <th class="w-10">${text}</th>-->

</tr>
</thead>
<tbody class="container-ours">
</tbody>
</table>
</div>
`
productContainer.appendChild(newDiv)
// // }  
} 

)  

//  }

// for (var i = 0; i < 1 ; i++){ 
// document.querySelector('.container-ours').innerHTML += 
// `
// <table class="table table-image">
//   <thead class="thead-dark">
//     <tr class="text-center">
//     <th class w-20><img src=${data[i].imageUrl} class="img-fluid img-thumbnail w-20"></th>
//       <th class="w-20"><p class"h4">${OP.name}</p></th>
//       <th class="w-20"><p class"h4">${OP.price}</p></th>
//       <td class="w-20"><button class="btn btn-info">Pay</button>
//       <td class="w-20"><button class="btn btn-info">Remove</button>
//      <!-- <th class="w-10">${text}</th>-->

//     </tr>
//   </thead>
//   <tbody class="container-ours">
//   </tbody>
// </table>
// `

// }



