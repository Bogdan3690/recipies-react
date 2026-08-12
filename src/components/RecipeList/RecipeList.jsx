import Recipe from "../Recipe/Recipe";
import { List, ListItem } from "./RecipeList.styled";

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes &&
        recipes.map((recipe, index) => (
          <ListItem key={index}>
            <Recipe recipeItem={recipe} />
          </ListItem>
        ))}
    </List>
  );
};

export default RecipeList;
