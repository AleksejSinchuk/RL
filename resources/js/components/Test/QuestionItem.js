import React, {Component} from 'react';
import AnswerItem from "./AnswerItem";


export default class QuestionItem extends Component {
    constructor(props) {
        super(props);
        }
        render(){

        {
            return (
                <div key={"quest"+this.props.quest.id}>

                       <td> <div> {this.props.quest.question}</div></td>
                    <td>
                    { this.props.quest.answers.map(item => (

                       <AnswerItem answ={item}></AnswerItem>
                    ))}
                    </td>
                </div>);
        }
    }
}
