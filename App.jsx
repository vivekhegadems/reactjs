import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';

import ActionInfo from 'material-ui/svg-icons/action/info';

import {Tabs, Tab} from 'material-ui/Tabs';

import SwipeableViews from 'react-swipeable-views';

var jsonData = require('json!../data/newlist.json');

class App extends React.Component {

    render() {

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

        var data;

        function loadJSON(jsonfile, callback) {

            var jsonObj = new XMLHttpRequest();
            jsonObj.overrideMimeType("application/json");
            jsonObj.open('GET', "../data/newlist.json", true);
            jsonObj.onreadystatechange = function () {
                if (jsonObj.readyState == 4 && jsonObj.status == "200") {
                    callback(jsonObj.responseText);
                }
            };
            jsonObj.send(null);
        }

        function load() {

            loadJSON(jsonData, function (response) {
                data = JSON.parse(response);
                console.log(data);
            });
        }

        load();




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

						</Tab>
					</Tabs>
				</div>
			</MuiThemeProvider>
        );
    }

}

export default App;
