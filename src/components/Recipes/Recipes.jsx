import style from './Recipes.module.scss';

import { useState, useEffect } from 'react';

import * as recipesService from '../../services/recipes';

import RecipeCard from './RecipeCard/RecipeCard';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipesService.getAll()
            .then(recipes => setRecipes(recipes))
    }, []);

    return (
        <section>
            <div className={style.addedRecipes}>
                {
                    recipes.map(({
                        boilTime,
                        hops,
                        malt,
                        method,
                        style,
                        yeast,
                        _id,
                        imageURL,
                        name,
                    }) => {
                        return <RecipeCard key={_id} _id={_id} boilTime={boilTime} hops={hops} malt={malt} method={method} style={style} yeast={yeast} imageURL={imageURL} name={name} />
                    })
                }
            </div>

        </section>
    );
};

export default Recipes;