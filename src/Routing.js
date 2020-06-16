import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import LookRecipes from './LookRecipes/LookRecipes';
import BreakfastPage from './BreakfastPage/BreakfastPage';
import LunchPage from './LunchPage/LunchPage';
import DessertPage from './DessertPage/DessertPage'


function Routing(){
    return(
        <Switch>
            <Route exact path='/delish-recipes'>
                <Home/>
            </Route>
            <Route exact path='/LookRecipes'>
                <LookRecipes/>
            </Route>
            <Route exact path='/BreakfastPage'>
                <BreakfastPage/>
            </Route>
            <Route exact path='/LunchPage'>
                <LunchPage/>
            </Route>
            <Route exact path='/DessertPage'>
                <DessertPage/>
            </Route>
        </Switch> 
    )
}

export default Routing