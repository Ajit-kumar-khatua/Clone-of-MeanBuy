
let cardNumber="1111222233334444"
let date="2024-12-6"
let cvv="123"

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault()
    let cardNumber2=document.querySelector("#card-number").value;
    let name=document.querySelector("#name").value;
    let date2=document.querySelector("#date").value;
    let cvv2=document.querySelector("#cvv").value;
    if(cardNumber2===cardNumber && cvv2===cvv){
        alert("Payment Sucessful")
        localStorage.removeItem("cartProducts");
        window.location.href="./index.html"
    }else{
        alert("Wrong Credentials")
    }
    console.log(cardNumber2,name,date,cvv2)
})