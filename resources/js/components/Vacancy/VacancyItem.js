import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class VacancyItem extends Component {

    render() {
        return (
            <div className="container pt-5">
                <NavLink to={`/vacancy/${this.props.vac.id}`}>
            <div className="alert alert-dark" role="alert">
            <div key={this.props.vac.id} className=" bg-light border-dark border-5 ">
                <div className=" text-center h-auto border-dark border-5 p-4">
                    <div className="row">
                        <div className="col-1">
                            <label>Описание</label>
                        </div>
                        <div className="col text-left"> {this.props.vac.description} </div>
                    </div>
                    <div className="row pt-2">
                    <div className="col-1">
                        <label>Дата</label>
                    </div>
                    <div className="col text-left"> {this.props.vac.date} </div>
                    </div>
                </div>
            </div>
            </div>
                </NavLink>
            </div>
                );
    }
}
