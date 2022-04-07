import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './Dummy';
import Articles from './routes/Articles';
import Article from './routes/Article';
import Message from './routes/Message';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">

      <div className="mx-2">
        <Header />
      </div>

      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Body />
            </Route>
            <Route exact path="/articles">
              <Articles />
            </Route>
            <Route exact path="/articles/:articleId">
              <Article />
            </Route>
            <Route exact path="/articles/:articleId/comments/:commentId">
              <Message />
            </Route>
            <Route path="/error">
              <ErrorPage errorNumber={'404'} errorMessage={'Page not found'} />
            </Route> 
          </Switch>
        </BrowserRouter>
        
      </div>

      <div className="mx-2">
        <Footer />
      </div>

    </div>
  );
}

export default App;
