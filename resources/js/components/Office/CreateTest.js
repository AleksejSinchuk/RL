import React, {Component} from 'react';

export default class CreateTest extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }


    }

    render() {
        return(
            <div>
                  <div><label>Question</label></div>
                    <div><label>Answer <input className="form-check-input" type="checkbox"/></label></div>
                    <div><label>Answer <input className="form-check-input" type="checkbox"/></label></div>
                    <div><label>Answer <input className="form-check-input" type="checkbox"/></label></div>
                    <div><label>Answer <input className="form-check-input" type="checkbox"/></label></div>
            </div>
        ) ;


    }

//===============================================================================

}



