const validationCommande = {
  contact: {}, 
  products: []
}
// push données à l'intérieur






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

  let init = []
  // else{ 
     
  let dataStr = JSON.stringify(data)
  data = JSON.parse(dataStr)

  let productContainer = document.querySelector('.container-ours')
  let tableData = ''
  tableData += ``
  OP.forEach(function (i,item, index, array) {
  var iPar = JSON.parse(i)
  var itemPar = JSON.parse(item)

  tableData += 
  `
  
  
  
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
                <div class="row "><button class="btn btn-info" id="minus">-</button> 
                <!--<input id="quantity" type="number" value ="2" class="col-md-4 form-control quantity-input">-->
                <div  id="quantity" type="number" class="col-md-4 form-control text-center quantity-input cart"><span> 0 </span></div>
                <button class="btn btn-info" id="plus">+</button> 
                 
              
                 
                </div>
              </div>
              
                <div class="col-md-3 price">
                  <span class="h5 nombreOurs"> ₽ ${iPar.price}</span>
                  </div>
                  <div class="col-md-1 price">
                  <button class="btn btn-info removed" id="${itemPar}">Supprimer</button>
                  </div
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div> 
  </div>
</div>
</section>
</main> 
      

<!--
<div>
    <table class="table table-image">
    <thead class="thead-dark">
      <tr class="text-center">
        <th class w-20><img src=${iPar.imageUrl} class="img-fluid img-thumbnail w-20"></th>
        <th class="w-20"><p class"h4">${iPar.name}</p></th>
        <th class="w-20"><p class"h4">${iPar.price}</p></th>
        <th class="w-20"><button class="btn btn-info">Pay</button>
        <th class="w-20"><button class="btn btn-info removed" id="${itemPar}">Remove ${itemPar}</button>
      </tr>
    </thead>
        <tbody class="container-ours">
        </tbody>
  </table>
  </div>
  -->
  
  


  `
  
  productContainer.innerHTML = tableData


  
  
  // localStorage.clear(i)
  // location.reload()
  

  })
  //  function deleteItemFromLocalStorage(id){
  //   let items = JSON.parse(localStorage.getItem('cartId'))
  //   items.forEach(function(item, index){ 
  //   if(id === item.id){
  //     items.splice(index,1)
  //   }
  //     }
  //   )
  // localStorage.setItem('cartId', JSON.stringify(items))
  // }
  // OP.forEach(function (i,item, index, array) {
  // var iPar = JSON.parse(i)
  // let removeButton = document.querySelectorAll(".removed")
  // for (let j = 0; j < removeButton.lenght; j++) {
  
 
  // // removeButton.getElementsById('${iPar._id}').onclick = function() {functionDelete()}
  // // function functionDelete(){
  // removeButton[j].addEventListener('click', async function(e) { 
  // console.log(e.target)
 
    
  
  //  } 
    
  // )
  
 
  
 

   


   OP.forEach(function (i,item, index, array) {
   var iPar = JSON.parse(i)
   var itemPar = JSON.parse(item)
  let removeButton = document.querySelectorAll(".removed")
  // for (let j = 0; j < removeButton.length; j++) {
  removeButton[item].addEventListener('click', async function(e) { 
  // console.log(e.target)
  removeItem(e)
  // deleteItemFromLocalStorage()
  // console.log(iPar._id)
  // alert('clicked',  )
      // localStorage.clear(i)
    //  location.reload()
      // Delete()
  })
   

   function removeItem(e){
    //  console.log(iPar)
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
        // localStorage.removeItem('cartId', itemParIndex))
        }else{
          alert('!=')
        }
        
      
  
     }
        // )}
  }
}
  if(localStorage.getItem('quantityOurs')){ 
  console.log('ours dans panier')
}

  else{ 
  let initQuantityOurs = []
  localStorage.setItem('quantityOurs', JSON.stringify(initQuantityOurs)) 
  console.log('panier ours')
}

  //  function saveQuantityOurs(){ 
   let quantityOurs = document.querySelector('div.quantity input[value]').value
   console.log(quantityOurs.value)
   let quantityAlreadySet = JSON.parse(localStorage.getItem('quantityOurs'))
   quantityAlreadySet.push(quantityOurs)
   localStorage.setItem('quantityOurs', JSON.stringify(quantityAlreadySet))

  //  quantityOurs.addEventListener('input', updateValue) = localStorage.setItem('quantityOurs')
  //  console.log(quantityOurs.value)
  
  //  let totOurs = document.getElementsByClassName('quantity-input')
  //  console.log(totOurs)
    //  quantityOurs.addEventListener('input', updateValue)
  
  //  function updateValue(e) {
  //  totOurs.textContent = e.target.value;
   
   
  //  saveQuantityOurs()
  
  
  function incrementTotal() {
 
  let nombreArticle = document.querySelector("div.quantity input").value
  console.log (nombreArticle)
   let totalRow =(nombreArticle * iPar.price)

  console.log(totalRow)
}
incrementTotal()
  // <div class="col-md-3 quantity">
  //                 <label for="quantity">Quantity:</label>
  //                 <input id="quantity" type="number" value ="1" class="form-control quantity-input">
  //               </div>

  //   function removeLocalStorage(e){ 
  //   let OP = JSON.parse(localStorage.getItem('cartId')) || []
  //   OP.splice(i,1)
  //   localStorage.setItem('cartId', JSON.stringify(OP))
  //   }
   
 
  
 

  // var iPar = JSON.parse(i)
  // function removeItemOurson(e){ 
  //     let items =[]
  //     JSON.parse(loh)
  // for (let j = 0; j <iPar.length; j++) {
  //     if(iPar[i] === i){ 
  //         OP.splice(i,1)
  //         return
  //     }
  //      }
  //       }

  //     function Delete(pid){

  //     let OP = JSON.parse(localStorage.getItem('cartId'))
  //     let newCart = OP.filter((iPar) => iPar._id != pid)
  //     localStorage.setItem('cartId', JSON.stringify(newCart))
  //     updateOP()
  // }
//         let cartId = []
//         var iPar = JSON.parse(i)
//         JSON.parse(localStorage.getItem('cartId')).map(data=>{
//             console.log()
//             if(data.index != iPar.index)[0]
//             cartId.push(data)
//         })
  
//     localStorage.setItem('cartId', JSON.stringify(cartId))
//     location.reload()
// }
      



  // console.log()
  // localStorage.clear(i)
  // location.reload()
  // let removeButton = document.getElementsByClassName("removed")
  // removeButton.addEventListener('click', async function(e) { 
  // console.log(e)

  // })
  
//     let removeButton = document.getElementsByClassName("removed")
//     removeButton.addEventListener('click', async function ReM(alert('clicked'))

//  })
  
  
  // removeButton.addEventListener('click', async function() { 
  //     console.log()
      // localStorage.clear(i)
      // location.reload()
  
 
 
  
  // })
//  })  
  //  )}
  //  } )  }
   
  })})
}

// *********************** Init local storage ******************************

// if(localStorage.getItem('cartId') == null){ 
// location.href ='index.html'
// // let init = []
// // localStorage.setItem('cartId', JSON.stringify(init)) 
// // console.log('création du panier')
// }

// *********************** Init local storage ******************************
  