import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PropTypes from 'prop-types';



import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import {Tabs, Tab} from 'material-ui/Tabs';

class App extends React.Component {
   render() {
		
		return (
		 <MuiThemeProvider>
			<div>
				<h1>List Of the Names of the People</h1>
				
				<Tabs>
				<Tab label="First Task" >
				<div>
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
				</Tab>
			</Tabs>
			</div>	
		 </MuiThemeProvider> 
		
		);
    }
}

export default App;