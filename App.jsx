import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

var jsonData = require('./data/newlist.json');

class App extends React.Component {

    render() {

        const imagestyles = {
            padding: '10px',
        }

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

        return (
            <MuiThemeProvider>
                <div>
                    <h1>Madhwa Sangraha</h1>

                    <Tabs>
                        <Tab label="Home" >
                            <div>
                                <List id="jsonid">

                                    <ListItem id="jsonid1" style={fontstyles} />
                                    <ListItem id="jsonidimg1title" />
                                    <ListItem class="bannisoppu" id="jsonidimg1" style={imagestyles}/>
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