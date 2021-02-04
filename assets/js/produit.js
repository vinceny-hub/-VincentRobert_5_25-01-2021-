
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
       

        // fetch ('http://localhost:3000/api/teddies')
        // .then((response) => response.json())
        // .then((data) => {
        // var search_params = new URLSearchParams(window.location.search); 

        // let oursID = search_params.get('id')
        // var search_params = new URLSearchParams(window.location.search);
        // if(search_params.has('id')) {
        // var id = search_params.getAll('id')
    
    
        // for (var i = 0; i <1; i++){
        // let galOurs = data.find(nId => {
        // return nId._id === oursID            
        // })


        // let dataStr = JSON.stringify(data)
        // data = JSON.parse(dataStr)
        // let galOursStr =JSON.stringify(galOurs)


// *********************** counter inCart ********************************

        // let carts = document.querySelectorAll('.addToCartBtn')

        // for (let i = 0; i < carts.length; i++){
    
        // carts[i].addEventListener('click', ()=> {
        // cartNumbers(galOurs[i]);

        // } )

        // }

        // function onLoadCartNumbers() {
        
        // let productNumbers = localStorage.getItem('cartNumbers')

        // if(productNumbers){
        // document.querySelector('.cart span').textContent = productNumbers

        // } 

        // }

        // function cartNumbers (data){ 
        // console.log('Le nounours est : ', galOurs)
        // let productNumbers = localStorage.getItem('cartNumbers')

        // productNumbers = parseInt(productNumbers)
        
        // if (productNumbers){
        // localStorage.setItem('cartNumbers' , productNumbers + 1)
        // document.querySelector('.cart span').textContent = productNumbers + 1
        // }else{
        // localStorage.setItem('cartNumbers', 1)
        // document.querySelector('.cart span').textContent = 1
        // }
     
        // }

        // onLoadCartNumbers()
        // cartNumbers()


// *********************** counter inCart ********************************

// ***********************set local storage ******************************

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
        
        localStorage.setItem('cartId', JSON.stringify(OP))
        alert('Added to Storage')
        location.reload()
            
        } 

        ) }   

        addCart()

        } }  
        } )   
        
                    