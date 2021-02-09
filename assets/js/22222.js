if(localStorage.getItem('cartId') == "[]"){ 
    location.href ='index.html'
    localStorage.clear('quantityOurs')
    alert("Panier vide redirection vers la page d'accueil")
    }else{ 

    let OP = JSON.parse(localStorage.getItem('cartId'))
    fetch ('http://localhost:3000/api/teddies')
    .then((response) => response.json())

    .then((data) => {
    localStorage.setItem('cartId', JSON.stringify(OP));                            
    
    console.log(OP)
       
    let dataStr = JSON.stringify(data)
    data = JSON.parse(dataStr)

    let productContainer = document.getElementById('container-ours')
    console.log(productContainer)
    let tableData = ''
    tableData += ``
    OP.forEach(function (i,item, index, array) {
    var iPar = JSON.parse(i)
    var itemPar = JSON.parse(item)
    
    
    
    let idDecrementation = itemPar - 1000
    let idIncrementation = itemPar + 1000
    let idInput = itemPar + 10000
    let idPrice = itemPar + 100000
    
    let totOurs = document.getElementById('idPrice')
    console.log(idPrice)
    console.log(totOurs)
    // iPar.price*(idIncrementation - 1000)
    console.log(totOurs)
    tableData += 
      `
      <section>
        <div class="product">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mx-auto d-block image" src="${iPar.imageUrl}">
            </div>
            <div class="col-md-8">
              <div class="info">
                <div class="row">
                  <div class="col-md-4 product h5">
                    <div class="product-name">
                      <a href="#">${iPar.name}</a>

                        <div class="product-info">
                          <div><span class="value"></span></div>
                          <div><span class="value"></span></div>
                          <div><span class="value"></span></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 quantity">
                    <label for="quantity">Quantity :</label>
                    <div class="row ">
                      <button class="btn btn-info dec button" id="${idDecrementation}">-</button> 
                    <input id="${idInput}" type="text" class="col-md-4 form-control text-center quantity-input cart" min="0" value="0"><span></span>
                         
                    </input>
                      <button class="btn btn-info  inc button" id="${idIncrementation}">+</button> 
                    </div>
                  </div>
                  <div class="col-md-3 price">
                    <span class="h5 nombreOurs"id="${idPrice}"> ₽ ${totOurs}</span>
                  </div>
                  <div class="col-md-1 price">
                    <button class="btn btn-info removed" id="${itemPar}">Supprimer</button>
                  </div
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       `
         
     
    productContainer.innerHTML = tableData
  
    })
    
   
    OP.forEach(function (i,item, index, array) {
    var iPar = JSON.parse(i)
    var itemPar = JSON.parse(item)
    let idPrice = itemPar + 100000
    let removeButton = document.querySelectorAll(".removed")
    let minusBtn = document.querySelectorAll(".dec")
    let plusBtn = document.querySelectorAll(".inc")
   
    removeButton[item].addEventListener('click', async function(e) { 
  
    removeItem(e)
   
   
    })
     minusBtn[item].addEventListener('click', async function(e, a) { 
  
     decreaseNumber(e)
    
    }) 
    
     plusBtn[item].addEventListener('click', async function(e, a) { 
  
     increaseNumber(e)
    //  increasePrice()
     }) 

     function removeItem(e){
  
      if (e.target.classList.contains('removed')){
        if(confirm('are u sure to want to delete ?')){
        console.log(e.target)
          if(e.target.id == itemPar){
            alert('=')
            let itemParIndex = e.target.id
            const removeO = OP.splice(itemParIndex,1)
            localStorage.setItem('cartId', JSON.stringify(OP))
            console.log(OP)
            console.log(itemParIndex)
            console.log(removeO)
            location.reload()
          }else{
            alert('!=')
          }
        }
      }
    }


    function increaseNumber (e){
    if (e.target.classList.contains('inc')){
    console.log(e.target)
   
    var input = e.target.parentElement.children[1]
    // console.log(input)
    var inputValue = input.value
    // console.log(inputValue)
    var newValue = parseInt(inputValue) + 1
    // console.log(newValue)
    input.value = newValue
    

    var priceOurs =  document.getElementById('idPrice').innerText
  }
  
  
  function increasePrice () {
  var totOurs = iPar.price*newValue
  document.getElementById('idPrice').innerText = totOurs
  }
//   var totOurs = iPar.price*newValue
//   console.log(totOurs)
//   document.getElementById('idPrice').innerText = totOurs
  
   
  }
//   function increasePrice () {
//   console.log(idPrice)
//   document.getElementById('idPrice').innerHTML = idPrice 
//   document.getElementById('idPrice') 
//   console.log(totOurson)
  // document.querySelector('div.price span').innerHTML = totOurson
  // documentGetElementById('idPrice') = totOurson
//   console.log(idPrice)
 
  
//  }



    function decreaseNumber (e){
    if (e.target.classList.contains('dec')){
    console.log(e.target)
       
    var input = e.target.parentElement.children[1]
    // console.log(input)
    var inputValue = input.value
    if(inputValue <= 0){
        inputValue = 0
      }else{
    // console.log(inputValue)
    var newValue = parseInt(inputValue) - 1
    // console.log(newValue)
    input.value = newValue

      
  }
  let totOurson = iPar.price*newValue
  console.log(totOurson)
  document.querySelector('div.price span').textContent = totOurson
// document.querySelector('div.price span').textContent = totOurson
// console.log(totOurson)

   increasePrice ()
    }

    }
     
    })
  })
}

    