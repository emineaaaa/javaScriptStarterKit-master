let cart=[
    {id:1,productName:"telefon", quantity:3, unitPrice:40000},
    {id:2,productName:"bardak", quantity:2, unitPrice:12},
    {id:3,productName:"kalem", quantity:4, unitPrice:8},
    {id:4,productName:"defter", quantity:1, unitPrice:10}

]


cart.map(product=>console.log(product.productName))                    //tek tek dolaşırız iterate eder.gexerken bir takma isim verdik burada product dir.yani her bir product için productName i yazdırdı


console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+":"+product.unitPrice*product.quantity+"</li>")
})
console.log("</ul>")


let total=cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)                        //hepsinin toplam fiyatını bulduk
console.log(total)


let quantiityOver2=cart.filter(product=>product.quantity>2 )                              //filtreleme yapmak için genelde yeni bir array oluşturmaktır amacımız
console.log(quantiityOver2)




function addToCart(sepet) {
    sepet.push({id:7,productName:"ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart)



let sayi=10                         //10 çıktısını9 verir çünkü atama işlemlerinde scope falan filan  yukarıdakinde referas olduğundan falan filan 
function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
console.log(sayi)