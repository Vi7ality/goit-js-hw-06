const decrementBtnRef = document.querySelector("[data-action=decrement]");
// console.log(decrementBtnRef);

const incrementBtnRef = document.querySelector("[data-action=increment]");
// console.log(incrementBtnRef);

const btnValueRef = document.querySelector("#value");
// console.log(btnValueRef);

let counterValue = 0;

decrementBtnRef.addEventListener('click', () => {
    counterValue -= 1
    btnValueRef.textContent = counterValue;
}
)

incrementBtnRef.addEventListener('click', () => {
    counterValue += 1
    btnValueRef.textContent = counterValue;
}
)

