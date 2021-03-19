import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class VacancyItem extends Component {

    render() {
        return (
            <div className="row justify-content-center h-75 pt-5">
            <div key={this.props.vac.id} className=" bg-light border-dark border-5 ">
                <div className=" text-center h-auto border-dark border-5 p-4">
                    <div> {this.props.vac.description}</div>
                    <div> {this.props.vac.date}</div>
                    <div><NavLink to={`/vacancy/${this.props.vac.id}`} className="btn btn-info">LinkToVacancy</NavLink></div>
                </div>
            </div>
            </div>
                );
    }
}
