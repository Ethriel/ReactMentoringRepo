import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { home, lesson1 } from './routes-directions';

import { LessonOne } from './routes-components';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={home} component={LessonOne}></Route>
            <Route exact path={lesson1} component={LessonOne}></Route>
        </Switch>
    );
};

export default Routes;