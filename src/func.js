// function addToCart(quantity,productName="emoş") {
//     console.log("sepete eklendi: "+productName+"adet:"+quantity)
// }

// addToCart()
// addToCart("alpi")
// addToCart("alpiş")
// addToCart("alpii")
// addToCart("alpik")

// let sayHello = () =>{
//     console.log("anangile selam söyle")
// }

// sayHello()

// let sayHello2= function() {
//     console.log("babangile selam söyle")
// }
// sayHello2()



// function addToCart2(productName, quantity, unitPrice) {
//     console.log("ürün adı:"+productName+"adedi:"+quantity+"fiyatı:"+unitPrice)    
// }
// addToCart2

// let product1={productName:"elma",quantity:10,unitPrice:150}
// function addToCart3(product){
//     console.log("ürün adı: "+product.productName)
//     console.log("ürün adedi: "+product.quantity)
//     console.log("ürün fiyatı: "+product.unitPrice)
// }
// addToCart3(product1)


// //aslında burada referans numarasını eşitlediğimiz için gösterdiği heap alanı değişiyor bu yüzden karpuz yazdırılıyor.
// let product2={productName:"elma",quantity:10,unitPrice:150}
// let product3={productName:"elma",quantity:10,unitPrice:150}
// product2=product3
// product2.productName="karpuz"
// console.log(product3.productName)

// function addtoCart4(x){
//     console.log(x)
// }

// let products=[{productName:"elma",quantity:10,unitPrice:150},
//           {productName:"armut",quantity:12,unitPrice:180},
//           {productName:"şeftali",quantity:8,unitPrice:70}]


// addtoCart4(products)


// //rest
// function add(bisey,...numbers) {    //burda bisey değişkenini başa yazmamız gerek aksi takdirde yanlış bir yazım olur,hata alırız. tıpkı default parametreyi sona yazmamız gibi
//     let total=0
//     for(let i=0;i<numbers.length;i++){
//         total+=numbers[i]
//     }
//     console.log(total)
//     console.log(bisey)
    
// }
// add(30,40,50)
// add(3,6,7,8,12)

// let numbers=[1,2,3,4,5,6,8]
// console.log(numbers)
// console.log(...numbers)//ayırdı, ayrı ayrı değişkenler olarak yazdı
// console.log(Math.max(...numbers))


// function asalMi(...sayilar) {
//     for(let i=0;i<sayilar.length;i++){
//         let asal =true;
//         for(let k=2;k<sayilar[i];k++){
//             if(sayilar[i]%k===0){
//                 asal=false 
//                 break
//             }
           

//         }
//         if (asal===true){
//             console.log(sayilar[i])
//     }
        
//         }
     
    
    
// }
// asalMi(7,3,12)



// let [icanadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
//     {name: "iç anadolu", population: "10M"},
//     {name: "marmara", population: "30M"},
//     {name: "karadeniz", population: "8M"},
//     [
//         ["ankara", "konya"],
//         ["istanbul", "bursa"],
//         ["sinop", "artvin"]
//     ]
// ]

// console.log(icAnadoluSehirleri)
// console.log(marmara)
// console.log(marmara.population)



// let newProductName ,newQuantity, newUnitPrice 
// ({productName:newProductName,quantity:newQuantity,unitPrice:newUnitPrice}=
//     {productName:"elma",quantity:10,unitPrice:150})

// console.log(newProductName)



// function arkadasMi(x,y) {
//     let toplamx=0
//     let toplamy=0
//    for(let i=1;i<x;i++){
//     if(x%i==0){
//         toplamx+=i
//     }
//    }
//    for(let i=0;i<y;i++){
//     if(y%i==0){
//         toplamy+=i
//     }
//    }
//    if(toplamx===y && toplamy===x){
//     console.log(x+"ve"+y+"arkadaş sayılardır")
//    }
//    else{
//     console.log(x+"ve"+y+"arkadaş sayı değillerdir")
//    }
// }

// arkadasMi(3,4)


function mükemmelSayilar() {
    for(let i=1;i<=1000;i++){
        let toplam=0
        for(let k=1;k<i;k++){
            if(i%k===0){
                toplam+=k
            }
        }
        if(toplam===i){
            console.log(i)
        }
    }
}

mükemmelSayilar()

let sayi =()=> 0.18;
console.log(sayi)

