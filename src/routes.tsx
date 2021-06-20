import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Characters from './pages/Characters';

import Home from './pages/Home';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/characters" component={Characters} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;