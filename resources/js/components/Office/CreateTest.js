import React, {Component} from 'react';

export default class CreateTest extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row g-3 align-items-center pt-5">
                <div className="col-auto">
                    <input type="text" className="form-control" name="question" value={this.props.mass.question[0]}
                           onChange={(e)=>this.props.update(this.props.countTest,e)}/>
                </div>

                <div className="col-auto">
                    <input key="1a" type="text" name="answers[0].answer" className="form-control"
                           value={this.props.mass.answers[0].answer[0]} onChange={(e)=>this.props.update(this.props.countTest,e)}/>
                    <input key="2a" type="text" name="answers[1].answer" className="form-control"
                           value={this.props.mass.answers[1].answer[0]} onChange={(e)=>this.props.update(this.props.countTest,e)}/>
                    <input key="3a" type="text" name="answers[2].answer" className="form-control"
                           value={this.props.mass.answers[2].answer[0]} onChange={(e)=>this.props.update(this.props.countTest,e)}/>
                    <input key="4a" type="text" name="answers[3].answer" className="form-control"
                           value={this.props.mass.answers[3].answer[0]} onChange={(e)=>this.props.update(this.props.countTest,e)}/>
                </div>

                <div className="col-auto">
                    <div>
                        <input key="1c" className="" name="is_true" type="checkbox"
                               value={this.props.mass.answers[0].is_true} onChange={(e)=>this.props.update(this.props.countTest,e)} />
                    </div>
                    <div>
                        <input key="2c" className="" name="is_true" type="checkbox"
                               value={this.props.mass.answers[1].is_true}  onChange={(e)=>this.props.update(this.props.countTest,e)}/>
                    </div>
                    <div>
                        <input key="3c" className="" name="is_true" type="checkbox"
                               value={this.props.mass.answers[2].is_true} onChange={(e)=>this.props.update(this.props.countTest,e)} />
                    </div>
                    <div>
                        <input key="4c" className="" name="is_true" type="checkbox"
                               value={this.props.mass.answers[3].is_true} onChange={(e)=>this.props.update(this.props.countTest,e)} />
                    </div>
                </div>


            </div>
        );
    }
}









