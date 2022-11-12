
let product=JSON.parse(localStorage.getItem("currentItem"))

console.log(product)

function displayChild1(data){
    let image=document.createElement("img")
    image.src=data.image;
    document.querySelector("#child1").append(image)
}
displayChild1(product)

function displayChild2(data){
    let title=document.querySelector("h1")
    title.innerText=data.titlle
    let rating=document.querySelector("#rating")
    rating.innerText=data.rating
    let i=document.createElement("i")
       i.setAttribute("class","fa-sharp fa-solid fa-star")
      rating.append(i)
    let anchor=document.querySelector("#review")
    anchor.innerText="Write a review"
    let price=document.querySelector("#price")
    price.innerText="₹"+data.price+".00"
    let disc=document.querySelector("#off")
    disc.innerText=data.discount

}

displayChild2(product)

// let quant=0;
// let count=1
// let increament=document.querySelector("#increment")
// increament.addEventListener("click",function(){
//    count++;
//    document.querySelector("#quant").innerText=count
   
// })

// document.querySelector("#decrement").addEventListener("click",function(){
//     if(count>1){
//         count--;
//         document.querySelector("#quant").innerText=count

//     }else{
//         document.querySelector("#quant").innerText=count
//     }
// })

let cartArr=JSON.parse(localStorage.getItem("cartProducts"))||[]
document.querySelector("#add-to-cart").addEventListener("click",function(){
    let image=product.image
    let title=product.titlle
    let price=product.price
    let cartObj={
       image,title,price,quantity:"1"
    }
    if(cartArr.length==0){
        cartArr.push(cartObj)
    }else{
        flag=false
        for(let i=0;i<cartArr.length;i++){
            if(cartArr[i].title===title){
                flag=true
               break;
            }
        }
        if(flag==true){
            alert("Item Already Added to Cart")
        }else{
            alert("item added to cart")
            cartArr.push(cartObj)
        }
    }
    localStorage.setItem("cartProducts",JSON.stringify(cartArr))
    document.querySelector(".cart-item").innerText=cartArr.length
});

let cart_number=JSON.parse(localStorage.getItem("cartProducts"))
document.querySelector(".cart-item").innerText=cart_number.length

let count=0
document.querySelector("#category").addEventListener("click",function(event){
    event.preventDefault()
    count++;
    if(count%2==1){
        document.querySelector("#category-click").style.display="block"
    }else{
        document.querySelector("#category-click").style.display="none"
    }
})