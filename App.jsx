import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {List, ListItem} from 'material-ui/List';

import ActionInfo from 'material-ui/svg-icons/action/info';

import {Tabs, Tab} from 'material-ui/Tabs';

import SwipeableViews from 'react-swipeable-views';

var jsonData = require('./data/newlist.json');

class App extends React.Component {

    render() {

        const fontstyles = {
            fontWeight:'bold',
            fontSize: '20px',
            padding: '10px',
        }

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
                    callback(jsonObj.responseText);
                    var obj = JSON.parse(this.responseText)
                    //for (var i=0;i<obj.items.length;i++)
                    //{
                        console.log("test" + obj.items[0].fields.title+obj.items[0].fields.body);
                        document.getElementById("jsonid1").innerHTML = obj.items[0].fields.title;
                        document.getElementById("jsonid2").innerHTML = obj.items[0].fields.body;

                        document.getElementById("jsonid3").innerHTML = obj.items[2].fields.title;
                        document.getElementById("jsonid4").innerHTML = obj.items[2].fields.body;

                        document.getElementById("jsonid5").innerHTML = obj.items[3].fields.title;
                        document.getElementById("jsonid6").innerHTML = obj.items[3].fields.body;
                    //}

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
                    <h1>Madhwa Sangraha</h1>

                    <Tabs>
                        <Tab label="Home" >
                            <div>
                                <List id="jsonid">

                                    <ListItem id="jsonid1" style={fontstyles} />
                                    <ListItem id="jsonid2" />

                                    <ListItem id="jsonid3" style={fontstyles} />
                                    <ListItem id="jsonid4" />

                                    <ListItem id="jsonid5" style={fontstyles} />
                                    <ListItem id="jsonid6" />

                                </List>
                            </div>
                        </Tab>
                        <Tab label="Series" >
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