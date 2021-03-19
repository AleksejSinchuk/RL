import React, {Component} from 'react';
import Img from "../Error/404.png";


export default class er404 extends Component {
    render() {
        return (
            <div>
                <div className="content-lg container">
                    <img className="img-fluid max-width: 100%" src={Img}/>
                </div>
            </div>
        );
    }
}
