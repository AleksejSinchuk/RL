import QuestionItem from "./QuestionItem";
import React, {Component} from 'react';

export default class AnswerItem extends Component {
    constructor(props) {
        super(props);
    }


        render(){
        {
            return (

                <div key={"answ"+this.props.answ.id}>
                    <td> <div>{this.props.answ.answer}</div></td>
                    <td> <input className="form-check-input" type="checkbox" value={this.props.answ.id}id={"answer"+this.props.answ.id}/></td>
                </div>);
        }
    }
}
