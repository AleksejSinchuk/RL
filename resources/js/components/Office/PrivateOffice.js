import React, {Component} from 'react';
import CreateVacancy from "./CreateVacancy";



export default class PrivateOffice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTest: "0",
        }

        this.getVacForm=this.getVacForm.bind(this);
        this.saveVacancy=this.saveVacancy.bind(this);
    }

//===============================================================================


    getVacForm(){
        this.setState({isTest:"2"})
    }


//===============================================================================

    render() {

        // if(Cookies.get('isLogin')!=='1'){
        //     window.location='/'
        //     return ""
        // }

        if(this.state.isTest==="2")
            return this.doVacForm();
            return this.renderOffice();
    }

//===============================================================================

    renderOffice(){
        return (
            <div>

                <div> <input type="button" value="CreateVacancy" className="btn btn-primary" onClick={this.getVacForm}/></div>
            </div>
        );
    }



    doVacForm(){
        return(
            <div>
                <form>
                    <CreateVacancy />
                    <div className="pt-5">
                        <input type="button" value="SaveVacancy" className="btn btn-primary" onClick={this.saveVacancy}/>
                    </div>

                </form>

            </div>
        );
    }

    saveVacancy(){
        console.log("saveVacancyButton")
    }

}
