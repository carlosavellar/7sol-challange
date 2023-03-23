import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './store/movies';
import { Button, Simulator } from './components';
import appInfo from '../package.json';
import Login from './components/Login';
import logo from './../assets/images/logo.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import './App.css';

const App = () => {
  const { movies, isLoading, message } = useSelector((state) => state.moviesReducer);
  const [isAuth, setIsAuth] = useState(false);

  const dispatch = useDispatch();

  const renderContent = () => {
    if (isLoading) return <h2>Loading...</h2>;
    if (message) return <h2>{message}</h2>;
    if (!isAuth) {
      return (
        <Row>
          <Col xs={12} sm={2} md={3} lg={4} xxl={4}></Col>
          <Col>
            <Login setIsAuth={setIsAuth} isAuth={isAuth} />
          </Col>
          <Col xs={12} sm={2} md={3} lg={4} xxl={4}></Col>
        </Row>
      );
    } else {
      return (
        <Row className="movies">
          <Simulator movies={movies} data-testid="movie" />
        </Row>
      );
    }
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="The Movies API" />
      </header>
      <Container className="App-body" md={3}>
        {renderContent()}
      </Container>
    </div>
  );
};

export default App;
