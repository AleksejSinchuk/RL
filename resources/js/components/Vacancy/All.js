import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import VacancyItem from "./VacancyItem";
import Cookies from "js-cookie";

export default class All extends Component {



    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            isErr: false,
            items: []
        }
    }


    componentDidMount() {
        fetch("/api/v1/vacancy")
            .then(res => res.json())
            .then(
                (result) => {
                    if (!result.success) {
                        this.setState({
                            isErr: true,
                            isLoaded: true
                        })
                    }
                    else {
                        this.setState({
                            isLoaded: true,
                            items: result.data[0]
                        });
                    }

                },
                (error) => {
                    this.setState({
                        isErr: true,
                        error
                    });
                }
            )

    }

    render(){
        if (!this.state.isLoaded) return (<div> Loading </div>);
        if (this.state.isErr) return (<div> IsError</div>);
        if (this.state.items[0] === undefined) return (<div> undefined</div>);
        if(Cookies.get('isLogin')!== '1') {window.location='/'; return "";}
        if(Cookies.get('role_id')!== '2') {window.location='/'; return "";}

        return (
            <div >
                { this.state.items.map(item => (
                    <VacancyItem vac={item}></VacancyItem>
                ))}
            </div>
        );
    }


}
