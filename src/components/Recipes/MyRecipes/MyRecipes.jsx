import style from './MyRecipes.module.scss'

import { useState, useEffect, useContext } from 'react';

import { UserContext } from '../../../contexts/UserContext'

import * as recipesService from '../../../services/recipes';

import RecipeCard from '../RecipeCard/RecipeCard';

const MyRecipes = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [user] = useContext(UserContext)

    useEffect(() => {
        recipesService.getAll()
            .then(recipes => {
                recipes = recipes.filter(recipe => recipe.creator === user.uid);
                setRecipes(recipes);
            })
    }, []);


    return (
        <section>
            <div className={style.addedRecipes}>
                {
                    recipes.map(({
                        style,
                        _id,
                        imageURL,
                        name,
                    }) => {
                        return <RecipeCard key={_id} _id={_id} style={style} imageURL={imageURL} name={name} />
                    })
                }
            </div>

        </section>
    );
};

export default MyRecipes;