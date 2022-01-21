import React from 'react';
import './all-news-page.styles.css';
import Banner from '../../components/banner/banner.component';
import FeaturedBoxOne from '../../components/featured-boxes/featured-box-one.component';
import NewsBox from '../../components/news-box/news-box.component';
import QuickSelect from '../../components/quick-select-section/quick-select-section.component';

const AllNewsPage = () => {
    return(
        <div>
            <Banner title='all news' />
            <FeaturedBoxOne title='All News'>
                <NewsBox />
                <NewsBox />
                <NewsBox />
                <NewsBox />
                <NewsBox />
                <NewsBox />
            </FeaturedBoxOne>
            <QuickSelect title='Live Competitions' num={4} />
        </div>
    )
}

export default AllNewsPage;