import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import VacancyItem from "../Vacancy/VacancyItem";
import QuestionItem from "./QuestionItem";



/* An example React component */
class Test extends Component {


    constructor(props) {
        super(props);
        this.state = {
            test: '',
            isLoaded: false,
            isErr: false,
            id: this.props.location.pathname.split('/')[2],
            questions: []
        }
        this.sendTest=this.sendTest.bind(this);

    }


    componentDidMount() {
        fetch("/api/v1/test/" + this.state.id)
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log("then: ");
                    //console.log(result);
                    if (!result.success) {
                        this.setState({
                            isErr: true,
                            isLoaded: true
                        })
                    } else {
                        this.setState({
                            isLoaded: true,
                            test: result.data[0]
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

    render() {
        // if(Cookies.get('isLogin')!=='1'){
        //     window.location='/'
        //     return ""
        // }
        if (!this.state.isLoaded) return (<div> Loading </div>);
        if (this.state.isErr) return (<div> IsError</div>);
        if (this.state.test === undefined) return (<div> undefined</div>);
        return this.renderTestForm();

    }

renderTestForm (){
    return(
        <div className="container">
            <form>
                <div>{this.state.test.name}</div>
                <table className="table table-dark border-0 border-bottom-0 border-top-0">
                    <tbody>
                    <tr>
                        { this.state.test.questions.map(item => (

                            <QuestionItem quest={item}></QuestionItem>
                        ))}
                    </tr>
                    </tbody>

                </table>
                <input type="button" value="SendTest" className="btn btn-primary" onClick={this.sendTest}/>
            </form>
        </div>

    )
}

sendTest(){

}

}
export default Test;



