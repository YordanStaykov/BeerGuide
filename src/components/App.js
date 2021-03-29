import Header from './Header/Header'
import Main from './Main/Main'
import Login from './Login/Login'
import Register from './Register/Register'
import Footer from './Footer/Footer'
import Recipes from './Recipes/Recipes'
import RecipeAddForm from './Recipes/RecipeAddForm/RecipeAddForm'
import RecipeDetails from './Recipes/RecipeDetails/RecipeDetails'
import RecipeEdit from './Recipes/RecipeEdit/RecipeEdit'

import { Route, Switch, useHistory } from 'react-router-dom'
import { logoutUser } from '../services/user'

function App() {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/logout" render={() => {
            logoutUser()
            history.push('/')
          }} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/add" component={RecipeAddForm} />
          <Route path="/recipes/:id/details" component={RecipeDetails} />
          <Route path="/recipes/:id/edit" component={RecipeEdit} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
