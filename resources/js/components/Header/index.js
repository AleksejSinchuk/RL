import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import Login from "../Registr/Login";
import Cookies from "js-cookie";

/* An example React component */
class Header extends Component {

    isLogin(){
        return (
            <div className="header">
                <div className="navbar navbar-light ">
                    <div className="container-fluid">
                        <nav className="nav">
                            <a className="nav-link" href="/">Домашняя</a>
                            <a className="nav-link" href="/">О нас</a>
                            <a className="nav-link" href="/">Партнери</a>
                            <a className="nav-link" href="/vacancy">Вакансии</a>
                            <a className="nav-link" href="/office">Личный кабинет</a>
                        </nav>
                        <div className="form">
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    isLogOut(){
        return (
            <div className="header">
                <div className="navbar navbar-light ">
                    <div className="container-fluid">
                        <nav className="nav">
                            <a className="nav-link" href="/">Домашняя</a>
                            <a className="nav-link" href="/">О нас</a>
                            <a className="nav-link" href="/">Партнери</a>
                        </nav>
                        <div className="form">
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if(Cookies.get('isLogin')==="1")
        return this.isLogin();
        return  this.isLogOut();

    }




}

export default Header;



