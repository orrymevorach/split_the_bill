import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Main from './Main';
import notFound from './notFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/:restaurantName' component={Main}/>
                <Route component={notFound}/>
            </Switch>
        </BrowserRouter> 
    )
}

export default Router;
