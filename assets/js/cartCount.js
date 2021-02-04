      fetch ('http://localhost:3000/api/teddies')
      .then((res) => res.json())
      .then((data) => {
      
      let dataStr = JSON.stringify(data)
      data = JSON.parse(dataStr)
      
      let carts = document.querySelectorAll('.addToCartBtn')

      for (let i = 0; i < carts.length; i++){
      carts[i].addEventListener('click', ()=> {
      cartNumbers([i]);
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
      }
      onLoadCartNumbers()
      // cartNumbers()
      } )