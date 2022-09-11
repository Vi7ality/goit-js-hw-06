function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes')

console.log(boxesRef)
const createBoxes = (amount) => {
  const box = '<div></div>';
  const boxesToAdd = box.repeat(amount)
  console.log(boxesToAdd)
  boxesRef.insertAdjacentHTML('beforeend', boxesToAdd)

}
let counter = 0

const addClasses = (() =>
  for (boxRef in boxesRef) {
  
  })

createBoxes(5);
addClasses();