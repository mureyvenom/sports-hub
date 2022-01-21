import React from 'react';
import './homepage.styles.css';
import HomeBanner from '../../components/homebanner/homebanner.component';
import QuickSelect from '../../components/quick-select-section/quick-select-section.component';
import FeaturedBoxOne from '../../components/featured-boxes/featured-box-one.component';
import NewsBox from '../../components/news-box/news-box.component';
import LatestResults from '../../components/latest-results/latest-results.component';
import { Col } from 'react-bootstrap';
import VideoPlayer from '../../components/video-player/video-player.component';

const Homepage = () => {
    return(
        <div>
            <HomeBanner />
            <QuickSelect title='Live Competitions' num={4} />
            <FeaturedBoxOne title='Latest News'>
                <NewsBox />
                <NewsBox />
                <NewsBox />
            </FeaturedBoxOne>
            <LatestResults />
            <FeaturedBoxOne title='Latest Highlights'>
                <Col md={6}>
                    <VideoPlayer />
                </Col>
                <Col md={6}>
                    <VideoPlayer />
                </Col>
            </FeaturedBoxOne>
        </div>
    );
}

export default Homepage;