import video from './food.mp4';
import icon from './search.png';
import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = "c47fa7e3";
  const MY_KEY ="c38b7932774a3764ceedd1ee8157afac"
  const [mySearch, setMySearch ] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);
  const [word, setWord] = useState("avocado")

  useEffect(()=> {
    const findRecipe = async () =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json()
      setMyRecipe(data.hits)
      }
      findRecipe()
  },[word])


const myRecipeSearch = (e) => {
setMySearch(e.target.value)
console.log(e.target.value)
}
const preventDownload = (e) => {
  e.preventDefault();
  setWord(mySearch)
}
  return (
    <div className="App">
      <div className="container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className="container">
        <form onSubmit={preventDownload}>
          <input className="input" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
        </form>
      </div>
      <div className="container">
          <img 
            src={icon} alt="search" width="50px"/>
      </div>
    <div>
    {myRecipe.map((element, index) => (
    <MyRecipesComponent key={index} label={element.recipe.label}
    calories={element.recipe.calories} 
    image={element.recipe.image}
    ingredients={element.recipe.ingredientLines}/>
    ))}
    </div>
    

    </div>
  );
}

export default App;
