import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import Login from "../Registr/Login";
import Cookies from "js-cookie";

/* An example React component */
class Header extends Component {

    isLogin(){
        if(Cookies.get('role_id')=== '3') {
            return (<a className="nav-link btn btn-primary m-lg-3" href="/office">Личный кабинет</a>);
        }
        if(Cookies.get('role_id')=== '2')
        return (<a className="nav-link btn btn-primary m-lg-3" href="/vacancy">Вакансии</a>);

        return "";
    }

    isLogOut(){
        return (
            <div className="header">
                <div className="navbar navbar-light ">
                    <div className="container-fluid">
                        <nav className="nav">
                            <a className="nav-link btn btn-primary m-lg-3" href="/">Домашняя</a>
                            <a className="nav-link btn btn-primary m-lg-3" href="/">О нас</a>
                            <a className="nav-link btn btn-primary m-lg-3" href="/">Партнери</a>
                            {this.isLogin()}
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

        return  this.isLogOut();

    }




}

export default Header;



