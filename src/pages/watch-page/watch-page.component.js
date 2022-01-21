import React from 'react';
import './watch-page.styles.css';
import VideoPlayer from '../../components/video-player/video-player.component';
import { Container, Row, Col } from 'react-bootstrap';
import QuickSelect from '../../components/quick-select-section/quick-select-section.component';

const WatchPage = () => {
    return(
        <div>
            <div className='watch bg-secondary'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <VideoPlayer />
                        </Col>
                    </Row>
                </Container>
            </div>
            <QuickSelect num={4} title='Other Competitions' />
        </div>
    )
}

export default WatchPage;