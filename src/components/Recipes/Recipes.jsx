import style from "./Recipes.module.scss";

import { useState, useEffect } from "react";

import * as recipesService from "../../services/recipes";

import RecipeCard from "./RecipeCard/RecipeCard";

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		recipesService
			.getAll()
			.then((recipes) => setRecipes(recipes))
			.catch((err) => console.log(err));
	}, []);

	return (
		<section>
			<div className={style.addedRecipes}>
				{recipes.length > 0 ? (
					recipes.map(({ style, _id, imageURL, name }) => {
						return (
							<RecipeCard
								key={_id}
								_id={_id}
								style={style}
								imageURL={imageURL}
								name={name}
							/>
						);
					})
				) : (
					<h1>
						No recipes to show at the moment. Feel free to add one
					</h1>
				)}
			</div>
		</section>
	);
};

export default Recipes;
