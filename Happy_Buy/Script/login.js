
let arr=JSON.parse(localStorage.getItem("signup"))
console.log(arr)

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    let email=document.querySelector("#email").value
    let pwd=document.querySelector("#pwd").value
    let flag=false;
    arr.forEach((elem)=>{
        if(email===elem.email && pwd===elem.pwd){
            flag=true;
        } 
    })
    if(flag==true){
        alert("Login Sucessful")
    }else{
        alert("Enter Correct Id and Password")
    }
})