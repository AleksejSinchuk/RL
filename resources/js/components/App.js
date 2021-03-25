import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Vacancy from "./Vacancy/Vacancy";
import All from "./Vacancy/All";
import Welcome from "./Welcome/Welcome";
import er404 from "./Error/er404";
import Test from "./Test/Test";
import RegistrForm from "./Registr/RegistrForm";
import PrivateOffice from "./Office/PrivateOffice";






export default class Main extends Component {
    render() {
        return (
            <div id="backgr" >
                <div className="col"> <Header></Header></div>

                <div  className="content main col ">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Welcome}></Route>
                            <Route path="/vacancy/:id" component={Vacancy}></Route>
                            <Route path="/vacancy" component={All}></Route>
                            <Route path="/registr" component={RegistrForm}></Route>
                            <Route path="/office" component={PrivateOffice}></Route>

                            <Route path="/test/:id" component={Test}></Route>

                            <Route component={er404}></Route>
                        </Switch>
                    </Router>
                </div>
                <div className="col"><Footer></Footer></div>

            </div>
        );
    }
}


if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
