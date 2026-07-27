const Recipe = (props) => {
    return(
        <div>
            <img width={400} src={props.recipeItem.image} alt={props.recipeItem.name} />
            <h3>{props.recipeItem.name}</h3>
        </div>
    )
}

export default Recipe