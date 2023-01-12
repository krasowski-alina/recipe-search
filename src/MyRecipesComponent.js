import check from "./check.png"
export default function MyRecipesComponent({label, calories, image, ingredients}){
    return(
        <div className="wrapper">
            <h2>{label}</h2>
            <h3>{calories.toFixed()} Calories</h3>
            <img src={image} alt="food"/>
            <ul className="list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <img src={check} alt="check mark" className="icon"/>
                    {ingredient}</li>
                ))}
            </ul>
        </div>
    )
}