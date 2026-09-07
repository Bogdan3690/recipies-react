import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Img, Title, Wrapper } from "./Recipe.styled";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import RecipeDifficulty from "../RecipeDifficulty/RecipeDifficulty";
import { Component } from "react";

class Recipe extends Component {
  state = {
    isOpen: false,
  };

  openMenu = () => {
    this.setState({
    isOpen: true,
})
  }

  render() {
    return (
      <div>

        <Wrapper onClick={this.openMenu}>
          <Img
            width={400}
            src={this.props.recipeItem.image}
            alt={this.props.recipeItem.name}
          />
        </Wrapper>
        <Title>
          <MdOutlineDriveFileRenameOutline /> {this.props.recipeItem.name}
        </Title>
        {this.state.isOpen && (
          <>
            <RecipeInfo recipe={this.props.recipeItem} />
            <RecipeDifficulty recipe={this.props.recipeItem} />
          </>
        )}
      </div>
    );
  }
}

export default Recipe;
