import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class RegistrForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:  "",
            email: "",
            password: "",
            role_id:999,

        }
        this.onChange = this.onChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    createUser(e){

        let toSend = JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            role_id: this.state.role_id,

        });
        console.log(toSend);

        axios.post(
             '/api/v1/users/add',

            toSend,
            {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response=> {
                console.log("Then response: ");
                console.log(response.data);
                window.location='/';
            })
            .catch(error=> {
                console.log("Catch Error: ");
                console.log(error);
            });

        e.preventDefault();
    }


    render(){

        return this.renderForm()

    }

    renderForm() {
        return (
            <div className="container pt-5">
                <form className="h-50">
                    <div className="mb-3">
                    <input type="text" placeholder="Имя" className="form-control rounded-pill bg-dark text-white" name="name" value={this.state.name} onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                    <input type="email" placeholder="Почта" className="form-control rounded-pill bg-dark text-white" name="email" value={this.state.email} onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                    <input type="password" placeholder="Пароль" className="form-control rounded-pill bg-dark text-white" name="password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Role" className="form-control rounded-pill bg-dark text-white" name="role_id" value={this.state.role_id} onChange={this.onChange}/>
                    </div>
                    <input type="button" className="btn btn-primary rounded-pill bg-dark text-white" value="Регистрация" onClick={this.createUser}/>
                </form>
            </div>



        )
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});

    }
}
