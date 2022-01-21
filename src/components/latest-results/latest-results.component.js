import React from 'react';
import './latest-results.styles.css';
import { Col, Container, Row } from 'react-bootstrap';

const LatestResults = () => {
    return(
        <div className='featured_box bg-info latest_scores text-light align-center'>
            <Container>
                <Row>
                    <Col md={12}>
                        <h4>COMPETITION - COMPETITION ROUND</h4>
                    </Col>
                    <Col md={4}>
                        <div className="team_house"><h4>HOME TEAM</h4></div>
                    </Col>
                    <Col md={4}>
                        <div className="score_box text-info"> 3 - 1 </div>
                    </Col>
                    <Col md={4}>
                        <div className="team_house"><h4>AWAY TEAM</h4></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LatestResults;