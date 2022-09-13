

let body               = document.querySelector("body")
let main               = document.createElement("main")
let ul                 = document.createElement("ul")
let section          = document.createElement("section")
let button            = document.createElement("button")
let divInicio        = document.createElement("div")
let descriptionItem = document.createElement("p")
let descriptionPrice = document.createElement("p")
let divFinal            = document.createElement("div")
let totalCompra         = document.createElement("p")
let totalCompraValor    = document.createElement("p")
let h1                    = document.createElement ("h1")

body.appendChild(h1)
body.appendChild(main)
main.appendChild(divInicio)
divInicio.appendChild(descriptionItem)
divInicio.appendChild(descriptionPrice)
main.appendChild(ul)
main.appendChild(section)
section.appendChild(divFinal)
divFinal.appendChild(totalCompra)
divFinal.appendChild(totalCompraValor)
section.appendChild(button)


let valorTotal = 0

for(let i = 0; i<productsCart.length; i++){
    let li = document.createElement("li")
    ul.appendChild(li)
    let pProduct = document.createElement("p")
    let pPrice = document.createElement("p")
    pProduct.innerHTML += `${productsCart[i].name}` 
    pPrice.innerHTML += ` R$ ${productsCart[i].price}`
    li.appendChild(pProduct)
    li.appendChild(pPrice)
    valorTotal   +=   productsCart[i].price
}

h1.innerHTML        = 'Virtual Market'
totalCompra.innerHTML = `Total `
totalCompraValor.innerHTML= `R$ ${valorTotal}`
button.innerHTML      = "Finalizar Compra"
descriptionItem.innerHTML = `Item` 
descriptionPrice.innerHTML = `Valor`

