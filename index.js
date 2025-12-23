var number = document.querySelectorAll("button");
var result = document.getElementById('result')
var input =  document.querySelector("input")
for (var i = 0; i<number.length; i++){
    number[i].addEventListener("click", function(number_click){
        var number_click = this.textContent;
        if (this.classList.contains("num")){
          input.value += number_click;
        }
        if(this.classList.contains("operator")){
          input.value += number_click;
        }
        if(this.classList.contains("equal")){
          input.value = eval(input.value);
        }
        if(this.classList.contains("decimalPoint")){
          input.value += number_click
        }
      
       switch (number_click) {
        case "C":
           clearCalc();
            break;
       case "DEL":
      delBtn();
      break;
        default:
            break;
       }
       //to display the result below the operation
       resultView();
       animation(number_click)
    })
   
}
//for clear calculator input
function clearCalc() {
     input.value = "";
}
//for delete values
function delBtn() {
      input.value = input.value.slice(0, -1);
     //   console.log(input.value)
}

  //to display the result below the operation
function resultView(){
 result.textContent = eval(input.value);
    document.querySelector(".equal").addEventListener("click", ()=>{
     result.textContent = "";
    })
}
