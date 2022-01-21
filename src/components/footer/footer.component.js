import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './footer.styles.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram, FaTwitch, FaYoutube, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return(
        <div id='footer' className='bg-dark'>
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>Quick Links</h4>
                        <Link className='ft-link' to='/'>
                            <div className='footer-link'>
                                Home
                            </div>
                        </Link>
                        <Link className='ft-link' to='/news'>
                            <div className='footer-link'>
                                News
                            </div>
                        </Link>
                        <Link className='ft-link' to='/sign-up'>
                            <div className='footer-link'>
                                Sign Up
                            </div>
                        </Link>
                        <Link className='ft-link' to='/sign-in'>
                            <div className='footer-link'>
                                Sign In
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <h4>Videos</h4>
                        <Link className='ft-link' to='/live-matches'>
                            <div className='footer-link'>
                                Live Matches
                            </div>
                        </Link>
                        <Link className='ft-link' to='/highlights'>
                            <div className='footer-link'>
                                Highlights
                            </div>
                        </Link>
                        <Link className='ft-link' to='/schedule'>
                            <div className='footer-link'>
                                Broadcast Schedule
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <h4>Follow Us</h4>
                        <Link className='ft-link' to='#'>
                            <FaTwitterSquare className='footer-fa' />
                        </Link>
                        <Link className='ft-link' to='#'>
                            <FaFacebookSquare className='footer-fa' />
                        </Link>
                        <Link className='ft-link' to='#'>
                            <FaInstagram className='footer-fa' />
                        </Link>
                        <Link className='ft-link' to='#'>
                            <FaTwitch className='footer-fa' />
                        </Link>
                        <Link className='ft-link' to='#'>
                            <FaYoutube className='footer-fa' />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;