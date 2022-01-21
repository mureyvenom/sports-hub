import React from 'react';
import  './homebanner.styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return(
        <div id='home_banner'>
            <div className='black-film'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>Welcome To CanaSportsN</h3>

                            <div className="summary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>

                            <Link to='#'>
                                <CustomButton displayText='Read More' />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomeBanner;