import QuestionItem from "./QuestionItem";
import React, {Component} from 'react';

export default class AnswerItem extends Component {
    constructor(props) {
        super(props);
    }


        render(){
        {
            return (

                <div key={"answ"+this.props.answ.id} className="col mt-3">
                    <div className="row">
                    <div className="col-1 align-content-center">
                        <input id="myCheckbox2" className="form-check-input"  type="checkbox" value={this.props.answ.id}/>
                    </div>
                    <div className="col-9">
                     <div id="myInputAnsw">{this.props.answ.answer}</div>
                    </div>
                    </div>
                </div>);
        }
    }
}
