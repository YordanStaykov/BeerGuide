import style from './RecipeAddForm.module.scss'

import * as recipesService from '../../../services/recipes'

import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../../contexts/UserContext'

import { validateRecipe } from '../../../helpers';

const RecipeAddForm = ({ history }) => {
    const [user] = useContext(UserContext);
    const [error, setError] = useState('');


    useEffect(() => {
        if (!user) {
            return history.push('/')
        }
    }, [])

    function submitHandler(e) {
        e.preventDefault();

        const name = e.target.name.value;
        const style = e.target.style.value;
        const imageURL = e.target.imageURL.value;
        const boilTime = e.target.boilTime.value;
        const malt = e.target.malt.value;
        const hops = e.target.hops.value;
        const yeast = e.target.yeast.value;
        const preparation = e.target.preparation.value;
        const creator = user.uid;

        const recipe = { name, style, imageURL, boilTime, malt, hops, yeast, preparation, creator, };

        if (validateRecipe(recipe, setError)) {
            recipesService.create(recipe)
                .then(() => history.push('/recipes'))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            < form onSubmit={submitHandler} >

                <div className={style.container}>
                    <span className={style.errorBox}>
                        {error ? error : ''}
                    </span>
                    <h1>Add a recipe</h1>
                    <hr />

                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" id="name" required />

                    <label htmlFor="style"><b>Style</b></label>
                    <input type="text" placeholder="Enter Style" name="style" id="style" required />

                    <label htmlFor="imageURL"><b>Image URL</b></label>
                    <input type="text" placeholder="Enter Image URL" name="imageURL" id="imageURL" required />

                    <label htmlFor="boilTime"><b>Boiling Time</b></label>
                    <input type="text" placeholder="Enter Boiling Time" name="boilTime" id="boilTime" required />


                    <h2>Ingredients: </h2>
                    <hr />


                    <label htmlFor="malt"><b>Malt Type</b></label>
                    <input type="text" placeholder="Enter Malt Type" name="malt" id="malt" required />


                    <label htmlFor="hops"><b>Hops Type</b></label>
                    <input type="text" placeholder="Enter Hops Type" name="hops" id="hops" required />

                    <label htmlFor="yeast"><b>Yeast Type</b></label>
                    <input type="text" placeholder="Enter Yeast Type" name="yeast" id="yeast" required />

                    <h2>Preparation: </h2>
                    <hr />

                    <textarea name="preparation" id="preparation" cols="100" rows="10"></textarea>

                    <button type="submit" className={style.createBtn}>Create Recipe</button>
                </div>
            </ form>
        </>
    );
};

export default RecipeAddForm;