import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Img, Title, Wrapper } from "./Recipe.styled";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import RecipeDifficulty from "../RecipeDifficulty/RecipeDifficulty";

const Recipe = (props) => {
    return(
        <div>
            <Wrapper>
            <Img width={400} src={props.recipeItem.image} alt={props.recipeItem.name} />
            </Wrapper>
            <Title><MdOutlineDriveFileRenameOutline /> {props.recipeItem.name}</Title>    
        <RecipeInfo recipe={props.recipeItem}/>
        <RecipeDifficulty recipe={props.recipeItem}/>
        </div>
    )
}

export default Recipe