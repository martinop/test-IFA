import React, { Component } from 'react';
import { Container } from 'reactstrap';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// FontAwesome Libray
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Components
import AppBar from './Components/AppBar';
import Invoice from './Components/Invoice';
import DiagramMap from './Components/DiagramMap';
import Overview from './Components/Overview';

library.add(fas, fab, far);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <div className="wrapper">
          <Container>
            <Invoice />
            <DiagramMap />
            <Overview />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
