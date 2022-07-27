const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
const container=document.getElementsByClassName('container');
console.log(container)


get_meal_btn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(res => {
      createMeal(res.meals[0]);
      console.log(res.meals[0]);
      
     


    
      
    });
  });

  const createMeal=(meal)=>{
    const ingredients=[];
    for(let i=1;i<=20;i++){
     
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
           

        }
        else{
            break;

        }
    }

    const newInnerHTML=
    `<div class="container1">
    <div class="box">
         <h2 class="line">Today's Dish</h2>
    <img class="image" src="${meal.strMealThumb}" alt="" width="400px " height="400px"> 
    </div>
  
    <div class="box1">

       ${meal.strCategory ?  `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
       ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
       ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
      
        <h2>Ingredients:-</h2>
            <ul>
            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        

    <p > <h4 class="block">${meal.strMeal}</h4>
    <p>${meal.strInstructions}</p></p>
    </div>

    ${meal.strYoutube ? `
    <div class="row">
      <h5>Video Recipe</h5>
      <div class="videoWrapper">
        <iframe width="1000" height="500"
        src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
        </iframe>
      </div>
    </div>` : ''}
  `;





meal_container.innerHTML = newInnerHTML;
}

  
  