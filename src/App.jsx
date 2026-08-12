
import './App.css'
import RecipeList from './components/RecipeList/RecipeList'
import recipes from './data/recipes.json'



function App() {


  return (
    <>
    <h1>Menu</h1>

<RecipeList recipes={recipes} />


    {/* {recipes && recipes.map((recipe, index) => (
      <li key={index}>
        <Recipe recipeItem={recipe} />
        <RecipeInfo recipe={recipe}/>
      </li>
    ))} */}

    </>
  )
}

export default App
