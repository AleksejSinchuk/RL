import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";


export default class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>

                <Footer></Footer>

            </div>
        );
    }
}


if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
