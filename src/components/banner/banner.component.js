import React from 'react';
import './banner.styles.css';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = ({title, bgImage}) => {
    return(
        <div className='banner' style={{backgroundImage: `url(${bgImage})`}}>
            <div className='black-film'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>{title}</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Banner;