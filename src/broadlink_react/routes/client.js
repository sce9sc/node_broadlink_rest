

import React from 'react';
import ReactDom from 'react-dom';
import { Router,IndexRoute , Route, Link, browserHistory } from 'react-router'



import App from '../components/app'
import NoMatch from '../components/nomatch'

//Page imports
import AboutPage from '../components/Pages/About/about'
import MainPage from '../components/Pages/Main/main'
import TestPage from '../components/Pages/Test/test'




ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MainPage} />
            <Route path="about" component={AboutPage}/>
            <Route path="test" component={TestPage}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('root'))