const inputRef = document.querySelector('#validation-input');
// console.log(inputRef);



inputRef.addEventListener('blur', (event) => { 
    const { dataset, value } = event.target
    const requeredValue = value.trim()
    if (requeredValue.length === Number(dataset.length)) {
        inputRef.classList.add("valid");
        inputRef.classList.replace("invalid", "valid")
    return
    }

    inputRef.classList.add("invalid")
})




