import { Component } from "react";
import { ModalContent, Wrapper, CloseBtn  } from "./Modal.styled";
import { createPortal } from "react-dom";

export class Modal extends Component {


    render(){

         return createPortal (
            <Wrapper>
                <ModalContent>
                    <img src={this.props.img} alt="" />
                    <CloseBtn  onClick={this.props.onClose}>X</CloseBtn>
                </ModalContent>
            </Wrapper> ,
            document.body
        )
    }
}