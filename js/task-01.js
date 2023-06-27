const categoriesList = document.getElementById("categories");
const categories = document.querySelectorAll(".item");
const numberOfCategories = categories.length; 
console.log(`number of categories: ${numberOfCategories}`);

for (let i = 0; i < numberOfCategories; i++) {
    const category = categories[i];
    const tittle = category.querySelector("h2").textContent
    const elements = category.querySelectorAll("li").length
    console.log("category: " + tittle)
    console.log("elements: " + elements)
}

