import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// FontAwesome Libray
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Components
import AppBar from './Components/AppBar';

library.add(fas, fab, far);
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
      </div>
    );
  }
}

export default App;
