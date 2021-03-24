import React, {Component} from 'react';
import CreateTest from "./CreateTest";

export default class CreateVacancy extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        //this.state.mass.push(this.state.quest);
        //this.state.components.push (<CreateTest countTest={this.state.countTest} update={this.onChange} mass={this.state.mass[this.state.countTest]}  />)

    }

//===============================================================================




     onChange(i,e){
        // console.log("onBlockChange i: "+ i);
         //console.log((e.target.name+": "+ e.target.value))
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

         console.log("maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssss")
         for(let i = 0; i <this.state.mass.length; i++)
             console.log(this.state.mass[i])
     }


//===============================================================================
forTests(){
    console.log("maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssss")
    for(let i = 0; i <this.state.mass.length; i++)
        console.log(this.state.mass[i])
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
               <div>

                        <form>
                            <div className='container'>
                       <input typeof="text" className="form-control" name="description" placeholder="description"/>
                       </div>
                       {this.countTests()}


                       <input type="button" value="CreateTestComponent" className="btn btn-primary mt-5" onClick={this.plusComponent}/>

                   </form>
               </div>
           ) ;


    }

    //===============================================================================

         handleChange(event) {
             setName(event.target.value);
         }
         handleAdd() {
             const newList = list.concat({ name });

             setList(newList);
        }






//===============================================================================






}
