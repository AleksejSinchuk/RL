import React, {Component} from 'react';

export default class CreateTest extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return(
        <div className="row g-3 align-items-center pt-5">
              <div className="col-auto">
                  <input type="text" id="" className="form-control" placeholder="Question" />
              </div>

                <div className="col-auto">
                    <input type="text" id="" className="form-control" placeholder="Answer" />
                    <input type="text" id="" className="form-control" placeholder="Answer" />
                    <input type="text" id="" className="form-control" placeholder="Answer" />
                    <input type="text" id="" className="form-control" placeholder="Answer" />
                </div>

                <div className="col-auto">
                        <div >
                            <input className="" type="checkbox"/>
                        </div>
                        <div>
                            <input className="" type="checkbox"/>
                        </div>
                        <div>
                            <input className="" type="checkbox"/>
                        </div>
                    <div>
                        <input className="" type="checkbox"/>
                    </div>
                </div>


        </div>
        );
    }



}



