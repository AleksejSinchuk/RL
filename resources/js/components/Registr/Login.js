import React, {Component} from 'react';
import Cookies from 'js-cookie';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLogin: "1"

        }
        this.onChange = this.onChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.doLogOut = this.doLogOut.bind(this);
    }

    //===============================================================================

    doLogin(e) {

        let toSend = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });

        axios.post(
            '/api/v1/auth/login',
            toSend,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => {
                console.log("Then response: ");
                console.log(response.data);
                Cookies.set('isLogin', "1");
                Cookies.set('role_id', response.data.role_id);
                Cookies.set('name', response.data.name);
                Cookies.set('access_token', response.data.access_token);
                this.setState({isLogin: "1"})
                    window.location= window.location;
            }
            )


            .catch(error => {
                console.log("Catch Error: ");
                console.log(error);
            });

        e.preventDefault();
    }

//===============================================================================

    doLogOut(e) {

        Cookies.set('isLogin',"0")
        Cookies.set('role_id',"")
        this.setState(
            {isLogin: "1",
                password:""
            }
            )
        window.location= "/";
        e.preventDefault();
    }

//===============================================================================

    render() {
        if (Cookies.get('isLogin')===this.state.isLogin){
            return  this.renderFormLogout();
        }
        return this.renderForm();
    }

//===============================================================================

    renderFormLogout(){
        return(
            <div>
                <form>
                    <div><input type="button" value="??????????" className="btn btn-primary rounded-pill " onClick={this.doLogOut}/></div>
                </form>
            </div>
        )
    }

    renderForm() {
        return (
            <div>
                <form>
                    <div className="mb-3">
                    <input type="email" className="form-control rounded-pill bg-dark text-white " placeholder="??????????" name="email" value={this.state.email} onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                    <input type="password" className="form-control rounded-pill bg-dark text-white" placeholder="????????????" name="password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                   <div>
                       <input type="button" className="btn btn-primary rounded-pill" value="????????" onClick={this.doLogin}/>
                       <a className="nav-link" className="p-lg-0 m-lg-5" href="/registr">??????????????????????</a>
                   </div>

                </form>
            </div>
        )
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});

    }
}
