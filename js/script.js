
const Conteiner = document.querySelector(".main-conteiner")
const Thanks = document.querySelector(".thank-you")
const Button = document.querySelector(".btn")
const ButtonSelect = document.querySelectorAll(".select")
const Note = document.getElementById("note")

ButtonSelect.forEach((ButtonSelect) =>{
    ButtonSelect.addEventListener("click", () =>{
        Note.innerHTML = ButtonSelect.innerHTML
        Button.addEventListener("click", () =>{
            Thanks.classList.remove("hidden")
            Conteiner.classList.add("hidden")
        })
    })
})

