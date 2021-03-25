import React, {Component} from 'react';
import AnswerItem from "./AnswerItem";


export default class QuestionItem extends Component {
    constructor(props) {
        super(props);
        }
        render(){

        {
            return (
                <div key={"quest"+this.props.quest.id} >

                        <div className="row mt-5 text-center text-white bg-success rounded-pill"> {this.props.quest.question}</div>

                    { this.props.quest.answers.map(item => (

                       <AnswerItem answ={item}></AnswerItem>
                    ))}

                </div>);
        }
    }
}
