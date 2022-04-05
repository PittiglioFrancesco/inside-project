import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './Dummy';
import Articles from './routes/Articles';
import Article from './routes/Article';
import Messages from './routes/Messages';
import Message from './routes/Message';

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
            <Route exact path="/articles/1">
              <Article />
            </Route>
            <Route exact path="/articles/1/comments/1">
              <Message />
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
