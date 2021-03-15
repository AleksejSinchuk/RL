import React, {Component} from 'react';
import Content from "../Content";
import Footer from "../Footer";


export default class Index extends Component {



    constructor(props){
        super(props);
        this.state = {
           vac : '',
        }
    }


    doRead() {
        fetch("/api/v1/vacancy")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("then: ");
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        vac: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }



    render() {
        return (
            <div>
              VACANCY!!!!np
            </div>
        );
    }
}
