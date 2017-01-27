import React from 'react';



class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: 'Initial data....'
        }
        
        this.updateState = this.updateState.bind(this);
    };
    
    updateState() {
        this.setState({data: 'Data updated from child componant...'})
    }
    
    render() {
        return (
            <div>
                <Content myDataProp = {this.state.data} updateStateProp = {this.updateState} />
            </div>
        );
    }
}
   
class Content extends React.Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.updateStateProp}> Click for see</button>
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
}
                    
export default App;