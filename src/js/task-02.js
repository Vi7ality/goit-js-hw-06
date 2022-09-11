const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);


const elements = ingredients.map(ingredient => {

const ingrItem = document.createElement("li");

ingrItem.textContent = ingredient;
ingrItem.classList.add("item");
  
  console.log(ingrItem);
  return ingrItem;
})

console.log(elements);
ingredientsList.append(...elements);