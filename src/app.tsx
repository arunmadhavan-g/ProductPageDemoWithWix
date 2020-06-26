import React from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import {MenuBar} from './components/MenuBar';
import {Col, Container, Row} from "wix-style-react";

import {ProductDetails} from './components/ProductDetails';

export interface AppProps {
}

const history = createBrowserHistory();
export const App: React.FC<AppProps> = () =>
    (
        <Router history={history}>
            <div style={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
                <Container>
                    <Row>
                        <Col>
                            <MenuBar/>
                        </Col>
                    </Row>
                    <Row>
                        <Switch>
                            <Route path="/" component={ProductDetails}/>
                        </Switch>
                    </Row>
                </Container>
            </div>
        </Router>
    );
