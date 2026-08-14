import { Btn } from "./Buttton.styled"

const Button = ( {recipe} ) => {
    return(
        <>
        <Btn>Click me</Btn>
        <Btn active="true">Click me active</Btn>
        </>
    )
}

export default Button