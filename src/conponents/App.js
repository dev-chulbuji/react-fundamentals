import React from 'react';
import { hot } from 'react-hot-loader'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    render() {
        return (
            <div>
                <button onClick={()=> {this.setState({name: "velopert"})}}>Click</button>
                <h1>Hello!!!@!!!! {this.state.name}</h1>    
            </div>
        );
    }
}

export default hot(module) (App);

//export default App;
// module.export = App;