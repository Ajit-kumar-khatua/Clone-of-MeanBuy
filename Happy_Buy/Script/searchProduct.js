let productArr=JSON.parse(localStorage.getItem("searchProduct"))

if(productArr.length==0){
    let h1=document.createElement("h1")
    h1.innerText="No Product Found"
    h1.style.textAlign="center"
    document.querySelector("#child2").append(h1)
}

function displayData(data){
    data.forEach(function(elem){
        let div=document.createElement("div")
        div.addEventListener("click",function(){
            window.location.href="./product.html"
            localStorage.setItem("currentItem",JSON.stringify(elem))
        })
        let image=document.createElement("img")
        image.src=elem.image
        let title=document.createElement("p")
        title.innerText=elem.titlle
       let rating=document.createElement("p")
       rating.innerText=elem.rating
        rating.setAttribute("class","rat")
        let i=document.createElement("i")
         i.setAttribute("class","fa-sharp fa-solid fa-star")
        rating.append(i)
        let div2=document.createElement("div")
        div2.setAttribute("class","child2")
        let price=document.createElement("h4")
         price.innerText="₹"+elem.price    
         let disc=document.createElement("p")
         disc.innerText=elem.discount
         div2.append(price,disc)
    
        div.append(image,title,rating,div2)
        
        document.querySelector("#products").append(div)
    })
}
displayData(productArr)

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