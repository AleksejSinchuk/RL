import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import Login from "../Registr/Login";
import Cookies from "js-cookie";

/* An example React component */
class Header extends Component {

    isLogin(){
        if(Cookies.get('role_id')=== '3') {
            return (<li className="nav-item"> <a className="nav-link text-white " href="/office">Личный кабинет</a>  </li>);
        }
        if(Cookies.get('role_id')=== '2')
        return (<li className="nav-item"> <a className="nav-link text-white" href="/vacancy">Вакансии</a></li>);

        return "";
    }

    isLogOut(){
        return (
            <div className="border-bottom border-white">
            <nav id="nav" className="navbar navbar-expand-md  navbar-light bg-none">

                <a href='/' className="navbar-brand">
                    <img  src='../img/logo.png' />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul  className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Blog</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Contact</a>
                        </li>

                        {this.isLogin()}

                    </ul>

                    <div className="nav-item" >
                        <div className="form">
                            <Login/>
                        </div>
                    </div>

                </div>


                </nav>
            </div>



        );
    }






    render() {

        return  this.isLogOut();

    }




}

export default Header;



