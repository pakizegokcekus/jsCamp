
function addToCart(productName="Elma",quantity) //Default olarak elma verdik
{
    console.log("Sepete eklendi! : ürün :"+ productName+" adet : "+quantity);
}

//Undefined tanımlı olmayan olmaktır
//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2=function () {
    console.log("Hello World 2")
}

sayHello2();


function addToCart2(productName,quantity,unitPrice) {
    
}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat :"+product.unitPrice)
}

let product1 = {productName:"Elma", unitPrice:10, quantity:5}
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

product2=product3//Sayısal değerler değer tip //Ama objeler arraylar referans tip
product2.productName="Karpuz"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)


function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) {//rest operatör  ... yazarsak
    let total=0;
    for(let i=0;i<numbers.length; i++){
        total=total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name :"İç Anadolu" , population:"20M"},
    {name :"Marmara" , population:"30M"},
    {name :"Karadeniz" , population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQantity
({productName:newProductName ,unitPrice:newUnitPrice,quantity:newQantity}
 =  {productName:"Elma", unitPrice:10, quantity:5})


console.log(newProductName)