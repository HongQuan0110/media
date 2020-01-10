import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import CountUp from 'react-countup';
import { FormattedNumber } from 'react-intl';

import adter from '../../f-adters.png';
import pubsher from '../../f-pubsher.png';
import advidi from '../../advidi.png';
import blibli from '../../Blibli3-1.png';
import crakrevenue from '../../crakrevenue.png';
import etoro from '../../etoro-1.png';
import olx from '../../OLX-1.png';
import properller from '../../properller.png';
import Recarga from '../../Recarga1-1.png';
import tekka from '../../tekka.png';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    format = (value) => {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className="body-page">
                <Container className="content">
                    <div className="space">
                    </div>
                    <Row>
                        <Col sm="6" className="left-recommend">
                            <span>
                                Scale Your App Business Through Mobile Journey Advertising
                        </span>
                        </Col>
                        <Col sm="6" className="right-recommend">
                            <p style={{ fontWeight: '400' }}>
                                We cooperate with mobile app developers and advertising networks and assist them to promote mobile apps by delivering active users
                        </p>
                            <p style={{ fontWeight: '400' }}>
                                Our aim is to connect the most effective and high performing traffic with the apps that need it.
                        </p>
                            <p style={{ fontWeight: '400' }}>
                                Reach, convert and re-engage your audience with our mobile advertising solutions.
                        </p>
                        </Col>
                    </Row>
                    <div className="space d-flex align-items-center">
                        {/*<div style={{width: '100%', border: '1px solid #000'}}></div>*/}
                    </div>

                    <Row>
                        <Col sm="12" lg="6">
                            <div className="left-adters">
                                <div>
                                    <h3>
                                        For Advertisers
                                    </h3>
                                    <p>
                                        Reach and Activate People on Mobile Into Real Customers
                                        Our solutions deliver results at every point of the customer journey. Connect with new users and convert them into customers.
                                    </p>
                                </div>
                                <img src={adter} style={{ maxWidth: '100%', display: 'block', height: 'auto' }} />
                            </div>
                        </Col>
                        <Col sm="12" lg="6">
                            <div className="left-pubsher">
                                <div>
                                    <h3>
                                        For Publishers
                                    </h3>
                                    <p>
                                        We help you monetize your audience with global demand from the world’s largest mobile advertisers. Maximize your yield through brand safe content and dedicated service.
                                    </p>
                                </div>
                                <img src={pubsher} style={{ maxWidth: '100%', display: 'block', height: 'auto' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="statistics ">
                    <h2 style={{ fontWeight: 600, textAlign: 'center' }}>Our numbers are a good high</h2>
                    <div className="">
                        <Row className="mt-5">
                            <Col className="text-center">
                                <div>
                                    <h3><CountUp formattingFn={this.format} end={50000} duration={5} />+</h3>
                                    <p>Publishers</p>
                                </div>
                            </Col>
                            <Col className="text-center">
                                <div>
                                    <h3><CountUp formattingFn={this.format} end={1000} duration={5} />+</h3>
                                    <p>Advertisers</p>
                                </div>
                            </Col>
                            <Col className="text-center">
                                <div>
                                    <h3><CountUp formattingFn={this.format} end={2000} duration={5} />M</h3>
                                    <p>Hits</p>
                                </div>
                            </Col>
                            <Col className="text-center">
                                <div>
                                    <h3><CountUp formattingFn={this.format} end={5000} duration={5} />K</h3>
                                    <p>Qualified leads</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="partners">
                    <h2 className="" style={{ fontWeight: 600, textAlign: 'center' }}>Trusted by leading brands</h2>

                    <div className="d-flex mt-5">
                        <div className="p-img d-flex align-items-center justify-content-center">
                            <img src={advidi} style={{ maxWidth: '100%', display: 'block', maxHeight: '60px' }} />
                        </div>
                        <div className="p-img d-flex align-items-center justify-content-center">
                            <img src={blibli} style={{ maxWidth: '100%', display: 'block', maxHeight: '60px' }} />
                        </div>
                        <div className="p-img d-flex align-items-center justify-content-center">
                            <img src={crakrevenue} style={{ maxWidth: '100%', display: 'block', maxHeight: '60px' }} />
                        </div>
                        <div className="p-img d-flex align-items-center justify-content-center">
                            <img src={etoro} style={{ maxWidth: '100%', display: 'block', maxHeight: '60px' }} />
                        </div>
                    </div>

                    <div className="d-flex mt-5">
                        <div className="p-img d-flex align-items-center justify-content-center">
                            <img src={olx} style={{ maxWidth: '100%', display: 'block', maxHeight: '60px' }} />
                        </div>
                        <div className="p-img d-flex align-items-center justify-content-center">
                            <img src={properller} style={{ maxWidth: '100%', display: 'block', maxHeight: '60px' }} />
                        </div>
                        <div className="p-img d-flex align-items-center justify-content-center">
                            <img src={Recarga} style={{ maxWidth: '100%', display: 'block', maxHeight: '60px' }} />
                        </div>
                        <div className="p-img d-flex align-items-center justify-content-center">
                            <img src={tekka} style={{ maxWidth: '100%', display: 'block', maxHeight: '60px' }} />
                        </div>
                    </div>
                </div>

                <div className="contact mt-5">
                    <h2 className="" style={{ fontWeight: 600, textAlign: 'center' }}>Contact us</h2>
                    <p className="text-center mb-5">We've helped thousands of clients grow their business worldwide. Let’s talk!</p>
                    <Container>
                        <Row>
                            <Col className="form-contact">
                                <Form>
                                    <div className="d-flex">
                                        <FormGroup className="firtname">
                                            <Label for="Firstname">First name</Label>
                                            <Input type="text" name="firstname" id="Firstname" placeholder="First name*" />
                                        </FormGroup>
                                        <FormGroup className="lastname ml-auto">
                                            <Label for="Lastname">Last name</Label>
                                            <Input type="text" name="lastname" id="Lastname" placeholder="Last name*" />
                                        </FormGroup>
                                    </div>
                                    <FormGroup>
                                        <Label for="Email">Work Email</Label>
                                        <Input type="email" name="email" id="Email" placeholder="Email address*" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Select">Subject</Label>
                                        <Input type="select" name="select" id="Select" defaultValue="Please Select">
                                            <option disabled={true} value="Please Select">Please Select</option>
                                            <option>Advertise on mobile (in-app or mobile web)</option>
                                            <option>Agency</option>
                                            <option>Monetize mobile traffic</option>
                                            <option>Other</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="TextArea">Message</Label>
                                        <Input style={{ height: "100px", maxHeight: "250px", minHeight: "56px" }} type="textarea" name="text" id="TextArea" />
                                    </FormGroup>
                                    <button type="button" className="btn btn-primary">Send message</button>
                                </Form>
                            </Col>

                            <Col className="ml-5">
                                <div>
                                    <p>Here at ..., we cook only the best stuff, made with love from our exclusive traffic sources. If you’re a publisher or advertiser looking for a solid network to partner with, shoot us a message</p>
                                </div>
                                <p>
                                    <strong>General support:</strong> <br />
                                    <i className="fa fa-envelope-o"></i> &nbsp; support@...com
                                </p>
                                <p>
                                    <strong>Business development:</strong> <br />
                                    <i className="fa fa-envelope-o"></i> &nbsp; support@...com
                                </p>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;
