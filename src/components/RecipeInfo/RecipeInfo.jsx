import { FaFire} from 'react-icons/fa';
import { MdTimer } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { InfoItem, InfoWrapper } from './RecipeInfo.styles';

const RecipeInfo = ( {recipe} ) => {
    return(
        <InfoWrapper>
            <InfoItem> <MdTimer /> {recipe.time}</InfoItem>
            <InfoItem> <GiKnifeFork /> {recipe.servings} </InfoItem>
            <InfoItem> <FaFire /> {recipe.calories}</InfoItem>
        </InfoWrapper>
    )
}

export default RecipeInfo