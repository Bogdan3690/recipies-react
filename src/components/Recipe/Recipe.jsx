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

    const { image, name} = this.props.recipeItem

    return (
      <div>

        <Wrapper>
          <Img
            width={400}
            src={image}
            alt={name}
             onClick={this.onOpenModal}
          />
                     {this.state.isModalOpen && <Modal image={image} name={name} onClose={this.onCloseModal}/>}
        </Wrapper>
        <Title>
          <MdOutlineDriveFileRenameOutline /> {name}
        </Title>
        <button onClick={this.openMenu}>More info</button>
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
