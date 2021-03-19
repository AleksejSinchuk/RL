import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Footer extends Component {
    render() {
        return (

            <div className="footer" >
                <nav className="nav">
                    <a className="nav-link" href="/">О нас</a>
                    <a className="nav-link" href="/">Партнеры</a>
                </nav>
            </div>
        );
    }
}

export default Footer;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

