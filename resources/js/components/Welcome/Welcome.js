import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img from "./img1.jpg"



/* An example React component */
class Welcome extends Component {
    render() {
        return (
            <div className="text-center">
               <h1 className="align-content-center">Не остонавливайся на достигнутом!</h1>
                <img className="img-fluid max-width: 100%" src={Img}/>
            </div>
        );
    }


}
export default Welcome;
