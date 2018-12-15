import React, { Component } from 'react';
import SideImages from "./components/SideImages.jsx";
import OurStory from "./components/OurStory.jsx";
import Venue from "./components/Venue.jsx";
import Schedule from "./components/Schedule.jsx";
import RSVP from "./components/RSVP.jsx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './App.css';

class App extends Component {
  render() {

    const tabs = (
      <div class="tabStyle">
        <Tabs>
          <TabList>
            <Tab> Our Story </Tab>
            <Tab> The Venue </Tab>
            <Tab> Schedule </Tab>
            <Tab> RSVP </Tab>
          </TabList>

          <TabPanel>
            <OurStory />
          </TabPanel>
          <TabPanel>
            <Venue />
          </TabPanel>
          <TabPanel>
            <Schedule />
          </TabPanel>
          <TabPanel>
            <RSVP />
          </TabPanel>
        </Tabs>
      </div>
      )


    return (
      <div>
        <SideImages />
        { tabs }
      </div>
    );
  }
}

export default App;
