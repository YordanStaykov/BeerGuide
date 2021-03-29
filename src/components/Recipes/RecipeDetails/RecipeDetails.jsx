import { useEffect, useState } from "react";

import style from './RecipeDetails.module.scss';

import * as recipesService from "../../../services/recipes";


const RecipeDetails = ({
    match,
    history,
}) => {
    const [recipe, setRecipe] = useState({});

    let { id } = match.params

    useEffect(() => {
        recipesService.getOne(id)
            .then(recipe => setRecipe(recipe))
    }, [])


    const editBtnHandler = () => {
        history.push(`/recipes/${id}/edit`)
    };


    const deleteBtnHandler = () => {
        recipesService.deleteOne(id)
            .then(() => history.push('/recipes'))
    };

    return (
        <section >
            <div className={style.recipeArea}>
                <h1 className={style.underline}>{recipe.name}</h1>
                <img src={recipe.imageURL} alt="recipe image" />
                <h2><span className={style.underline}>Style: </span> {recipe.style}</h2>
                <h2><span className={style.underline}>Boiling Time: </span> {recipe.boilTime} min</h2>
                <hr />
                <h2 className={style.underline}>Ingredients:</h2>
                <hr />
                <h3><strong className={style.underline}>Malt: </strong><i>{recipe.malt}</i></h3>
                <h3><strong className={style.underline}>Hops: </strong><i>{recipe.hops}</i></h3>
                <h3><strong className={style.underline}>Yeast: </strong><i>{recipe.yeast}</i></h3>
                <hr />
                <h2 className={style.underline}>Preparation: </h2>
                <hr />
                <h3>{recipe.preparation}</h3>

                <div className={style.buttonContainer}>
                    <button className={style.editBtn} onClick={editBtnHandler}>Edit</button>
                    <button className={style.deleteBtn} onClick={deleteBtnHandler}>Delete</button>
                </div>
            </div>
        </section >
    );
};

export default RecipeDetails;