import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';

import ActionInfo from 'material-ui/svg-icons/action/info';

import {Tabs, Tab} from 'material-ui/Tabs';

import SwipeableViews from 'react-swipeable-views';

var jsonData = require('./data/newlist.json');

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
            jsonObj.onreadystatechange = function () {
                if (jsonObj.readyState == 4 && jsonObj.status == "200") {
                    callback(jsonObj.responseText);
                    var obj = JSON.parse(this.responseText);
                    for (var i=0;i<obj.length;i++)
                    {
                        document.getElementById("jsonid").innerHTML = obj[i].items.title;
                    }
                }
            };
            jsonObj.open("GET", "./data/newlist.json", true);
            jsonObj.send();
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
                        <Tab label="First Tab" >
                            <div>
                                <List>


                                    <ListItem id="jsonid" primaryText="JSON data" rightIcon={<ActionInfo />} />
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
