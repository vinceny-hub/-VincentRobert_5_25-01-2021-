/*1ere étape se connecter a l'api*/
/* Pour savoir si je suis connecter, faire un console.log pour afficher les produits dans la console*/
/*Générer le DOM pour afficher les produits */
     

// function Teddies (pic,name,price){
//     this.pic = pic,
//     this.name = name,
//     this.price = price
// }



// const teddy1 = new Teddies ('http://localhost:3000/images/teddy_1.jpg', 'Norbert', 10);
// const teddy2 = new Teddies ('http://localhost:3000/images/teddy_2.jpg', 'Jean', 20);
// const teddy3 = new Teddies ('http://localhost:3000/images/teddy_3.jpg', 'Philippe', 30);
// const teddy4 = new Teddies ('http://localhost:3000/images/teddy_4.jpg', 'Victor', 40);
// const teddy5 = new Teddies ('http://localhost:3000/images/teddy_5.jpg', 'Joao', 50);



// let teddies = [];


// // document.getElementById('productList').appendChild(demo);
// teddies.push(teddy1,teddy2,teddy3,teddy4,teddy5);




// function populateTableList(){
//     let listOfProducts = '';
//     teddies.forEach(prod =>
//         listOfProducts += `
//         <tr class="text-center">
//             <td><img src=${prod.pic} class="img-fluid img-thumbnail w-50"></td>
//             <td class="w-25">${prod.name}</td>
//             <td class="w-25">${prod.price}</td>
//             <td class="w-25"><button class="btn btn-info">view</button>
//             `
//         )

//         document.getElementById('productList').innerHTML = listOfProducts
// }


// *****************Page de selection********************************************************* 

//  fetch ('http://localhost:3000/api/teddies')
// .then((res) => res.json())
// .then((data) => {
// for (var i = 0; i < data.length; i++){ 
// // const teddyBear = document.createElement("span");
//     const getOursons = document.getElementById('oursonsList')
//     getOursons.innerHTML += 
//       `
//       <div class="col-12 col-md-6 col-lg-4 mb-4">
//         <div class="card h-100">
//           <a href="produit.html?id=${data[i]._id}"><img src=${data[i].imageUrl} class="card-img-top"></a>
//           <div class="card-body">
//             <p class="card-title h3 font-weight-bold">
//               <a href="produit.html?id=${data[i]._id}">${data[i].name}</a>
//             </p>
//             <span class="font-weight-bold lead">₽ ${data[i].price}</span>
//             <p class="card-text font-italic font-weight-bold">${data[i].description}</p>
//             <button class="btn btn-info shop-item-button">Ajouter au panier</button>
//           </div>
//         </div>
//       </div>
//       `
//        }})
   
