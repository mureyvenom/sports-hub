import React from 'react';
import './schedule-page.styles.css';
import Banner from '../../components/banner/banner.component';
import QuickSelect from '../../components/quick-select-section/quick-select-section.component';

const SchedulePage = () => {
    return(
        <div>
            <Banner title='Schedule' />
            <QuickSelect title='Schedule' num={12} />
        </div>
    )
}

export default SchedulePage;