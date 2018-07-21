import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import {
    Home,
    NewFeature,
    Calendar,
    GoogleSheet,
    Rx,
    TUIEditor,
    DecoratorTest,
    Zzalbang,
    MaterialUI,
    ReselectExample,
} from './containers';


export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/new" component={NewFeature}/>
        <Route exact path="/calendar" component={Calendar}/>
        <Route exact path="/google-sheet" component={GoogleSheet}/>
        <Route exact path="/rx" component={Rx}/>
        <Route exact path="/editor" component={TUIEditor}/>
        <Route exact path="/decorator" component={DecoratorTest}/>
        <Route exact path="/decorator" component={DecoratorTest}/>
        <Route exact path="/zzalbang" component={Zzalbang}/>
        <Route exact path="/mui" component={MaterialUI}/>
        <Route exact path="/reselect" component={ReselectExample}/>
    </Switch>
);