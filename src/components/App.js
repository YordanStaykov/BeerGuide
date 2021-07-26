import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect, useContext } from "react";

import { UserContext } from "../contexts/UserContext";

import { auth } from "../config/firebase";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Footer from "./Footer/Footer";
import Recipes from "./Recipes/Recipes";
import RecipeAddForm from "./Recipes/RecipeAddForm/RecipeAddForm";
import RecipeDetails from "./Recipes/RecipeDetails/RecipeDetails";
import RecipeEdit from "./Recipes/RecipeEdit/RecipeEdit";
import MyRecipes from "./Recipes/MyRecipes/MyRecipes";
import ErrorPage from "./ErrorPage/ErrorPage";

const App = () => {
	const [user, setUser] = useContext(UserContext);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				let { email, uid } = user;
				setUser({ email, uid });
			} else {
				setUser(null);
			}
		});
	}, []);

	return (
		<>
			<Header />
			<div className="container">
				<Switch>
					<Route path="/" exact component={Main} />
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
			<Footer />
		</>
	);
};

export default App;
