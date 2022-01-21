import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import LiveMatchesPage from './pages/live-matches-page/live-matches-page.component';
import HighlightsPage from './pages/highlights-page/highlights-page.component';
import SchedulePage from './pages/schedule-page/schedule-page.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import WatchPage from './pages/watch-page/watch-page.component';
// import NewsPage from './pages/news-page/news-page.component';
import AllNewsPage from './pages/all-news-page/all-news-page.component';
import ReadNews from './pages/read-news/read-news.component';

const  App  = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/news' component={AllNewsPage} />        
        <Route path='/news/:id' component={ReadNews} />
        <Route exact path='/live-matches' component={LiveMatchesPage} />
        <Route exact path='/highlights' component={HighlightsPage} />
        <Route exact path='/schedule' component={SchedulePage} />
        <Route exact path='/sign-in' component={SignInPage} />
        <Route exact path='/sign-up' component={SignUpPage} />
        <Route exact path='/watch' component={WatchPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
