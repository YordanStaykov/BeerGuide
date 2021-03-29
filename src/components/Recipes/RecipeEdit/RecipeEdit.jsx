import style from './RecipeEdit.module.scss'

import { useEffect, useState } from 'react';

import * as recipesService from '../../../services/recipes';

const RecipeEdit = ({
    match,
    history
}) => {
    const [recipe, setRecipe] = useState({})

    let { id } = match.params;

    useEffect(() => {
        recipesService.getOne(id)
            .then(recipe => setRecipe(recipe));
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const style = e.target.style.value;
        const imageURL = e.target.imageURL.value;
        const boilTime = e.target.boilTime.value;
        const malt = e.target.malt.value;
        const hops = e.target.hops.value;
        const yeast = e.target.yeast.value;
        const preparation = e.target.preparation.value;

        const recipe = {
            name,
            style,
            imageURL,
            boilTime,
            malt,
            hops,
            yeast,
            preparation,
        }

        recipesService.edit(id, recipe)
            .then(() => history.push('/recipes'))
    }


    return (
        //TODO Validations!!!!!

        < form onSubmit={submitHandler} >
            <div className={style.container}>
                <h1>Edit the recipe</h1>
                <hr />

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" defaultValue={recipe.name} name="name" id="name" required />

                <label htmlFor="style"><b>Style</b></label>
                <input type="text" defaultValue={recipe.style} name="style" id="style" required />

                <label htmlFor="imageURL"><b>Image URL</b></label>
                <input type="text" defaultValue={recipe.imageURL} name="imageURL" id="imageURL" required />

                <label htmlFor="boilTime"><b>Boiling Time</b></label>
                <input type="text" defaultValue={recipe.boilTime} name="boilTime" id="boilTime" required />


                <h2>Ingredients: </h2>
                <hr />


                <label htmlFor="malt"><b>Malt Type</b></label>
                <input type="text" defaultValue={recipe.malt} name="malt" id="malt" required />


                <label htmlFor="hops"><b>Hops Type</b></label>
                <input type="text" defaultValue={recipe.hops} name="hops" id="hops" required />

                <label htmlFor="yeast"><b>Yeast Type</b></label>
                <input type="text" defaultValue={recipe.yeast} name="yeast" id="yeast" required />

                <h2>Preparation: </h2>
                <hr />

                <textarea name="preparation" id="preparation" cols="100" rows="10" defaultValue={recipe.preparation}></textarea>

                <button type="submit" className={style.editBtn}>Edit</button>
            </div>
        </ form>
    );
};

export default RecipeEdit;