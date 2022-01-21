import React from 'react';
import { Route } from 'react-router-dom';
import AllNewsPage from '../all-news-page/all-news-page.component';
import ReadNews from '../read-news/read-news.component';

const NewsPage = ({match}) => {
    return(
        <div>
            <Route exact path={`${match.path}`} component={AllNewsPage} />
            <Route path={`${match.path}/:newsId`} component={ReadNews} />
        </div>
    )
}

export default NewsPage