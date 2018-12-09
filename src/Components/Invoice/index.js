import './styles.css';

import React, { Component } from 'react';
import {
  Container,
  Tooltip,
  Row,
  Col
} from 'reactstrap';

export default class Invoice extends Component {
  state = { tooltipOpen: false }

  toggle = () =>
    this.setState(prevState => ({ tooltipOpen: !prevState.tooltipOpen }))

  render() {
    return (
      <div>
        <h3 className="invoice-title">
          Invoice
          <span href="#" id="InvoiceNumber">S03834754</span>
        </h3>
        <Tooltip
          placement="bottom"
          isOpen={this.state.tooltipOpen}
          target="InvoiceNumber"
          toggle={this.toggle}
        >
          Invoice Number
        </Tooltip>
        <div className="box-title">Invoice - Revision</div>
        <div className="box invoice-revision">
          <Container fluid>
            <Row>
              <Col lg="3" className="info">
                  <Row>
                    <Col md="4" className="info-title">Invoice #</Col>
                    <Col md="8" className="info-desc">33-0092kk00</Col>
                    <Col md="4" className="info-title">Date</Col>
                    <Col md="8" className="info-desc">7/31/18</Col>
                    <Col md="4" className="info-title">Due Date</Col>
                    <Col md="8" className="info-desc">7/31/18</Col>
                    <Col md="4" className="info-title">Terms</Col>
                    <Col md="8" className="info-desc">Net 0</Col>
                  </Row>
              </Col>
              <Col className="bill">
                <div className="bill-title">Bill To</div>
              </Col>
              <Col lg="3" className="balance">
                <div className="balance-title">New Balance upon Re-booking</div>
                <span className="balance-number">$452.45</span>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}