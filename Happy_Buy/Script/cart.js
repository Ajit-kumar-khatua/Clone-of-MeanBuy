
let cartArr=JSON.parse(localStorage.getItem("cartProducts"))

console.log(cartArr)




function displayData(data){
    document.querySelector("#products").innerHTML=""
    data.forEach(function(elem,index){
       
        
      let div=document.createElement("div")
      div.setAttribute("class","product-child1")
      let div3=document.createElement("div")
          let price=document.createElement("p")
          price.innerText="₹"+elem.price+".00";
          price.style.fontSize="18px"
          div3.append(price)
          div3.style.marginLeft="200px"
          div3.style.paddingTop="6%";

       let image=document.createElement("img")
       image.src=elem.image
       let div2=document.createElement("div")
        let title=document.createElement("h4")
        title.innerText=elem.title
        let span=document.createElement("span")
         span.innerText="SELECT QTY :"
         let span2=document.createElement("span");
         span2.innerText=elem.quantity
            let btn1=document.createElement("button")
            btn1.innerText="-"
            btn1.style.marginLeft="20px"
         
            btn1.addEventListener("click",function(){
                if(elem.quantity>1){
                    cartArr[index].quantity--
                    span2.innerText=elem.quantity;
                    localStorage.setItem("cartProducts",JSON.stringify(cartArr))
                    displayCheckout(cartArr)
            
                }else{
                    span2.innerText=elem.quantity;
                }
            })
            let btn2=document.createElement("button")
            btn2.innerText="+"
            btn2.addEventListener("click",function(){ 
                quant=cartArr[index].quantity++
                span2.innerText=elem.quantity;
                localStorage.setItem("cartProducts",JSON.stringify(cartArr))
                displayCheckout(cartArr)
            })

            let p=document.createElement("p")
            p.innerText="FREE DELIVERY"
            p.style.color="green"
            let p2=document.createElement("p")

            p2.innerText="DELIVERY DATE:6 DEC 2022"
             p2.style.color="blue"
            let del=document.createElement("button")
              del.innerText="Delete"
              del.addEventListener("click",function(index){
                   deletecart(index)
              })
              del.style.marginBottom="20px"

       div2.append(title,span,btn1,span2,btn2,p,p2,del)
       div2.style.marginLeft="15%"
      div.append(image,div2,div3)
       document.querySelector("#products").append(div)
    })
       
}

displayData(cartArr)

function deletecart(index){
    cartArr.splice(index,1)
    localStorage.setItem("cartProducts",JSON.stringify(cartArr))
    displayData(cartArr)
}

function displayCheckout(data){
    let total=0
    data.forEach(function(elem){
        document.querySelector("#total").innerText="Total Items : "+data.length;
        let price=Number(elem.quantity)*Number(elem.price)
        total=total+price;
       
        document.querySelector("#sub-total").innerText="Sub Total : ₹"+total+".00"
        document.querySelector("#cart").innerText="Cart Total : ₹"+total+".00"
    })
}
displayCheckout(cartArr)