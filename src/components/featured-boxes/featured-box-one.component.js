import React from 'react';
import './featured-boxes.styles.css';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedBoxOne = ({children, title}) => {
    return(
        <div className='featured_box bg-light'>
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>{title}</h3>
                    </Col>
                    {children}
                </Row>
            </Container>
        </div>
    )
}

export default FeaturedBoxOne;