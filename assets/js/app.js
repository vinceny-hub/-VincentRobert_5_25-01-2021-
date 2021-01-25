/*1ere étape se connecter a l'api*/
/* Pour savoir si je suis connecter, faire un console.log pour afficher les produits dans la console*/
/*Générer le DOM pour afficher les produits */
     

// let eltTeddies = document.getElementById("mainTeddies");

// const affichageTeddyName = document.querySelector("#nomNounours");
// const affichageTeddyPrice = document.querySelector("#prixNounours");
// const affichageTeddyDescription = document.querySelector("#descriptionNounours");
// const affichageTeddyImage = document.querySelector("#imageNounours");

// const affichageTeddyName0 = document.querySelector("#nomNounours0");
// const affichageTeddyPrice0 = document.querySelector("#prixNounours0");
// const affichageTeddyDescription0 = document.querySelector("#descriptionNounours0");
// const affichageTeddyImage0 = document.querySelector("#imageNounours0");

// const affichageTeddyName1 = document.querySelector("#nomNounours1");
// const affichageTeddyPrice1 = document.querySelector("#prixNounours1");
// const affichageTeddyDescription1 = document.querySelector("#descriptionNounours1");
// const affichageTeddyImage1 = document.querySelector("#imageNounours1");

// const promise01 = fetch ('http://localhost:3000/api/teddies');

// promise01.then((response) => {
//     console.log(response);

// const teddiesData = response.json();
//     console.log(teddiesData);

// teddiesData.then((teddies) => {
//     console.log(teddies[0]);
//         teddiesData.then((teddies) => affichageTeddyImage.src = teddies[0].imageUrl)
//         teddiesData.then((teddies) => affichageTeddyImage0.src = teddies[0].imageUrl)
//         teddiesData.then((teddies) => affichageTeddyImage1.src = teddies[1].imageUrl)
//     console.log(teddies[0]);
    
      
//     const teddyName = teddies[0].name;
//     const teddyPrice = teddies[0].price;
//     const teddyDescription = teddies[0].description;
//     const teddyImage = teddies[0].imageUrl;

//     const teddyName0 = teddies[0].name;
//     const teddyPrice0 = teddies[0].price;
//     const teddyDescription0 = teddies[0].description;
//     const teddyImage0 = teddies[0].imageUrl;

//     const teddyName1 = teddies[1].name;
//     const teddyPrice1 = teddies[1].price;
//     const teddyDescription1 = teddies[1].description;
//     const teddyImage1 = teddies[1].imageUrl;

//     console.log(teddyName);
//     console.log(teddyPrice);
//     console.log(teddyDescription);
//     console.log(teddyImage);

//     affichageTeddyName.innerHTML = teddyName;
//     affichageTeddyPrice.innerHTML = teddyPrice;
//     affichageTeddyDescription.innerHTML = teddyDescription;
//     affichageTeddyImage.innerHTML = teddyImage;

//     affichageTeddyName0.innerHTML = teddyName0;
//     affichageTeddyPrice0.innerHTML = teddyPrice0;
//     affichageTeddyDescription0.innerHTML = teddyDescription0;
//     affichageTeddyImage0.innerHTML = teddyImage0;

//     affichageTeddyName1.innerHTML = teddyName1;
//     affichageTeddyPrice1.innerHTML = teddyPrice1;
//     affichageTeddyDescription1.innerHTML = teddyDescription1;
//     affichageTeddyImage1.innerHTML = teddyImage1;

//     /*eltTeddies.innerHTML = "<ul><li>teddyName</li><li>teddyPrice</li></ul>";*/
//     eltTeddies.innerHTML = [teddyName, teddyPrice, teddyDescription, teddyImage];

//         /*img.innerHTML = teddyImage;*/

// });
// })

    

//    /*
//     usersData.then((data) => {
//         console.log(data[1].imageUrl);
    
// });*/
// .catch((err) => console.log(err));


function Teddies (pic,name,price){
    this.pic = pic,
    this.name = name,
    this.price = price
}



const teddy1 = new Teddies ('http://localhost:3000/images/teddy_1.jpg', 'Norbert', 10);
const teddy2 = new Teddies ('http://localhost:3000/images/teddy_2.jpg', 'Jean', 20);
const teddy3 = new Teddies ('http://localhost:3000/images/teddy_3.jpg', 'Philippe', 30);
const teddy4 = new Teddies ('http://localhost:3000/images/teddy_4.jpg', 'Victor', 40);
const teddy5 = new Teddies ('http://localhost:3000/images/teddy_5.jpg', 'Joao', 50);



let teddies = [];


// document.getElementById('productList').appendChild(demo);
teddies.push(teddy1,teddy2,teddy3,teddy4,teddy5);




function populateTableList(){
    let listOfProducts = '';
    teddies.forEach(prod =>
        listOfProducts += `
        <tr class="text-center">
            <td><img src=${prod.pic} class="img-fluid img-thumbnail w-50"></td>
            <td class="w-25">${prod.name}</td>
            <td class="w-25">${prod.price}</td>
            <td class="w-25"><button class="btn btn-info">view</button>
            `
        )

        document.getElementById('productList').innerHTML = listOfProducts
}


