const input = document.querySelectorAll("button");
const output = document.querySelector("input");
console.log(input.innerText);
let sum = "";
input.forEach((button) => {
  button.addEventListener("click", function () {
    let inputValue = button.innerText;
    if (inputValue == "AC") {
      sum = "";
      output.value = sum;
    } else if (inputValue == "DC") {
      sum = sum.substring(0, sum.length - 1);
      output.value = sum;
    } else if(inputValue == "="){
sum = eval(sum);
output.value= sum;
    }else{
        sum = sum + inputValue;
        output.value = sum;
    }
   
    console.log(sum);
  });
});
