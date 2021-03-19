import React, {Component} from 'react';
import CreateTest from "./CreateTest";

export default class CreateVacancy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countTest: 1,
            components:[],
        }
        this.plusComponent=this.plusComponent.bind(this);

    }

//===============================================================================
forTests(){

    for (let i = 0; i < this.state.countTest; i++){
        this.state.components.push(<CreateTest />)
    }
    return(
       <div>
           {this.state.components.map(comp => comp)}
       </div>
    );
}

countTests(){


   return(
       <div>
           <div>
               {this.forTests()}
           </div>


       </div>

   );

}


    plusComponent(){
        this.setState({countTest: 1})
    }

//===============================================================================

    render() {
       return(
               <div>
                   <form>
                       <input typeof="text" name="description"/>

                       {this.countTests()}

                       <input type="button" value="CreateTestComponent" onClick={this.plusComponent}/>
                   </form>
               </div>
           ) ;


    }

//===============================================================================






}
