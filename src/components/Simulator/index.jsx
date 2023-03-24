import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Parcelamento from './Parcelamento/Index';

import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import Stack from '@mui/material/Stack';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { IMaskInput } from 'react-imask';

import logo from './../../../assets/images/logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import FirstData from './FirstData/';
import Kit from './Kit/';

import './Simulator.css';
import { List } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Simulator = ({ item }) => {
  const [getMaterials, setGetMaterials] = useState([]);
  const { materials, isLoading, message } = useSelector((state) => state.materialsReducer);
  const dispatch = useDispatch();
  const [zipCode, setZipCode] = useState('');
  const [structure, setStructure] = useState('');
  const [bill, setBill] = useState('');

  const handlerEnteredCep = (e) => {
    setZipCode(e.target.value);
  };
  const handlerInputStructure = (e) => {
    setStructure(e.target.value);
  };
  const handlerInputElectricityBill = (e) => {
    setBill(e.target.value);
  };

  const fetchMaterials = async (structure, val, zipCode) => {
    const response = await axios
      .get(`https://api2.77sol.com.br/busca-cep?estrutura=${structure}&valor_conta=${val}&cep=${zipCode}`, {
        params: {
          limit: 1000,
        },
      })
      .then((response) => {
        setGetMaterials(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setGetMaterials(fetchMaterials(structure, bill, zipCode));
  };

  let renderFirstData = '';

  useEffect(() => {
    if (getMaterials.length > 0) {
      debugger;
      renderFirstData = <FirstData materials={getMaterials} />;
    }
  }, [getMaterials, renderFirstData]);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: '#073efaff' }}>
        <Toolbar>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src={logo} alt="77SolTech" style={{ height: '80px' }} />
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 6,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={12}>
              <Grid item xs={12}>
                <Form className="Login-body" onSubmit={submitHandler}>
                  <Row>
                    <Col>
                      <Form.Group controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingInput" label="Cep" className="mb-3">
                          <Form.Control
                            as={IMaskInput}
                            mask="00000-000"
                            placeholder="Cep"
                            onChange={handlerEnteredCep}
                            value={zipCode}
                            autoComplete="cep"
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Select aria-label="Default select example" onChange={handlerInputStructure}>
                          <option>Tipo de estrutura de telhado</option>
                          <option value="fibrocimento-madeira">Fibrocimento madeira</option>
                          <option value="fibrocimento-metalico">Fibrocimento metalico</option>
                          <option value="ceramico">Cerâmico</option>
                          <option value="metalico">Metálico</option>
                          <option value="laje">Laje</option>
                          <option value="solo">Solo</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingInput" label="Valor conta de luz" className="mb-3">
                          <Form.Control
                            type="id"
                            as={IMaskInput}
                            value={bill}
                            mask="00000-000"
                            placeholder="Valor da conta de luz"
                            onChange={handlerInputElectricityBill}
                            autoComplete="username"
                          />
                        </FloatingLabel>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button className="Login-btn" variant="primary" type="submit">
                    Buscar
                  </Button>
                </Form>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 6,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              {Object.values(getMaterials).length > 0 ? <FirstData materials={getMaterials} /> : null}
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 6,
            pb: 6,
          }}
        >
          <Container>
            <Typography variant="h4">Parcelamento</Typography>
            <List component={Stack} direction="row">
              {Object.values(getMaterials).length > 0
                ? getMaterials.parcelamento.map((parcel, index) => <Parcelamento parcel={parcel} key={index} />)
                : 'No content'}
            </List>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 6,
            pb: 6,
          }}
        >
          <Container>
            <Typography variant="h4">Kit</Typography>
            <List component={Stack} direction="row">
              {Object.values(getMaterials).length > 0
                ? getMaterials.kit.map((kitItem, index) => <Kit kitItem={kitItem} key={index} />)
                : 'No content'}
            </List>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          One beatifull End. That's all folks!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
};

export default Simulator;
