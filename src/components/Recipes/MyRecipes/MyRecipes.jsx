import style from "./MyRecipes.module.scss";

import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../../contexts/UserContext";

import * as recipesService from "../../../services/recipeServices";

import RecipeCard from "../RecipeCard/RecipeCard";

export default function MyRecipes(props) {
	const [recipes, setRecipes] = useState([]);
	const [user] = useContext(UserContext);

	useEffect(() => {
		recipesService
			.getAll()
			.then((recipes) => {
				recipes = recipes.filter(
					(recipe) => recipe.creator === user.uid
				);
				setRecipes(recipes);
			})
			.catch((err) => console.log(err));
	}, [user.uid]);

	return (
		<section>
			<div className={style.addedRecipes}>
				{recipes.map(({ style, _id, imageURL, name }) => {
					return (
						<RecipeCard
							key={_id}
							_id={_id}
							style={style}
							imageURL={imageURL}
							name={name}
						/>
					);
				})}
			</div>
		</section>
	);
}
