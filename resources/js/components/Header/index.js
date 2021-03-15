import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"

/* An example React component */
class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-light ">
                    <div className="container-fluid">
                        <nav className="nav">
                        <a className="nav-link" href="/">Домашня</a>
                        <a className="nav-link" href="/">Про нас</a>
                        <a className="nav-link" href="/">Партнери</a>
                        </nav>
                        <div className="form">

                            <form className="form-horizontal" role="form" method="POST">
                                <div className="form-group">
                                    <div className="form-group">
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" placeholder="Логин"
                                                   name="login"></input>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" placeholder="Пароль"
                                                   name="password"></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <button type="submit" className="btn btn-default btn-sm">Войти</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default Header;



