import React from 'react';
import './quick-select-section.styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuickSelect = ({title, num}) => {
    const colorClasses = ['bg-info', 'bg-success', 'bg-warning', 'bg-danger'];

    const output = [];

    for(let i=0; i<num; i++){
        let random = Math.floor(Math.random() * colorClasses.length);
        output.push(<Col md={3} key={i}>
            <Link to='/watch'>
                <div className={`competition-card ${colorClasses[random]}`}>
                    <div className="title">Competition</div>
                    <div className="country">Country</div>
                </div>
            </Link>
        </Col>);
    }

    return(
        <div className='featured_box'>
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>{title}</h3>
                    </Col>
                    {
                        output.map((out, i) => {
                            return out
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default QuickSelect;