
export default function MyRecipesComponent({label, calories, image}){
    return(
        <div>
            <h2>{label}</h2>
            <h3>{calories}</h3>
            <img src={image} alt="food"/>
        </div>
    )
}