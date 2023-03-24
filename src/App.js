import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMaterials } from './store/materials/reducer';
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
  const { materials, isLoading, message } = useSelector((state) => state.materialsReducer);
  const [isAuth, setIsAuth] = useState(false);

  const renderContent = () => {
    if (isLoading) return <h2>Loading...</h2>;
    if (message) return <h2>{message}</h2>;
    if (!isAuth) {
      return <Login setIsAuth={setIsAuth} isAuth={isAuth} />;
    } else {
      return (
        <Container className="App-body" md={3}>
          <Row className="movies">
            <Simulator movies={materials} data-testid="movie" />
          </Row>
        </Container>
      );
    }
  };

  return <div className="App">{renderContent()}</div>;
};

export default App;
