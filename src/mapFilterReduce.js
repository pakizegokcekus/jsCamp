let cart=[
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Kitap",quantity:1,unitPrice:50},
    {id:3,productName:"Bardak",quantity:5,unitPrice:4500},
    {id:4,productName:"Kalem",quantity:12,unitPrice:350},
    {id:5,productName:"Bilgisayar",quantity:5,unitPrice:650},
    {id:6,productName:"Silgi",quantity:6,unitPrice:150},
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+":"+
    product.unitPrice*product.quantity+"</li>")
})
console.log("</ul>")


let total=cart.reduce((acc,product)=>
acc+product.unitPrice*product.quantity,0)

console.log(total)

let quantityOver2=cart.filter(product=>
    product.quantity>2)

console.log(quantityOver2)

cart.push({id:7,productName:"Telefon",quantity:3,unitPrice:4000})


function addToCart(sepet){
    sepet.push({id:7,productName:"Mause",quantity:3,unitPrice:4000})  
}

addToCart(cart);

let sayi=10

function sayiTopla(number){
    number+=1;
}
sayiTopla(sayi)
console.log(sayi);