// *******************fin de page de selection************************************************************

 
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
      
    
      liColors = galOurs.colors.length;
      text = "<ul>";
      for (i = 0; i < liColors; i++) {
      text += "<li>" + galOurs.colors[i] + "</li>";
      }
      text += "</ul>";
     
      const oursonUnique = document.getElementById('oursonsProduit')
      oursonUnique.innerHTML = `
      
          <div class="container">
          
          <!-- Portfolio Item Heading -->

          <h1 class="my-4"><small> Teddies les petits oursons : </small><br><strong font-weight-bold>${galOurs.name}</strong>
          </h1>
        
          <!-- Portfolio Item Row -->
            <div class="row">
        
              <div class="col-md-8">
                <img class="img-fluid" src=${galOurs.imageUrl} alt="">
              </div>
        
              <div class="col-md-4">
                <h3 class="my-3">Description de l'ourson</h3>
                <p class="font-italic font-weight-bold">${galOurs.description}</p>
                <h4 class="my-3">${text}</h4>
              <button id="addCart" class="btn btn-info shop-item-button addToCartBtn addToCart">Ajouter au panier</button>
              </div>
            </div>
            `

           

        }  }  

        fetch ('http://localhost:3000/api/teddies')
          .then((response) => response.json())
          .then((data) => {
          var search_params = new URLSearchParams(window.location.search); 

          let oursID = search_params.get('id')
          var search_params = new URLSearchParams(window.location.search);
          if(search_params.has('id')) {
          var id = search_params.getAll('id')
     
        
          for (var i = 0; i < 1; i++){
          let galOurs = data.find(nId => {
            return nId._id === oursID            
          })


          let dataStr = JSON.stringify(data)
       // let galOursStr =JSON.stringify(galOurs)


// *********************** counter inCart ********************************

          let carts = document.getElementsByClassName('addToCartBtn')

          for (let i = 0; i < carts.length; i++){
        
          carts[i].addEventListener('click', ()=> {
          cartNumbers(data);
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


// *********************** counter inCart ********************************
// ***********************set local storage ******************************
         
          let galOursStr =JSON.stringify(galOurs)
         
          // console.log(addToCartButton) 
          // for (var i = 0; i < addToCartButton.length; i++){
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
          localStorage.setItem('cartId', OP)
          alert('Added to Storage')
          location.reload()
        
               
        })
     
      } 
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
        
        
      
         
          
          
          for (var i = 0; i < 1; i++){ 
          document.querySelector('.container-ours').innerHTML += 
          `
          <table class="table table-image">
            <thead class="thead-dark">
              <tr class="text-center">
              <th class w-20><img src=${OP.imageUrl} class="img-fluid img-thumbnail w-20"></th>
                <th class="w-20"><p class"h4">${OP.name}</p></th>
                <th class="w-20"><p class"h4">${OP.price}</p></th>
                <td class="w-20"><button class="btn btn-info">Pay</button>
                <td class="w-20"><button class="btn btn-info">Remove</button>
               <!-- <th class="w-10">${text}</th>-->
             
              </tr>
            </thead>
            <tbody class="container-ours">
            </tbody>
          </table>
          `
            }  
          // }

            

    }  }  }     )  } )
        

          // fetch ('http://localhost:3000/api/teddies')
          // .then((response) => response.json())
          // .then((data) => {
            
          //   var search_params = new URLSearchParams(window.location.search); 

          //   let oursID = search_params.get('id');
          //   var search_params = new URLSearchParams(window.location.search);
          //   if(search_params.has('id')) {
          //   var id = search_params.getAll('id');
             
                
          //     // for (var i = 0; i < 1; i++){
          //     // let galOurs = data.find(nId => {
          //     //   return nId._id === oursID 
                
                
          //     // })
          

          // let dataStr = JSON.stringify(data)
         
          // let carts = document.getElementsByClassName('shop-item-button');
          // console.log(carts[0])
          // for (let i = 0; i < carts.length; i++){
          // carts[i].addEventListener('click', ()=> {
          // cartId();
          
          
          

          // function cartId(index){
          
          // localStorage.setItem('cartId', dataStr)
         
          
          // var OP  = JSON.parse(localStorage.getItem('cartId', dataStr))
          // // var OP  = localStorage.getItem('cartId', data)

          // // console.log(OP[0].imageUrl)
          
                         

          // // let oursonSelection = document.getElementById('panierPaid')
          // // oursonSelection.innerHTML =  dataStr +
          // for (var i = 0; i < OP.length; i++){ 
          // let oursonSelection = document.getElementById('demo')
          // oursonSelection.innerHTML = 
          // `
          // <table class="table table-image">
          //   <thead class="thead-dark">
          //     <tr class="text-center">
          //     <th><img src=${OP[i].imageUrl} class="img-fluid img-thumbnail w-50"></th>
          //       <th class="w-25">${OP[i].name}</th>
          //       <th class="w-25">${OP[i].price}</th>
          //       <th class="w-25">${text}</th>
             
          //     </tr>
          //   </thead>
          //   <tbody id="demo">
          //   </tbody>
          // </table>
          // `
          // //   console.log(data)
            
          //   }  }  } )     }   }  }  )

        

          
        
//**************************fin de page de description****************************************
       
            
        

        // document.getElementById('panierPaid').innerHTML = oursonSelection

 
  // const oursonSelection = document.getElementById('panierPaid')
  // oursonSelection.innerHTML = 



//   fetch ('http://localhost:3000/api/teddies')
//   .then((response) => response.json())
//   .then((data) => {
    
//   let dataStr = JSON.stringify(data)
//   data = JSON.parse(dataStr)


  

   //   let carts = document.querySelectorAll('.shop-item-button')

//   for (let i = 0; i < carts.length; i++){

//   carts[i].addEventListener('click', ()=> {
//   console.log(carts[0])

//    function load () {}
//    const addToCartBtn = document.getElementsByClassName('addToCart')
   
//    for(let i=0 ; i < addToCartBtn.length; i++){
//    addToCartBtn[i].addEventListener('click', (e) =>{
//    console.log(e)
//    let dataStr1 = JSON.stringify(data)
//    localStorage.setItem('productsInCart', dataStr1)
//    console.log(localStorage)
   
//        })  
       
//    if(typeof(Storage)!== 'undefined'){

//    }else{
//        console.log('storage is not working on your browser')
   
