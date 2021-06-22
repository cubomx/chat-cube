import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// styles
import './styles/index.css';
// pages
import LogIn from './pages/LogIn.jsx';
import Layout from './Layout.jsx';

const App = ( ) => {
    return (  
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={LogIn}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

render(<App />, document.getElementById("app"))