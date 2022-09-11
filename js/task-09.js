function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.dir(getRandomHexColor)

const bodyRef = document.querySelector('body');
console.log(bodyRef);

const btnRef = document.querySelector('.change-color');
console.log(btnRef);

const colorRef = document.querySelector('.color');
console.log(colorRef)

const changeColor = () => {
  colorRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = colorRef.textContent;
  
  
}

btnRef.addEventListener('click', changeColor)

