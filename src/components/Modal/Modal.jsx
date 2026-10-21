import { Component } from "react";
import { ModalContent, Wrapper, CloseBtn  } from "./Modal.styled";
import { createPortal } from "react-dom";

export class Modal extends Component {


    handleBgClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose()
        }
    }

    onEsc = (e) => {
            console.log(e.code);
    if (e.code === 'Escape') {
        this.props.onClose()
    }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.onEsc)
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.onEsc)
    }

    render(){


    const {image, name, onClose} = this.props

         return createPortal (
            <Wrapper onClick={this.handleBgClick}>
                <ModalContent>
                    <img src={image} alt={name}/>
                    <CloseBtn  onClick={onClose}>X</CloseBtn>
                </ModalContent>
            </Wrapper> ,
            document.body
        )
    }
}