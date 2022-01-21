import React from 'react';
import './highlights-page.styles.css';
import Banner from '../../components/banner/banner.component';
import FeaturedBoxOne from '../../components/featured-boxes/featured-box-one.component';
import HighlightBox from '../../components/highlight-box/highlight-box.component';
import QuickSelect from '../../components/quick-select-section/quick-select-section.component';

const HighlightsPage = () => {
    return(
        <div>
            <Banner title='highlights' />
            <FeaturedBoxOne title='All Highlights'>
                <HighlightBox />
                <HighlightBox />
                <HighlightBox />
                <HighlightBox />
                <HighlightBox />
                <HighlightBox />
            </FeaturedBoxOne>
            <QuickSelect num={4} title='Live Competitions' />
        </div>
    )
}

export default HighlightsPage;