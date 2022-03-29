let fact=document.getElementById("fact")
let facttext=document.getElementById("factText")
let numberinput=document.getElementById("numberinput")

numberinput.addEventListener("input",getFact)


function getFact(){
    let number=numberinput.value

    let xhr=new XMLHttpRequest()
    xhr.open("GET","http://numbersapi.com/"+number)
    xhr.onload=function(){
    if(this.status==200 & number !=""){
        fact.style.display="block"
        facttext.innerText=this.responseText
    }
    }
    xhr.send()
}