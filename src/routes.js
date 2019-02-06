import React from 'react';
import {Switch, Route} from 'react-router-dom';
//Components
import MysteryComponent from './Components/MysteryComponent/MysteryComponent';

export default <Switch>
    <Route path='/' component={MysteryComponent} />
</Switch>