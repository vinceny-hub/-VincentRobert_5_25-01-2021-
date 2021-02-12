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
    
    // console.log(OP)
       
    let dataStr = JSON.stringify(data)
    data = JSON.parse(dataStr)

    let productContainer = document.querySelector('.container-ours')
    let tableData = ''
    tableData += ``
    OP.forEach(function (i,item, index, array) {
    var iPar = JSON.parse(i)
    var itemPar = JSON.parse(item)
    
    
    
    let idDecrementation = itemPar - 1000
    let idIncrementation = itemPar + 1000
    let idInput = itemPar + 10000
    let idPrice = itemPar + 100000
    var totOurson = iPar.price
    
    
    
    
  
    
// let nombreOurs = document.querySelector('.quantity-input').value
// plus.addEventListener('click', (e)=> { 
    


// })

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
                    <input id="${idInput}" type="text" class="col-md-4 form-control text-center quantity-input cart" min="0" value="1"><span></span>
                         
                    </input>
                      <button class="btn btn-info  inc button" id="${idIncrementation}">+</button> 
                    
                      <span class="col-md-3 price" type="text" id="${idPrice}" value="1"> ${iPar.price} </span>
                    
                    </div>
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
         
     var tot = document.getElementById("idPrice")
    //  console.log(tot)
    productContainer.innerHTML = tableData
  
    })

    
    
    
   
    OP.forEach(function (i,item, index, array) {
    var iPar = JSON.parse(i)
    var itemPar = JSON.parse(item)
    // console.log(iPar._id)
    idStr = JSON.stringify(iPar._id)
    
    localStorage.setItem('prix', JSON.stringify(OP))
    
    // let idPrice = itemPar + 100000
    let removeButton = document.querySelectorAll(".removed")
    let minusBtn = document.querySelectorAll(".dec")
    let plusBtn = document.querySelectorAll(".inc")
    let totOurson = iPar.price
    
   
    removeButton[item].addEventListener('click', async function(e) { 
  
    removeItem(e)
   
   
    })
     minusBtn[item].addEventListener('click', async function(e) { 
  
     decreaseNumber(e)
    //  decreasePrice(a)
    }) 
    
     plusBtn[item].addEventListener('click', async function(e) { 
  
     increaseNumber(e)
    //  increasePrice(e)
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

  
  // var decrementationButton = document.getElementsByClassName('dec')
  // console.log(decrementationButton)
  // for (var i = 0; i < decrementationButton.length; i++) {
  // var button = decrementationButton[i]
  // // console.log(button)
  // button.addEventListener('click', function(event) {
  // var buttonClicked = event.target 
  // // console.log(buttonClicked)
  // var input = buttonClicked.parentElement.children[1]
  // // console.log(input)
  // var inputValue = input.value
  // // console.log(inputValue)
  // var newValue = parseInt(inputValue) - 1
  // // console.log(newValue)
  // input.value = newValue

  // })
  //     }

      // var incrementationButton = document.getElementsByClassName('inc')
      // for (var i = 0; i < incrementationButton.length; i++) {
      // var button = incrementationButton[i]
      // // console.log(button)
      // button.addEventListener('click', function(event) {
      // var buttonClicked = event.target 
      // // console.log(buttonClicked)
      // var input = buttonClicked.parentElement.children[1]
      // // console.log(input)
      // var inputValue = input.value
      // // console.log(inputValue)
      // var newValue = parseInt(inputValue) + 1
      // // console.log(newValue)
      // input.value = newValue
    
      // })
      //     }

//   // function getValue() {
    
//     function decreaseNumber (e){
//       if (e.target.classList.contains('minusBtn')){
//         console.log(e.target)
//         console.log(itemPar)
//         // if(e.target.price == iPar.price){
//     var itemVal = document.querySelector('.quantity-input').value
//     console.log(itemVal)
//     // if(itemVal <= 0){
//     //   itemVal = 0
//     // }else{
//     itemVal.value = parseInt(itemVal.value) - 1  
//     console.log(itemVal.value)
//     // }
//   }
// }

    function increaseNumber (e){
    if (e.target.classList.contains('inc')){
    // console.log(e.target)

    var input = e.target.parentElement.children[1]
    // console.log(input)
    var inputValue = input.value
    // console.log(inputValue)
    var newValue = parseInt(inputValue) + 1
    // console.log(newValue)
    input.value = newValue
  


      // function increasePrice (e){
      // if (e.target.classList.contains('inc')){
      
     
      var input1 = e.target.parentElement.children[4]
      // console.log(input1)
      var input1Value = input1.textContent
      // console.log(input1Value)
      // console.log(input1.textContent)
      var newTotOurson = totOurson*newValue
      // console.log(newTotOurson)
      input1.textContent = newTotOurson
      iPar.price =  totOurson*newValue 
      console.log(OP)

      let prix = JSON.parse(localStorage.getItem('prix', OP))
      // OP.forEach(function (i,item, index, array) {
      //   var iPrixPar = JSON.parse(i)
      //   var itemPrixPar = JSON.parse(item)
         
      localStorage.setItem('prix', JSON.stringify(iPar))

      var arr = Object.keys(prix)
      console.log(arr)
      arrPrix = arr.map(function (key) {
        return{[key] : prix[key]}
      })
      // OP.push(prix[itemPar])
      // OP.push(newOP)
      console.log(arrPrix)
      console.log(OP[itemPar])
      console.log(iPar._id)
      // console.log(iParStr)
      
      // console.log([itemPrixPar])
    
      // let newOP = JSON.parse(localStorage.getItem('prix', OP))
      // localStorage.setItem('prix', JSON.stringify(iPar.price))
     
    // })
     


      
      // var newValue = parseInt(inputValue) + 1
      // console.log(newValue)
      // input.value = newValue
  
    // let totOurson = iPar.price*newValue
    // console.log(totOurson)
    // document.querySelector('div.price span').innerHTML.documentGetElementById('idPrice') = totOurson
  // } 
  // }
}
  // console.log(idPrice)
 
  
 }



    function decreaseNumber (e){
    if (e.target.classList.contains('dec')){
    console.log(e.target)
       
    var input = e.target.parentElement.children[1]
    // console.log(input)
    var inputValue = input.value
    if(inputValue <= 1){
        inputValue = 1
      }else{
    // console.log(inputValue)
    var newValue = parseInt(inputValue) - 1
    // console.log(newValue)
    input.value = newValue

    var input1 = e.target.parentElement.children[4]
    console.log(input1)
    var input1Value = input1.textContent
    console.log(input1Value)
    var newTotOurson = totOurson*newValue
    console.log(newTotOurson)
    input1.textContent = newTotOurson
    iPar.price =  totOurson*newValue 
    let newOP = JSON.parse(localStorage.getItem('prix', OP))
    localStorage.setItem('prix', JSON.stringify(iPar.price))

     

      // pushPrice()
        
      
    

      
  }
//   let totOurson = iPar.price*newValue
//   console.log(totOurson)
//   document.querySelector('div.price span').textContent = totOurson
// // document.querySelector('div.price span').textContent = totOurson
// // console.log(totOurson)
    }

    }
// ************atention
 
    })

/////$$$$$$$$$$$$$$$$$$$$$
    // if(e.target.price == iPar.price){
// var itemVal = document.querySelector('.quantity-input').value
// console.log(itemVal)

// if(itemVal <= 0){
//   itemVal = 0
// }else{
// itemVal.value = parseInt(intemVal.value) + 1  

// }




//   let step = document.querySelector('.quantity-input').value
//   let plus =  document.querySelector('.plusBtn')
//   console.log(plus)
//   plus.addEventListener('click', (e)=> {
//   // location.onload()
//   console.log(e)
//   console.log(step*iPar.price)
// // var tot = iPar.price*document.getElementsById('quantity').value
//   })


// var val = document.getElementById('quantity').value

//  }




// let counter = iPar.price
// let tot = iPar.price*document.querySelector('.div.quantity-input .span')
// console.log(counter)
// console.log(val)

// plus.addEventListener('click', (e)=> {
// console.log(e)
//   // cartNumbers()

// })



// function onLoadCartNumbers() {

// let plusOurs = localStorage.getItem('plusOurs')

// if(plusOurs){
//   document.querySelector('.cart span').textContent = plusOurs

// }}

// function cartNumbers (){ 
// console.log('Le nom du nounours est :  ', iPar.name)
// let plusOurs = localStorage.getItem('cartNumbers')

// plusOurs = parseInt(plusOurs)

// if (plusOurs){
//   localStorage.setItem('plusOurs' , plusOurs + 1)
//   document.querySelector('.cart span').textContent = plusOurs + 1
// }else{
//   localStorage.setItem('plusOurs', 1)
//   document.querySelector('.cart span').textContent = 1

// }}

// onLoadCartNumbers()
     
  

//***********************************   formulaire ************************************************

var ids = JSON.parse(localStorage.getItem('ids'))

function product(_id) {
this._id = _id
}
for( i=0; i<OP.length; i++){
let products = [{_id : ids}]



const validationCommande = {
  contact: {
  firstName:"" ,
  lastName:"",
  address:"",
  city:"",
  email:""
}, 
products: [{
   _id: ids[i],
   
   
}]
}
// mettre à 1 ou -1 pour pouvoir avoir le id dans l'index 0
for( j=0; j<OP.length; j++){
  
validationCommande.products.push(new product(ids[j]))
 
 







const myForm = document.getElementById('myForm')
const checkout = document.getElementById('checkout')
myForm.addEventListener('submit', async function(e) { 
// console.log(checkout)

const firstName = document.getElementById('fname').value
const lastName = document.getElementById('lname').value
const address = document.getElementById('address').value
const city = document.getElementById('city').value
const email = document.getElementById('email').value



validationCommande.contact.firstName = firstName
validationCommande.contact.lastName = lastName
validationCommande.contact.address = address
validationCommande.contact.city = city
validationCommande.contact.email = email

// console.log(validationCommande.contact)



var formulaire  = JSON.parse(localStorage.getItem('formulaire'))
// init.push(formulaire)
localStorage.setItem('formulaire', JSON.stringify(validationCommande))
formulaireStr = JSON.stringify(formulaire)
})
// ***************************************************************************

var formulaire  = JSON.parse(localStorage.getItem('formulaire'))
// init.push(formulaire)
localStorage.setItem('formulaire', JSON.stringify(validationCommande))
formulaireStr = JSON.stringify(formulaire)
 }} 
fetch('http://localhost:3000/api/teddies/order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'Access-Control-Allow-Methods'
  },
  body: formulaireStr

})
.then(function(response){
    return response.json()
})
   
.then(function(data){
 console.log('post request',data)

})





})}