/*console.log(teddy1,teddy2,teddy3,teddy4,teddy5);*/
// componentDidMount; {
// fetch ('http://localhost:3000/api/teddies')
// .then(response => response.json())
// .then(ours => this.setState ({teddies: ours}));

// }



// // function Oursons (nom,prix){
// //     const oursonsList = document.createElement("li");
// //     oursonsList.innerHTML = `<h3>${nom}</h3><p>${prix}</p>`;
// //     document.querySelector("ol").appendChild(oursonsList);
// // }

// // Oursons('Norbert', '10');
// // Oursons('Jean', '20');
// // Oursons('Winnie', '30');

// // Oursons (teddies[0].name, teddyPrice);

// // var httpRequest = new XMLHttpRequest()
// // httpRequest.onreadystatechange = function () {
// //     if (httpRequest.readyState === 4) {
// //         httpRequest.responseText.teddyName
// //         document.querySelector("ol").innerHTML = httpRequest.responseText.teddyName
// //     }
// //     console.log(httpRequest);
// // }
// // httpRequest.open('GET','http://localhost:3000/api/teddies', true)
// // httpRequest.send()



// var demo = document.getElementById("demo");
// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//     console.log(this);

//     if (this.readyState === 4 && this.status === 200) {
//         var data= this.response.data;
//         demo.innerHTML = this.response;
//         console.log(this.response);
        
//         for (var i = 0; i < length; i++){ 
//             demo.innerHTML = this.response[i].name;
//         }
//     } else if (this.readyState === 4 && this.status === 404){
//         alert('Erreur 404 :/');
//     }

// };

// xhr.open("GET", "http://localhost:3000/api/teddies");
// xhr.responseType = "json";
// xhr.send();

//// document.getElementById('oursons').addEventListener
// ('click',oursons);

// function oursons() {
//     fetch ('http://localhost:3000/api/teddies')
//     .then((res) => res.json())
//     .then((data) => {
//         for (var i = 0; i < data.length; i++){ 
            
//         const demo = document.createElement("li");
//         demo.innerHTML = `<h3>${data[i].name}</h3><p>${data[i].price}</p><p>${data[i].colors}</p><img src=${data[i].imageUrl} width="200"><button class="btn btn-info">view</button>`;
       
//         document.querySelector("ol").appendChild(demo);
//         console.log(data[i].name + data[i].price + data[i].colors);
//         console.log(data[i]);
//     }}) 
 

     
//// }
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

// document.getElementById('productList').appendChild(teddyBear);
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




// document.getElementById('oursons').addEventListener
// ('click',oursons);

// function oursons() {

    
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
                  <a href="#">${data[i].name}</a>
                </p>
                <span class="font-weight-bold lead">₽ ${data[i].price}</span>
                <p class="card-text font-italic font-weight-bold">${data[i].description}</p>
                <button class="btn btn-info shop-item-button">Panier</button>
              </div>
            </div>
          </div>
        
                
            `
        
        // teddyBear.innerHTML = `
        // <tr class="text-center">
        //     <td class="w-25"><img src=${data[i].imageUrl} class="img-fluid img-thumbnail w-25"></td>
        //     <td class="w-25">${data[i].name}</td>
        //     <td class="w-25">${data[i].price}</td>
        //     <td class="w-25"><button class="btn btn-info">view</button>
        //     `
        //  document.getElementById('oursonsList').innerHTML = teddyBear;

        
        
        // console.log(data[i].name + data[i].price + data[i].colors);
        // console.log(data[i]);
    }})

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++){
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCardClicked)
      console.log(button)
    }
    
    
    function addToCardClicked(event) {
      var button = event.target
      var card = button.parentElement.parentElement
      var title = card.getElementByClassName('card-title')[0].innerText
      console.log(title)
    }


    fetch ('http://localhost:3000/api/teddies')
    .then((res) => res.json())
    .then((data) => {
        
        for (var i = 0; i < data.length; i++){ 
            
        // const teddyBear = document.createElement("span");
        const getOursons = document.getElementById('oursonsProduit')
        getOursons.innerHTML += `
     
     
        <div class="container">

        <!-- Portfolio Item Heading -->
        <h1 class="my-4"><small> Teddies les petits oursons : </small><br><strong font-weight-bold>${data[i].name}</strong>
          
        </h1>
      
        <!-- Portfolio Item Row -->
        <div class="row">
      
          <div class="col-md-8">
            <img class="img-fluid" src=${data[i].imageUrl} alt="">
          </div>
      
          <div class="col-md-4">
            <h3 class="my-3">Description de l'ourson</h3>
            <p class="font-italic font-weight-bold">${data[i].description}</p>
            <h3 class="my-3"></h3>
            <ul>
              <li>${data[i].colors[0]}</li>
              <li>${data[i].colors[1]}</li>
              <li>${data[i].colors[2]}</li>
              <li>${data[i].colors[3]}</li>
              
             
            </ul>
            <button class="btn btn-info shop-item-button">Ajouter au panier</button>
          </div>
      
        </div>
        
                
            `
        
          }})

   

     
// }


 
