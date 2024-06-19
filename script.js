let display = document.querySelector("input")
console.log(display)
let buttons = document.querySelectorAll("button")
console.log(buttons)
let string = ""

let buttonsArray = Array.from(buttons)
console.log(buttonsArray)
buttonsArray.forEach((btn) => { 


    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "DE") {
            string = string.slice(0, string.length - 1)
            display.value = string
        }
        else if (e.target.innerHTML == "AC") {
            string = ""
            display.value = string
        }
        else if (e.target.innerHTML == "=") {
            string = eval(string)
            display.value = string
        }
        else {
            string = string + (e.target.innerHTML)
            display.value = string
        }


    })
})