import React from 'react';
import './live-matches-page.styles.css';
import Banner from '../../components/banner/banner.component';
import QuickSelect from '../../components/quick-select-section/quick-select-section.component';

const LiveMatchesPage = () => {
    return(
        <div>
            <Banner title='Live matches' />
            <QuickSelect title='Live Matches' num={12} />
        </div>
    );
}

export default LiveMatchesPage;