//      } 
//             function displayCart() {
//             let cartItems = localStorage.getItem('productsInCart');
//             cartItems = JSON.parse(cartItems);
//             console.log(cartItems);
//             let productContainer = document.querySelector('.container-ours');
        
         
//             if (cartItems && productContainer) {
              
           
//             productContainer.innerHTML = '';
//             Object.values(cartItems).map(data => {
//             productContainer.innerHTML  +=
//           `
//           <table class="table table-image">
//             <thead class="thead-dark">
//               <tr class="text-center">
//               <th><img src=${data.imageUrl} class="img-fluid img-thumbnail w-50"></th>
//                 <th class="w-25">${data.name}</th>
//                 <th class="w-25">${data.price}</th>
//                 <th class="w-25">${text}</th>
             
//               </tr>
//             </thead>
            
//           </table>
//           `
//           //   console.log(data)
            
//             } 
            
//   )  }  
//   load()
//   displayCart() 

// } } 

// }  )
  

    
   


//    let cart =[]
//    function load () {
//        data.forEach(( i , index) => {
//        let item = document.createElement('div')
//        innerHTML =
//        `
//              <table class="table table-image">
//              <thead class="thead-dark">
//                <tr class="text-center">
//                    <th><img src=${i.imageUrl} class="img-fluid img-thumbnail w-50"></th>
//                    <th class="w-25">${i.name}</th>
//                    <th class="w-25">${i.price}</th>
//                    <td class="w-25"><button class="btn btn-info">view</button>
//                </tr>
//              </thead>
//                <tbody class="container-ours">
//                </tbody>
//              </table>
//            `

//        } )  }
           
       
   
     
    // function getProducts () { 
    // const productsLocalStorage = localStorage.getItem(dataStr)
    // if (productsLocalStorage !== null) {
    // return JSON.parse(productsLocalStorage)
    // }
    // return []
    // } 

    // function putProducts(id){

    // } 
    // const dataStr = new dataStr()
    // const a = localStorageUtil.getProducts
    // console.log(a)

//     var search_params = new URLSearchParams(window.location.search); 

//     let oursID = search_params.get('id');
//     var search_params = new URLSearchParams(window.location.search);
//     if(search_params.has('id')) {
//     var id = search_params.getAll('id');
   
//     for (var i = 0; i < 1; i++){
//       let galOurs = data.find(nId => {
//         return nId._id === oursID            
//       })        
  
//   let carts = document.querySelectorAll('.shop-item-button')

//   for (let i = 0; i < carts.length; i++){

//   carts[i].addEventListener('click', ()=> {
//   console.log(carts[0])
  
//   cartNumbers(data[i]);
 
//   } )
  
//    }

//     function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers')

//     if(productNumbers){
//       document.querySelector('.cart span').textContent = productNumbers
//     } 

//   }

//   function cartNumbers (data){ 
  
//   let productNumbers = localStorage.getItem('cartNumbers')

//   productNumbers = parseInt(productNumbers)
  
//   if (productNumbers){
//     localStorage.setItem('cartNumbers' , productNumbers + 1)
//     document.querySelector('.cart span').textContent = productNumbers + 1
//   }else{
//     localStorage.setItem('cartNumbers', 1)
//     document.querySelector('.cart span').textContent = 1
//   }
  

//   setItems(data)
//   }

//     function setItems(data){
//     let cartItems = localStorage.getItem('productsInCart')
//     cartItems = JSON.parse(cartItems)
   
//     if (cartItems != null) {
//         cartItems[data]
//     }else{
//     data.name = 1
//     cartItems = {
//     [data.name] : galOurs

//     }
    
//     }
  
//     localStorage.setItem('productsInCart', JSON.stringify(cartItems))
  
//   } }

//     function displayCart() {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//     console.log(cartItems);
//     let productContainer = document.querySelector('.container-ours');

 
//     if (cartItems && productContainer) {
      
   
//     productContainer.innerHTML = '';
//     Object.values(cartItems).map(data => {
//     productContainer.innerHTML  +=
//       `
//       <table class="table table-image">
//       <thead class="thead-dark">
//         <tr class="text-center">
//             <th><img src=${data.imageUrl} class="img-fluid img-thumbnail w-50"></th>
//             <th class="w-25">${data.name}</th>
//             <th class="w-25">${data.price}</th>
//             <td class="w-25"><button class="btn btn-info">view</button>
//         </tr>
//       </thead>
//         <tbody class="container-ours">
//         </tbody>
//       </table>
//     `
//      } )
//      onLoadCartNumbers()
//      displayCart()
          
//      } }
    
    

   
    
    
//   }


  
//    }   )
  
                       
                    

                






    