import React, {Component} from 'react';
import CreateVacancy from "./CreateVacancy";
import Cookies from "js-cookie";



export default class PrivateOffice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTest: "0",
        }

        this.getVacForm=this.getVacForm.bind(this);
    }

//===============================================================================


    getVacForm(){
        this.setState({isTest:"2"})
    }


//===============================================================================

    render() {
        console.log(Cookies.get('isLogin'));
        console.log(Cookies.get('role_id'));
        if(Cookies.get('isLogin')!== '1') {window.location='/'; return "";}
        if(Cookies.get('role_id')!== '3') {window.location='/'; return "";}

        if(this.state.isTest==="2")
            return this.doVacForm();
            return this.renderOffice();
    }

//===============================================================================

    renderOffice(){
        console.log( "Cooka isLogin: "+Cookies.get('isLogin'))
        return (
            <div>

                <div> <input type="button" value="CreateVacancy" className="btn btn-primary rounded-pill" onClick={this.getVacForm}/></div>
            </div>
        );
    }



    doVacForm(){
        return(
            <div>
                <form>
                    <CreateVacancy />


                </form>

            </div>
        );
    }


}
