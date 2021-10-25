const inputValue = document.querySelector('.input-value')
const outputValue = document.querySelector('.output-value')

inputValue.addEventListener("input",()=>{
    let userInputes = inputValue.value
    let arr = userInputes.split(' ')
    let tayyor =  arr.join("\n")
    outputValue.innerHTML = tayyor
})

