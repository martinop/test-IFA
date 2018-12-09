import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default () => (
  <div>
    <div className="box-title">Overview</div>
    <div className="box overview-box">
      <Container fluid>
        <Row>
          <Col lg="6" className="info">
            <Row>
              <Col md="4" className="info-title">Status</Col>
              <Col md="8" className="info-desc"><span className="active"><FontAwesomeIcon icon="check" />Active</span></Col>
              <Col md="4" className="info-title">Method</Col>
              <Col md="8" className="info-desc">Multimodal</Col>
              <Col md="4" className="info-title">Capacity</Col>
              <Col md="8" className="info-desc">LCL</Col>
              <Col md="4" className="info-title">Drayage</Col>
              <Col md="8" className="info-desc">Pickup, Delivery</Col>
            </Row>
          </Col>
          <Col lg="6" className="info">
            <Row>
              <Col md="4" className="info-title">Incoterms</Col>
              <Col md="8" className="info-desc">FOB</Col>
              <Col md="4" className="info-title">Service Options</Col>
              <Col md="8" className="info-desc">Deconsolidation. Customs Clearance.</Col>
              <Col md="4" className="info-title extra-m">Hazardous or forbidden commodities</Col>
              <Col md="8" className="info-desc extra-m">Lithium Batteries, Hazmat, Other</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
)
