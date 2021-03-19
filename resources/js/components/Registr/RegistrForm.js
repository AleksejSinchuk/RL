import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class RegistrForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:  "",
            email: "",
            password: "",

        }
        this.onChange = this.onChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    createUser(e){

        let toSend = JSON.stringify({
            email: this.state.email,
            password: this.state.password
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
            <div>
                <form>
                    <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.onChange}/>
                    <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.onChange}/>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <input type="button" value="Login" onClick={this.createUser}/>
                </form>
            </div>
        )
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});

    }
}
