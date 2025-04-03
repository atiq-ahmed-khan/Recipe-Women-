import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipePage from './components/RecipePage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/recipes/:id" component={RecipePage} />
                <Route path="/products" component={ProductList} />
                {/* Add other routes here */}
            </Switch>
        </Router>
    );
};

export default App;
