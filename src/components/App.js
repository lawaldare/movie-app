import React from 'react';
import './App.css';
import MovieList from './MovieList';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <p className="flow-text movie-title">MovieBox</p>
            </Link>
          </header>
          <Switch>
            <Route path="/" component={MovieList} exact />
            <Route path="/:id" component={MovieDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
