const inputRef = document.querySelector("#font-size-control")


const spanTextRef = document.querySelector("#text")


spanTextRef.style.fontSize = "56px";
console.log(spanTextRef.style.fontSize);

inputRef.addEventListener('input', (event) => {
    spanTextRef.style.fontSize = `${event.currentTarget.value}px`
})

