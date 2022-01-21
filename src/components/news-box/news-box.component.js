import React from 'react';
import { Col } from 'react-bootstrap';
import './news-box.styles.css';
import { withRouter, Link } from 'react-router-dom';

const NewsBox = ({history}) => {
    return(
        <Col md={4}>
            <div className='news-container'>
                <div className='image-container'>
                    <div className="image" style={{
                        backgroundImage: 'url(http://aledoyhost.com/propdemo/images/news2.jpg)'
                    }}></div>
                </div>
                <div className="summary-container">
                    <Link to='/news/2'>
                        <div className="title">
                            News Title
                        </div>     
                    </Link> 
                    <div className="news-summary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>                
            </div>
        </Col>
    )
}

export default withRouter(NewsBox);