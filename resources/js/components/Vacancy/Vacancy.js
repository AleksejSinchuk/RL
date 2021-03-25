import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import VacancyItem from "./VacancyItem";
import Cookies from "js-cookie";

export default class Vacancy extends Component {



    constructor(props){
        super(props);
        this.state = {
            vac : '',
            isLoaded: false,
            isErr: false,
            id: this.props.location.pathname.split('/')[2]
        }
        console.log("id " + this.state.id)

    }


    componentDidMount() {
        fetch("/api/v1/vacancy/"+this.state.id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("then: ");
                    console.log(result);
                    if (!result.success) {
                        this.setState({
                            isErr: true,
                            isLoaded: true
                        })
                    }
                    else {
                        this.setState({
                            isLoaded: true,
                            vac: result.data
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
        if (this.state.vac[0] === undefined) return (<div> undefined</div>);
        if(Cookies.get('isLogin')!== '1') {window.location='/'; return "";}
        if(Cookies.get('role_id')!== '2') {window.location='/'; return "";}
        let v = this.state.vac[0];
        return (
            <div className="container pt-5">
                <NavLink to={`/test/${v.idTest}`}>
                    <div className="alert alert-dark" role="alert">
                        <div key={v.id} className=" bg-light border-dark border-5 ">
                            <div className=" text-center h-auto border-dark border-5 p-4">
                                <div className="row">
                                    <div className="col-1">
                                        <label>Описание</label>
                                    </div>
                                    <div className="col text-left"> {v.description} </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col-1">
                                        <label>Дата</label>
                                    </div>
                                    <div className="col text-left"> {v.date} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>);
    }


}
