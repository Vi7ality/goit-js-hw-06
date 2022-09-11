const categoriesEl = document.querySelectorAll("li.item");
console.log('Number of categories:', categoriesEl.length);


categoriesEl.forEach((item) => {

    // const text = item.firstElementChild.textContent
    // console.log('Category:', text)

    const itemTitle = item.querySelector("h2")
    console.log('Category:',itemTitle.textContent)

    const itemsList = item.querySelectorAll("li")
    console.log('Elements:', itemsList.length)


}
    )



