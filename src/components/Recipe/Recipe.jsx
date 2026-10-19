import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Img, Title, Wrapper } from "./Recipe.styled";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import RecipeDifficulty from "../RecipeDifficulty/RecipeDifficulty";
import { Component } from "react";
import { Modal } from "../Modal/Modal";

class Recipe extends Component {
  state = {
    isOpen: false,
    isModalOpen: false,
  };

  openMenu = () => {
    this.setState({
    isOpen: true,
})
  }

  onOpenModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  onCloseModal = () => {
    this.setState({
      isModalOpen: false,
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
                     {this.state.isModalOpen && <Modal img={this.props.recipeItem.image} onClose={this.onCloseModal}/>}
                      <button onClick={this.onOpenModal}>Open Image</button>
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
