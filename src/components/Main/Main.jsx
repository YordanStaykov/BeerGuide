import style from "./Main.module.scss";

import { Redirect, Route, Switch } from "react-router-dom";

import { auth } from "../../config/firebase";

import {
	Home,
	Login,
	Register,
	RecipeAddForm,
	RecipeEdit,
	RecipeDetails,
	Recipes,
	MyRecipes,
	ErrorPage,
} from "../";

export default function Main() {
	return (
		<div className={style.container}>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/auth/login" component={Login} />
				<Route path="/auth/register" component={Register} />
				<Route
					path="/auth/logout"
					render={() => {
						auth.signOut();
						return <Redirect to="/" />;
					}}
				/>
				<Route path="/recipes" exact component={Recipes} />
				<Route path="/recipes/add" component={RecipeAddForm} />
				<Route
					path="/recipes/:id/details"
					exact
					component={RecipeDetails}
				/>
				<Route path="/recipes/:id/edit" component={RecipeEdit} />
				<Route path="/recipes/mine" component={MyRecipes} />
				<Route path="*" component={ErrorPage} />
			</Switch>
		</div>
	);
}
