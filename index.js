let string = "";
let duplicate = null;
let inptEL = document.getElementById("inpt")
const btns = document.querySelectorAll(".button");
const oper = document.getElementById("operators");

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      inptEL.value = string;
     
    }
    else if (e.target.innerHTML == 'C') {
      string = '';
      inptEL.value = string;
    }
    else {
      string = string + e.target.innerHTML;
      inptEL.value = string;
    }
  })

})

