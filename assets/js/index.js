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