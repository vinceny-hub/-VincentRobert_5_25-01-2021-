    if(localStorage.getItem('cartId') == "[]"){ 
    location.href ='index.html'
    localStorage.clear('quantityOurs')
    alert("Panier vide redirection vers la page d'accueil")
    }else{ 

    let OP = JSON.parse(localStorage.getItem('cartId'))
    // fetch ('http://localhost:3000/api/teddies')
    // .then((response) => response.json())

    // .then((data) => {
    // localStorage.setItem('cartId', JSON.stringify(OP));                            
    
     console.log(localStorage.getItem('cartId'))
       
    // let dataStr = JSON.stringify(data)
    // data = JSON.parse(dataStr)

    let productContainer = document.querySelector('.container-ours')
    let tableData = ''
    tableData += ``
    OP.forEach(function (item, index, array) {
    var iPar = JSON.parse(item)
    var itemPar = JSON.parse(index)
    
    console.log(iPar)
    

    // let idPrice = itemPar + 100000
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
            <div class="col-md-7">
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

                  <div class="col-md-5 quantity">
                  
               
                     
                      <span class="price col-8 text-center" type="text" id="">₽ ${iPar.price} </span>
                     
                    
                
                  </div>
                 
                  <div class="col-md-3 float-right">
                    <button class="btn btn-primary btn-sm removed price font-weight-light " id="${itemPar}">Supprimer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       `
         
    //  var tot = document.getElementById("idPrice")
    //  console.log(tot)
    productContainer.innerHTML = tableData
  
    })
  
    OP.forEach(function (item, index, array) {
    var iPar = JSON.parse(item)
    var itemPar = JSON.parse(index)
    // console.log(iPar._id)
    idStr = JSON.stringify(iPar._id)
    
    // localStorage.setItem('prix', JSON.stringify(OP))
    
    // let idPrice = itemPar + 100000
    let removeButton = document.querySelectorAll(".removed")
    // let minusBtn = document.querySelectorAll(".dec")
    // let plusBtn = document.querySelectorAll(".inc")
    // let totOurson = iPar.price
    
   
    removeButton[index].addEventListener('click', async function(e) { 
  
    removeItem(e)
    })
    var prices = JSON.parse(localStorage.getItem('prices'))
     function removeItem(e){
  
      if (e.target.classList.contains('removed')){
        if(confirm('are u sure to want to delete ?')){
        console.log(e.target)
          if(e.target.id == itemPar){
            // alert('=')
            let itemParIndex = e.target.id
            const removeO = OP.splice(itemParIndex,1)
            localStorage.setItem('cartId', JSON.stringify(OP))
            const remove1 = prices.splice(itemParIndex,1)
            localStorage.setItem('prices', JSON.stringify(prices))
            const remove2 = ids.splice(itemParIndex,1)
            localStorage.setItem('ids', JSON.stringify(ids))



      

            console.log(OP)
            console.log(itemParIndex)
            console.log(removeO)
            location.reload()
          }else{
            // alert('!=')
          }
        }
      }
    }
     
      
  


}




)
function montantTotal(){ 
let pricesOurs = JSON.parse(localStorage.getItem('prices'))
const reducer = (accumulator, currentValue) => accumulator + currentValue
console.log(pricesOurs.reduce(reducer))
let total = document.getElementById('total')
let totalValidationBtn = document.getElementById('totalValidationBtn')
total.innerText = `₽`+ pricesOurs.reduce(reducer)
totalValidationBtn.innerText = `₽`+ pricesOurs.reduce(reducer)
}
montantTotal()


// //   console.log(iPar.price)



}
// )}