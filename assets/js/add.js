    if(localStorage.getItem('cartId') === null){ 
    location.href ='index.html'
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
    
  
    
    
    // localStorage.clear(i)
    // location.reload()
    

    })
    let removeButton = document.getElementsByClassName("removed")
    for (let i = 0; i < removeButton.length; i++) {
        const element = data[i];
        document.getElementsByClassName("removed")[i].addEventListener('click', async function() { 
        console.log()
        alert('clicked')
        localStorage.clear(i)
       location.reload()
        Delete()
    })


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

        function Delete(pid){

        let OP = JSON.parse(localStorage.getItem('cartId'))
        let newCart = OP.filter((iPar) => iPar._id != pid)
        localStorage.setItem('cartId', JSON.stringify(newCart))
        updateOP()
    }
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
    }
   
      

    }) }
    


// *********************** Init local storage ******************************

// if(localStorage.getItem('cartId') == null){ 
// location.href ='index.html'
// // let init = []
// // localStorage.setItem('cartId', JSON.stringify(init)) 
// // console.log('création du panier')
// }

// *********************** Init local storage ******************************
    