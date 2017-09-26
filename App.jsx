import React from 'react';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';

import ActionInfo from 'material-ui/svg-icons/action/info';

import {Tabs, Tab} from 'material-ui/Tabs';

import SwipeableViews from 'react-swipeable-views';

import RefreshIndicator from 'material-ui/RefreshIndicator';

class App extends React.Component {

	constructor(){
		super();
		this.state = {items: []}
	}
	componentWillMount(){
		fetch( 'http://swapi.co/api/planets/1/' )
			.then( response => response.json())
			.then( ({results: items}) => this.setState({items}))
	}
	filter(e){
		this.setState({filter: e.target.value})
	}


	render() {

		const style = {
			container: {
				position: 'relative',
			},
			refresh: {
				display: 'inline-block',
				position: 'relative',
			},
		};


        const styles = {
            slide: {
                padding: 15,
                minHeight: 100,
                color: '#fff',
            },
            slide1: {
                background: '#FEA900',
            },
            slide2: {
                background: '#B3DC4A',
            },
			slide3: {
            	background: '#6AC0FF',
			},
        };

		let items = this.state.items;
		if(this.state.filter){
			items = items.filter( item =>
				item.name.toLowerCase()
					.includes(this.state.filter.toLowerCase()))
		}
		return (
		 <MuiThemeProvider>
			<div>
				<h1>List Of the Names of the People</h1>
				
				<Tabs>
				<Tab label="First Task" >
				<div>
					<TextField hintText="Hint Text"
							   onChange={this.filter.bind(this)}/><br/>
					{items.map(item =>
						<Person key={item.name} person={{item}}/> )}
				<List>
					<ListItem primaryText="Luke Skywalker" rightIcon={<ActionInfo />} />
					<ListItem primaryText="C-3PO" rightIcon={<ActionInfo />} />
					<ListItem primaryText="R2-D2" rightIcon={<ActionInfo />} />
					<ListItem primaryText="Darth Vader" rightIcon={<ActionInfo />} />
				
					<ListItem primaryText="Leia Organa" rightIcon={<ActionInfo />} />
					<ListItem primaryText="Owen Lars" rightIcon={<ActionInfo />} />
					<ListItem primaryText="Beru Whitesun lars" rightIcon={<ActionInfo />} />
					<ListItem primaryText="R5-D4" rightIcon={<ActionInfo />} />
				
					<ListItem primaryText="Biggs Darklighter" rightIcon={<ActionInfo />} />
					<ListItem primaryText="Obi-Wan Kenobi" rightIcon={<ActionInfo />} />
				</List>
				</div>
				</Tab>
				<Tab label="Second Tab" >
					<h4> This is the second tab for swipeable views</h4>
					<SwipeableViews>
						<div style={Object.assign({}, styles.slide, styles.slide1)}>
							Slide n01
						</div>
						<div style={Object.assign({}, styles.slide, styles.slide2)}>
							Slide n02
						</div>
						<div style={Object.assign({}, styles.slide, styles.slide3)}>
							Slide n03
						</div>
					</SwipeableViews>

					<div style={style.container}>
						<RefreshIndicator
							size={100}
							left={10}
							top={0}
							status={"loading"}
							style={style.refresh}
						/>
					</div>


				</Tab>
			</Tabs>
			</div>	
		 </MuiThemeProvider>
		);
    }

}

const Person = (props) => <h4>{props.person.name}</h4>

export default App;