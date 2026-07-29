import { FaFire} from 'react-icons/fa';
import { MdTimer } from "react-icons/md";
import { PiSteps } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";

const RecipeInfo = ( {recipe} ) => {
    return(
        <ul>
            <li> <MdTimer /> {recipe.time}</li>
            <li> <GiKnifeFork /> {recipe.servings} </li>
            <li> <FaFire /> {recipe.calories}</li>
            <li> <PiSteps /> {recipe.difficulty} </li>
        </ul>
    )
}

export default RecipeInfo