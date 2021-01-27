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


    // Page de selection 
    fetch ('http://localhost:3000/api/teddies')
    .then((res) => res.json())
    .then((data) => {
        
        for (var i = 0; i < data.length; i++){ 
            
        // const teddyBear = document.createElement("span");
        const getOursons = document.getElementById('oursonsList')
        getOursons.innerHTML += `
     
     
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
          let carts = document.querySelectorAll('.shop-item-button');
          for (let i= 0; i < carts.length; i++){
          carts[i].addEventListener('click', ()=> {
          console.log("added to cart");
          })}

          
          }})

          // fin de page de selection

    // var addToCartButtons = document.getElementsByClassName('shop-item-button')
    // for (var i = 0; i < addToCartButtons.length; i++){
    //   var button = addToCartButtons[i]
    //   button.addEventListener('click', addToCardClicked)
    //   console.log(button)
    // }
    
    
    // function addToCardClicked(event) {
    //   var button = event.target
    //   var card = button.parentElement.parentElement
    //   var title = card.getElementByClassName('card-title')[0].innerText
    //   // console.log(title)
    // }

    // page description
    fetch ('http://localhost:3000/api/teddies')
    .then((response) => response.json())
    .then((data) => {

        var search_params = new URLSearchParams(window.location.search); 

//         // if(search_params.has('id')) {
//         // var id = search_params.get('id');
//         // var OID = JSON.parse(search_params);
//         // console.log(search_params.has('id'));

//         if (search_params.has('id')){

        let oursID = search_params.get('id');
        var search_params = new URLSearchParams(window.location.search);
        if(search_params.has('id')) {
        var id = search_params.getAll('id');
          // let url = new URL ('http://127.0.0.1:5500/P5/produit.html'+ search_params);
          // let params = new URLSearchParams(url.search.slice(0))
          // console.log(params)
          // console.log(oursID)
          // console.log(id)
          // console.log(url)

//         }else{
//           window.location.pathname = 'http://127.0.0.1:5500/P5/produit.html';
//         }
// }


//         for (var i = 0; i < data.length; i++){ 
//         for (let p of search_params){
//         console.log(p);
//         const oursonUnique = document.getElementById('oursonsProduit')
//         oursonUnique.innerHTML = 'http://127.0.0.1:5500/P5/produit.html?id='+ p[1] + `
          // window.addEventListener('load', () => {
          // // let galleriesRaw = '[{"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://localhost:3000/images/teddy_1.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://localhost:3000/images/teddy_2.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_3.jpg"},{"colors":["Brown","Blue","Pink"],"_id":"5beaabe91c9d440000a57d96","name":"Gustav","price":4500,"imageUrl":"http://localhost:3000/images/teddy_4.jpg","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"colors":["Beige","Tan","Chocolate"],"_id":"5beaacd41c9d440000a57d97","name":"Garfunkel","price":5500,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/teddy_5.jpg"}]'
          // let galleriesRaw = new URLSearchParams(window.location.search);
          // let galleries = JSON.parse(galleriesRaw);
          // console.log(galleriesRaw);
          // }, false);
            
          for (var i = 0; i < 1; i++){
          let galOurs = data.find(nId => {
            return nId._id === oursID            
          })
          
          // var Oid = data
          // let galOurs = data.indexOf(oursID)
          // console.log(galOurs)
          
          // console.log(data.indexOf(oursID) > -1)
          // let ourson = Oid.find(function(elem, index, arr, id, name){
          // console.log(index)
       
          
          // console.log(elem)
          // console.log(name)
          // });
          liColors = galOurs.colors.length;
          text = "<ul>";
          for (i = 0; i < liColors; i++) {
          text += "<li>" + galOurs.colors[i] + "</li>";
          }
          text += "</ul>";
          // console.log(Oid)
          // console.log(Oid.indexOf(data[oursID]))
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
                    <h3 class="my-3">${text}</h3>
                    <button class="btn btn-info shop-item-button">Ajouter au panier</button>
                  </div>
                </div>
                `
              let carts = document.querySelectorAll('.shop-item-button');
              for (let i= 0; i < carts.length; i++){
              carts[i].addEventListener('click', ()=> {
              console.log("added to cart");
              })}
            }}})

             // var fruits, text, fLen, i;
              // fruits = ["Banana", "Orange", "Apple", "Mango"];
            
              // document.getElementById('oursonsDescription').innerHTML = galOurs.colors = 
              // `
              // <li>${galOurs.colors}</li> `
              // console.log(galOurs.colors)



             //   for (var i = 0; i < data.length; i++){
            //   // document.createElement('ul')
            //   document.getElementById('oursonsDescription').innerHTML = 
            //   `
            //   <ul>
            //   <li>${data.colors}</li>
            //   </ul
            //    `
            //   console.log(data.colors)



            // }}
              // console.log(galOurs.colors)
              // let galOurs = data; 
              // for (var i = 0; i < galOurs.colors.length; i++){
              //   const oursonDes = document.getElementById('oursonsDescription')
              //   oursonDes.innerHTML =  `
              //     <div>${galOurs.color}</div> `
              //    }

             

              

              

              

          

         


          
        // fin de page de description



      


