import React from 'react';
import './styles.css';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import MapComponent from './Map'
import Step from './Step'

export default class DiagramMap extends React.Component {
  state = { activeTab: 1 }

  toggle = tab => () => {
    if (this.state.activeTab !== tab)
      this.setState({ activeTab: tab });
  }
  render() {
    return (
      <div>
        <Nav tabs className="dm-tabs">
          <NavItem onClick={this.toggle(1)}>
            <NavLink
              className={classnames({
                active: this.state.activeTab === 1
              })}
            >
              Diagram
            </NavLink>
          </NavItem>
          <NavItem onClick={this.toggle(2)}>
            <NavLink
              className={classnames({
                active: this.state.activeTab === 2
              })}
            >
              Map
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="box box-dm" activeTab={this.state.activeTab}>
          <TabPane tabId={1}>
            <Row>
              <Col sm="12">
                <ul className="stepper">
                  <li><Step /></li>
                  <li className="line" />
                  <li><Step /></li>
                  <li className="line" />
                  <li><Step /></li>
                  <li className="line" />
                  <li><Step /></li>
                  <li className="line" />
                  <li><Step /></li>
                  <li className="line" />
                  <li><Step /></li>
                  <li className="line" />
                  <li><Step /></li>
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId={2}>
            <MapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}