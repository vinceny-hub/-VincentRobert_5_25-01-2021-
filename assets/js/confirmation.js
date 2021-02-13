// //***********************************   formulaire ************************************************
// function postContact(){}
// var ids = JSON.parse(localStorage.getItem('ids'))

// function product(_id) {
// this._id = _id
// }
// for( i=0; i<ids.length; i++){
// let products = [{_id : ids[i]}]
// }


// const validationCommande = {
//   contact: {
//   "firstName":"" ,
//   "lastName":"",
//   "address":"",
//   "city":"",
//   "email":""
// }, 
// products: [{
//      "_id" : ids[0],
   
   
// }]
// }
// // mettre à 1 ou -1 pour pouvoir avoir le id dans l'index 0
// for( j=1; j<ids.length; j++){
//   console.log(ids.length)
  
// validationCommande.products.push(new product(ids[j]))
 
 







// const myForm = document.getElementById('myForm')
// const checkout = document.getElementById('checkout')
// myForm.addEventListener('submit', async function(e) { 


// const firstName = document.getElementById('fname').value
// const lastName = document.getElementById('lname').value
// const address = document.getElementById('address').value
// const city = document.getElementById('city').value
// const email = document.getElementById('email').value



// validationCommande.contact.firstName = firstName
// validationCommande.contact.lastName = lastName
// validationCommande.contact.address = address
// validationCommande.contact.city = city
// validationCommande.contact.email = email




// var formulaire  = JSON.parse(localStorage.getItem('formulaire'))

// localStorage.setItem('formulaire', JSON.stringify(validationCommande))
// formulaireStr = JSON.stringify(formulaire)
// })
// // ***************************************************************************

// var formulaire  = JSON.parse(localStorage.getItem('formulaire'))

// localStorage.setItem('formulaire', JSON.stringify(validationCommande))
// formulaireStr = JSON.stringify(formulaire)
//  }
// fetch('http://localhost:3000/api/teddies/order', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization' : 'Access-Control-Allow-Methods'
//   },
//   body: formulaireStr

// })
// .then(function(response){
//     return response.json()
// })
   
// .then(function(data){
//  console.log('post request',data)

// })

// *******************************************************************************************



// })}
// *******************************************************************************************

// //***********************************   formulaire ************************************************
function postContact(){}
var ids = JSON.parse(localStorage.getItem('ids'))

function product(_id) {
this._id = _id
}
for( i=0; i<ids.length; i++){
let products = [{_id : ids[i]}]
}


const validationCommande = {
  contact: {
  "firstName":"" ,
  "lastName":"",
  "address":"",
  "city":"",
  "email":""
}, 
products: [{
     "_id" : ids[0],
   
   
}]
}

// mettre à 1 ou -1 pour pouvoir avoir le id dans l'index 0
for( j=1; j<ids.length; j++){
  console.log(ids.length)
  
validationCommande.products.push(new product(ids[j]))
 
 







const myForm = document.getElementById('myForm')
const checkout = document.getElementById('checkout')
myForm.addEventListener('submit', async function(e) { 


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




var formulaire  = JSON.parse(localStorage.getItem('formulaire'))

localStorage.setItem('formulaire', JSON.stringify(validationCommande))
formulaireStr = JSON.stringify(formulaire)

})
formulaireFetch()
// ***************************************************************************
function formulaireFetch() {
    

var formulaire  = JSON.parse(localStorage.getItem('formulaire'))

localStorage.setItem('formulaire', JSON.stringify(validationCommande))
formulaireStr = JSON.stringify(formulaire)
 
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
 let dataStr = JSON.stringify(data)

saveIdOrderInformation()

function saveIdOrderInformation() {
    let initIdOrderInformation = []
    localStorage.setItem('orderIdInformation', JSON.stringify(initIdOrderInformation)) 
    let orderIdInformation = JSON.parse(localStorage.getItem('orderIdInformation'))
    orderIdInformation.push(dataStr)
    localStorage.setItem('orderIdInformation', JSON.stringify(orderIdInformation))
    
}

})
}}

