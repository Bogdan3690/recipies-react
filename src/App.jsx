import "./App.css";
import Button from "./components/Button/Button";
import RecipeList from "./components/RecipeList/RecipeList";
import recipes from "./data/recipes.json";

function App() {
  return (
    <>
      <h1>Menu</h1>

      <RecipeList recipes={recipes} />
      <Button />
    </>
  );
}

export default App;
