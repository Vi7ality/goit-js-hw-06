const inputRef = document.querySelector('#validation-input');
// console.log(inputRef);



inputRef.addEventListener('blur', (event) => { 
    const {dataset, value} = event.target
    if (value.length === Number(dataset.length)) {
        inputRef.classList.add("valid");
        inputRef.classList.replace("invalid", "valid")
    return
    }

    inputRef.classList.add("invalid")
})




