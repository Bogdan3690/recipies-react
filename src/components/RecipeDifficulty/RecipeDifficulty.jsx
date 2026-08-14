// import { PiSteps } from "react-icons/pi";
import { TextArea, Text, Level } from "./RecipeDiffuculty.styled";

const RecipeDifficulty = ({ recipe }) => {
  return (
    <TextArea>
      <Text>Difficulty</Text>

      <Level active={recipe.difficulty === 0}>
        Easy
      </Level>

      <Level active={recipe.difficulty === 1}>
        Medium
      </Level>

      <Level active={recipe.difficulty === 2}>
        Hard
      </Level>
    </TextArea>
  );
};

export default RecipeDifficulty;