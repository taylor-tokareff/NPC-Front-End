import React, { Component } from 'react';
import Header from '../containers/Header';
import NpcList from '../NpcList';
import NpcForm from '../NpcForm';
import NpcDetail from '../NpcDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';




class App extends Component {
  render() {

    return (
      <>

        <Router>

          <Header />

          <Switch>
            <Route exact path="/" component={NpcList} />
            <Route exact path="/create" component={NpcForm} />
            <Route exact path="/npc/:id" component={NpcDetail} />


            <Redirect to="/" />

          </Switch>
        </Router>
      </>
    );
  }


}

export default App;
