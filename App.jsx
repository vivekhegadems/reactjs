import React from 'react';
import TextField from 'material-ui/TextField';


class App extends React.Component {
	constructor(){
		super();
		this.state = {items: []}
	}
	componentWillMount(){
		fetch( 'http://swapi.co/api/people/?format=json' )
		.then( response => response.json() )
		.then( ({results: items}) => this.setState({items}))
	}
	filter(e){
		this.setState({filter: e.target.value})
	}
   render() {
		let items = this.state.items;
		if(this.state.filter){
		items = items.filter( item =>
			item.name.toLowerCase()
			.includes(this.state.filter.toLowerCase()))
		}
		return (
			<div>
				<h1>List Of the Names of the People</h1>
				
				<input type="text" 
				onChange={this.filter.bind(this)}/>
				{items.map(item => 
					<Person key={item.name} person={item} />)}
			</div>
		);
    }
}

const Person = (props) => <h4>{props.person.name}</h4>

const TextFieldNew => (
	<div>
		<TextField hintText="Hint Text" /><br/>
	</div>
);

export default App;