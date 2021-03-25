import React, {Component} from 'react';
import CreateTest from "./CreateTest";

export default class CreateVacancy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            town:"",
            components:[],
            description: "",
            countTest: 0,
                mass:[],
                quest: {
                    question: "",
                    answers: [
                        {answer: "", is_true: 0,},
                        {answer: "", is_true: 0,},
                        {answer: "", is_true: 0,},
                        {answer: "", is_true: 0,}
                    ]
                }

        }
        this.plusComponent=this.plusComponent.bind(this);
        this.onChange=this.onChange.bind(this);
        this.saveVacancy=this.saveVacancy.bind(this);

    }

//===============================================================================




     onChange(i,e){
         console.log("onBlockChange i: "+ i);
         console.log((e.target.name+": "+ e.target.value))
         const {name, value} = e.target;

         // for(let i = 0; i < this.state.mass.length; i++)
         //     console.log(this.state.mass[i])

         const arr=this.state.mass;
         const result=[
             ...arr.slice(0,i),
             {... arr[i], [name]: value},
            ...arr.slice(i+1)
         ];

         this.setState({mass: result});

     }


//===============================================================================
forTests(){

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
        this.setState({ countTest: this.state.countTest+1});
        this.state.mass.push(this.state.quest);
        this.state.components.push (<CreateTest countTest={this.state.countTest} update={this.onChange} mass={this.state.mass[this.state.countTest]}  />)
        console.log('+++++++++++++++++++++++++++++++++')
        for(let i = 0; i < this.state.mass.length; i++)
            console.log(this.state.mass[i])
    }

//===============================================================================

    render() {
       return(
               <div className='container '>

                        <form>
                            <div className='container '>
                       <input typeof="text" className="form-control rounded-pill" name="description" placeholder="description"/>
                       </div>
                            <div id="myScroll" className="overflow-auto ">
                       {this.countTests()}


                       <input type="button" value="CreateTestComponent" className="btn mt-5 bg-warning rounded-pill" onClick={this.plusComponent}/>


                            <div className="pt-5  text-right">
                                <input type="button"   value="SaveVacancy" className="btn bg-success rounded-pill" onClick={this.saveVacancy}/>
                            </div>
                       </div>
                   </form>
               </div>
           ) ;


    }

    //===============================================================================

saveVacancy(e){
    let toSendTest = JSON.stringify({
        name: "TestForTest",
        data: this.state.mass,

    });
    console.log(toSendTest);

    axios.post(
        '/api/v1/test/add',
        toSendTest,
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    )
        .then(response=> {
            console.log("Then response: ");
            console.log(response.data);
            window.location='/';
        })
        .catch(error=> {
            console.log("Catch Error: ");
            console.log(error);
        });

    e.preventDefault();
}





//===============================================================================






}
