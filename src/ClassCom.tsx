import{Component}from 'react';
interface propData{
    username:any
}
interface stateData{
    name:string,
    age:number,
    place:string
}
class ClassCom extends Component <propData, stateData>{
    constructor(props: propData){
        super(props)
        this.state={
            name:'Hariesh',
            age:20,
            place:'India'
        }
    }
    changeState=()=>{
        //alert('State is changed')
        this.setState({
            name:'Prasath',
            age:21,
            place:'India'
        })
    }
    render(){
        return(
            <>
                <h1>This is a class component</h1>
                <p>Username: {this.props.username}</p>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p>Place: {this.state.place}</p>
                <button className="btn btn-primary" onClick={this.changeState}>Change State</button>
            </>
        )
    }
}

export default ClassCom;