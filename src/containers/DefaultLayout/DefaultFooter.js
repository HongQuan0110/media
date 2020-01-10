import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo from '../../appflood.png';

class DefaultFooter extends Component {
  render() {
    return (
      <div className="bg-dark footer">
        <Container >
          <h3 className="text-center">CPAfull is reliability, awesome, easy to use.</h3>
          <p className="text-center" style={{color: '#1ba1e2'}}>Learn More About CPAfull</p>
          <hr style={{borderColor: '#999'}} />
          <Row>
            <Col lg="3" sm="12">
              <div>
                <a>
                  <img src={logo} style={{ maxWidth: '100%', height: '35px', display: 'block' }} />
                </a>
                <p style={{color: '#999'}}>DMSAffiliates is a leading affiliate network, with the highest paying offers of the entire world!</p>
                <i className="fa fa-twitter fa-lg mr-2"></i>
                <i className="fa fa-facebook-f fa-lg mr-2"></i>
                <i className="fa fa-instagram fa-lg mr-2"></i>
                <i className="fa fa-skype fa-lg mr-2"></i>

              </div>
            </Col>
            <Col lg="3" sm="12" className="d-flex justify-content-center">
              <div>
                <h4>WORK WITH US</h4>
                <ul className="list-group list-group-flush link">
                  <li className="list-group-item">> &nbsp; Advertisers</li>
                  <li className="list-group-item">> &nbsp; Publishers</li>
                </ul>
              </div>
            </Col>

            <Col lg="3" sm="12" className="d-flex justify-content-center">
              <div>
                <h4>RESOURCES</h4>
                <ul className="list-group list-group-flush link">
                  <li className="list-group-item">> &nbsp; Knowledge Base</li>
                  <li className="list-group-item">> &nbsp; Mobile Attribution Tools</li>
                </ul>
              </div>
            </Col>

            <Col lg="3" sm="12" className="d-flex justify-content-center">
              <div>
                <h4>LEGAL</h4>
                <ul className="list-group list-group-flush link">
                  <li className="list-group-item">> &nbsp; Privacy Policy</li>
                  <li className="list-group-item">> &nbsp; Terms of Service</li>
                  <li className="list-group-item">> &nbsp; FAQ</li>
                </ul>
              </div>
            </Col>
          </Row>
          
          <p className="text-center">Copyright © 2020 DMSAffiliates.All Rights Reserved. </p>
        </Container>
      </div>
    );
  }
}

export default DefaultFooter;
