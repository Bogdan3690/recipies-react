import Recipe from "../Recipe"
import RecipeInfo from "../RecipeInfo"
import { List } from "./RecipeList.styled"


const RecipeList = ( {recipes} ) => {
    return(
        <List>
            {recipes && recipes.map((recipe, index) => (
      <li key={index}>
        <Recipe recipeItem={recipe} />
        <RecipeInfo recipe={recipe}/>
      </li>
    ))}
        </List>
    )
}

export default RecipeList