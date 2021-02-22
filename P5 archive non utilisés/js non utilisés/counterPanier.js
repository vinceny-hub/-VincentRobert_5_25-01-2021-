    fetch ('http://localhost:3000/api/teddies')
      .then((res) => res.json())
      .then((data) => {
      
    let OP = JSON.parse(localStorage.getItem('cartId'))
    fetch ('http://localhost:3000/api/teddies')
    .then((response) => response.json())

    .then((data) => {
    localStorage.setItem('cartId', JSON.stringify(OP));                            
    
    // console.log(OP)

    let init = []
    // else{ 
       
    let dataStr = JSON.stringify(data)
    data = JSON.parse(dataStr)

    let productNumbers = OP.length
    document.querySelector('.cart span').textContent = productNumbers
      
//       let carts = document.querySelectorAll('.addToCartBtn')

//       for (let i = 0; i < carts.length; i++){
//       carts[i].addEventListener('click', ()=> {
//       cartNumbers(carts[i]);
//       } )
//       }

//     //   function onLoadCartNumbers() {

//     //   let productNumbers = localStorage.getItem('cartNumbers')

//     //   if(productNumbers){
//     //     document.querySelector('.cart span').textContent = productNumbers
//     //   } 
//     //   }

      
//      function cartNumbers (i, index){ 
    
//       let productNumbers = localStorage.getItem('cartNumbers')

//       productNumbers = localStorage.getItem('cartId').length
//       console.log(localStorage.getItem('cartId', index).length)
//     //   if (productNumbers){
//     //     localStorage.setItem('cartNumbers' , productNumbers + 1)
//     //     document.querySelector('.cart span').textContent = productNumbers + 1
//     //   }else{
//     //     localStorage.setItem('cartNumbers', 1)
//     //     document.querySelector('.cart span').textContent = 1

//     //   }
       
//     //   onLoadCartNumbers()
      
//       cartNumbers()

      // console.log(OP.length)



      })})
