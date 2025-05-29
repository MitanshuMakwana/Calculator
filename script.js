let input = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let string = "";
buttons.forEach(ele => {
    ele.addEventListener("click", (btn) => {
        if (btn.target.innerHTML === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (btn.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        } else if (btn.target.innerHTML === "DEL"){
            string=string.slice(0, -1);
            input.value = string;
        }
         else {
            string += btn.target.innerHTML;
            input.value = string;
            }
        });
    });