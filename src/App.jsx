
import './App.css'
import Recipe from './components/Recipe'
import recipes from './data/recipes.json'
import { FaFire} from 'react-icons/fa';
import { MdTimer } from "react-icons/md";
import { PiSteps } from "react-icons/pi";
import { GiKnifeFork } from "react-icons/gi";


function App() {


  return (
    <>
    <h1>Menu</h1>
    {recipes && recipes.map((recipe, index) => (
      <li key={index}>
        <Recipe recipeItem={recipe} /> <GiKnifeFork />  <FaFire /> <PiSteps /> <MdTimer/>
      </li>
    ))}
    </>
  )
}

export default App
