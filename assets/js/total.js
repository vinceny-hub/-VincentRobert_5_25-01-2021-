

fetch ('http://localhost:3000/api/teddies')
.then((res) => res.json())
.then((data) => {
for (var i = 0; i < data.length; i++){ 
// const teddyBear = document.createElement("span");
    const getOursons = document.getElementById('oursonsList')
    getOursons.innerHTML += 
      `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <a href="produit.html?id=${data[i]._id}"><img src=${data[i].imageUrl} class="card-img-top"></a>
          <div class="card-body">
            <p class="card-title h3 font-weight-bold">
              <a href="produit.html?id=${data[i]._id}">${data[i].name}</a>
            </p>
            <span class="font-weight-bold lead">₽ ${data[i].price}</span>
            <p class="card-text font-italic font-weight-bold">${data[i].description}</p>
            <button class="btn btn-info shop-item-button">Ajouter au panier</button>
          </div>
        </div>
      </div>
      `
      
     
      }})
// ************************page description*******************************************************

fetch ('http://localhost:3000/api/teddies')
.then((response) => response.json())
.then((data) => {

var search_params = new URLSearchParams(window.location.search); 

let oursID = search_params.get('id');
var search_params = new URLSearchParams(window.location.search);
if(search_params.has('id')) {
var id = search_params.getAll('id');
 
    
for (var i = 0; i < 1; i++){
let galOurs = data.find(nId => {
return nId._id === oursID            
})

let dataStr = JSON.stringify(data)
data = JSON.parse(dataStr)
let galOursStr =JSON.stringify(galOurs)


liColors = galOurs.colors.length;
text = "<ul>";
for (i = 0; i < liColors; i++) {
text += "<li>" + galOurs.colors[i] + "</li>";
}
text += "</ul>";

const oursonUnique = document.getElementById('oursonsProduit')
oursonUnique.innerHTML = 
`
<div class="container">
    <h1 class="my-4"><small> Teddies les petits oursons : </small><br><strong font-weight-bold>${galOurs.name}</strong>
    </h1>
        <div class="row">
            <div class="col-md-8">
                <img class="img-fluid" src=${galOurs.imageUrl} alt="">
            </div>

            <div class="col-md-4">
                <h3 class="my-3">Description de l'ourson</h3>
                <p class="font-italic font-weight-bold">${galOurs.description}</p>
        
                <h4 class="my-3">${text}</h4>
                <p class="font-italic font-weight-bold"><strong>₽ ${galOurs.price}</strong></p>
                <button id="addCart" class="btn btn-info shop-item-button addToCartBtn addToCart">Ajouter au panier</button>
            </div>
    </div>
    `
   

    fetch ('http://localhost:3000/api/teddies')
    .then((response) => response.json())
    .then((data) => {
    var search_params = new URLSearchParams(window.location.search); 

    let oursID = search_params.get('id')
    var search_params = new URLSearchParams(window.location.search);
    if(search_params.has('id')) {
    var id = search_params.getAll('id')


    for (var i = 0; i <1; i++){
    let galOurs = data.find(nId => {
    return nId._id === oursID            
    })


    let dataStr = JSON.stringify(data)
    data = JSON.parse(dataStr)
    let galOursStr =JSON.stringify(galOurs)


// // *********************** counter inCart ********************************

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
//     // cartNumbers()


// // *********************** counter inCart ********************************

// // *********************** Init local storage ******************************

    if(localStorage.getItem('cartId')){ 
        console.log('Panier Ok')
    }

    else{ 
      let init = []
      localStorage.setItem('cartId', JSON.stringify(init)) 
      console.log('création du panier')
    }

// // ***********************set local storage ******************************        
    
    var OP  = JSON.parse(localStorage.getItem('cartId'))

    function addCart(){ 
          
    const addToCartButton = document.getElementById('addCart')
    
    addToCartButton.addEventListener('click', async function() { 
           
    OP.push(galOursStr)
    
    localStorage.setItem('cartId', JSON.stringify(OP))
    alert('Added to Storage')
    location.reload()
        
    } 

    ) }   

    addCart()
    } }  

    let productContainer = document.querySelector('.container-ours')
    let tableData = ''
    tableData += ``
    OP.forEach(function (i,item, index, array) {
    var iPar = JSON.parse(i)
    tableData += 
    `
    
    
    <!--  
          <div class="product">
          <div class="row">
            <div class="col-md-4">
              <img class="img-fluid mx-auto d-block image" src="${iPar.imageUrl}">
            </div>
            <div class="col-md-8">
              <div class="info">
                <div class="row">
                  <div class="col-md-5 product-name">
                    <div class="product-name">
                      <a href="#">${iPar.name}</a>

                  <div class="product-info">

                        <div>Display: <span class="value">5 inch</span></div>
                        <div>RAM: <span class="value">4GB</span></div>
                        <div>Memory: <span class="value">32GB</span></div>
                        </div>

                    </div>

                  </div>
                  <div class="col-md-3 quantity">
                    <label for="quantity">Quantity:</label>
                    <input id="quantity" type="number" value ="1" class="form-control quantity-input">
                  </div>
                  <div class="col-md-3 price">
                    <span class="h5"> ₽ ${iPar.price}</span>
                    </div>
                    <div class="col-md-3 price">
                    <button class="btn btn-info remove">Remove</button>
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
</main> -->
        
 

 <div>
      <table class="table table-image">
      <thead class="thead-dark">
        <tr class="text-center">
          <th class w-20><img src=${iPar.imageUrl} class="img-fluid img-thumbnail w-20"></th>
          <th class="w-20"><p class"h4">${iPar.name}</p></th>
          <th class="w-20"><p class"h4">${iPar.price}</p></th>
          <th class="w-20"><button class="btn btn-info">Pay</button>
          <th class="w-20"><button class="btn btn-info removed">Remove</button>
        </tr>
      </thead>
          <tbody class="container-ours">
          </tbody>
    </table>
    </div>

    
    


    `
   
    productContainer.innerHTML = tableData
    
  
    
    
//     // localStorage.clear(i)
//     // location.reload()
    

    
//     // let removeButton = document.getElementsByClassName("removed")
//     // for (let i = 0; i < removeButton.length; i++) {
//     //     const element = data[i];
//     //     document.getElementsByClassName("removed")[i].addEventListener('click', async function() { 
//     //     console.log()
//     //     alert('clicked')
//     //     Delete()
     


//     // var iPar = JSON.parse(i)
//     // function removeItemOurson(e){ 
//     //     let items =[]
//     //     JSON.parse(loh)
//     // for (let j = 0; j <iPar.length; j++) {
//     //     if(iPar[i] === i){ 
//     //         OP.splice(i,1)
//     //         return
//     //     }
//     //      }
//     //       }




//     // function Delete(pid){

//     //     let OP = JSON.parse(localStorage.getItem('cartId'))
//     //     let newCart = OP.filter((iPar) => iPar._id != pid)
//     //     localStorage.setItem('cartId', JSON.stringify(newCart))
//     //     updateOP()
//     // }









     



   
    
})})}}})
    
                