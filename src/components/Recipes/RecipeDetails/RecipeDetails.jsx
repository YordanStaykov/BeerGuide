import { useEffect, useState } from "react";

import style from "./RecipeDetails.module.scss";

import * as recipesService from "../../../services/recipeServices";

import { useContext } from "react";

import { UserContext } from "../../../contexts/UserContext";

export default function RecipeDetails({ match, history }) {
	const [recipe, setRecipe] = useState({});
	const [isMine, setIsMine] = useState(false);
	const [user] = useContext(UserContext);

	let { id } = match.params;

	useEffect(() => {
		recipesService
			.getOne(id)
			.then((recipe) => {
				setRecipe(recipe);
				if (user && recipe.creator === user.uid) {
					setIsMine(true);
				}
			})
			.catch((err) => console.log(err));
	}, [id, user]);

	const editBtnHandler = () => {
		history.push(`/recipes/${id}/edit`);
	};

	const deleteBtnHandler = () => {
		recipesService.deleteOne(id).then(() => history.push("/recipes"));
	};

	const onBackButtonClickHander = (e) => {
		e.preventDefault();
		history.push("/recipes");
	};

	return (
		<section>
			<div className={style.recipeArea}>
				<h1 className={style.underline}>{recipe.name}</h1>
				<img src={recipe.imageURL} alt="your img here" />
				<h2>
					<span className={style.underline}>Style: </span>{" "}
					{recipe.style}
				</h2>
				<h2>
					<span className={style.underline}>Boiling Time: </span>{" "}
					{recipe.boilTime} min
				</h2>
				<hr />
				<h2 className={style.underline}>Ingredients:</h2>
				<hr />
				<h3>
					<strong className={style.underline}>Malt: </strong>
					<i>{recipe.malt}</i>
				</h3>
				<h3>
					<strong className={style.underline}>Hops: </strong>
					<i>{recipe.hops}</i>
				</h3>
				<h3>
					<strong className={style.underline}>Yeast: </strong>
					<i>{recipe.yeast}</i>
				</h3>
				<hr />
				<h2 className={style.underline}>Preparation: </h2>
				<hr />
				<h3>{recipe.preparation}</h3>

				{isMine ? (
					<div className={style.buttonContainer}>
						<button
							className={style.editBtn}
							onClick={editBtnHandler}
						>
							Edit
						</button>
						<button
							className={style.deleteBtn}
							onClick={deleteBtnHandler}
						>
							Delete
						</button>
					</div>
				) : (
					""
				)}
				{/* <Link to="/recipes">Back</Link> */}
				<button
					className={style.backBtn}
					onClick={onBackButtonClickHander}
				>
					Back
				</button>
			</div>
		</section>
	);
}
