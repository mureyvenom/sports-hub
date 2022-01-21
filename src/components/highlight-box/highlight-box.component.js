import React from 'react';
import './highlight-box.styles.css';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const HighlightBox = () => {
    return(
        <Col md={4}>
            <div className='highlight-container'>
                <div className='image-container'>
                    <div className="image" style={{
                        backgroundImage: 'url(http://aledoyhost.com/propdemo/images/news2.jpg)'
                    }}></div>
                </div>
                <div className="summary-container">
                    <Link to="#">
                        <div className="title">
                            Highlight Title
                        </div>                        
                    </Link>
                    <div className="news-summary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                </div>                
            </div>
        </Col>
    )
}

export default HighlightBox;