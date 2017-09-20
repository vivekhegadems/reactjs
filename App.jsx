import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    constructor() {
        super();
        this.state = {items: []}
    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(({results: items}) => this.setState({items}))
    }

    filter(e) {
        this.setState({filter: e.target.value})
    }

    render() {
        let items = this.state.items;
        if (this.state.filter) {
            items = items.filter(item =>
                item.name.toLowerCase()
                    .includes(this.state.filter.toLowerCase()))
        }
        return (
            <MuiThemeProvider>
                <div>
                    <h1>List Of the Names of the People</h1>
                    <TextField hintText="Hint Text"/><br/>
                    <input type="text"
                           onChange={this.filter.bind(this)}/>
                    {items.map(item =>
                        <Person key={item.name} person={item}/>)}
                </div>
            </MuiThemeProvider>
        );
    }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default App;