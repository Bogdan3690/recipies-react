
import './App.css'
import Recipe from './components/Recipe'
import RecipeInfo from './components/RecipeInfo'
import recipes from './data/recipes.json'




function App() {


  return (
    <>
    <h1>Menu</h1>
    {recipes && recipes.map((recipe, index) => (
      <li key={index}>
        <Recipe recipeItem={recipe} />
        <RecipeInfo recipe={recipe}/>
      </li>
    ))}
    </>
  )
}

export default App
