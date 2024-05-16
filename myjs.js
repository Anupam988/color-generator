
let randomNumber=0
let randomCode=0
function getColor(){
    randomNumber = Math.floor(Math.random() * 16777215);
    randomCode= "#"+ randomNumber.toString(16);
    document.body.style.backgroundColor= randomCode;
    document.querySelector("#color-code").innerText= randomCode;

}

