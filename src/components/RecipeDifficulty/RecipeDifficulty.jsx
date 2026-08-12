import { PiSteps } from "react-icons/pi";

const RecipeDifficulty = ( {recipe} ) => {
    return(
        <p> <PiSteps /> {recipe.difficulty} </p>
    )
}

export default RecipeDifficulty