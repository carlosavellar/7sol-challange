import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import PropTypes from 'prop-types';
import { isCep } from 'validator-brazil';

import AppBar from '@mui/material/AppBar';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { IMaskInput } from 'react-imask';

import logo from './../../../assets/images/logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useInput from './../../hooks/use-input';

import { fetchMaterials } from '../../utils/fetchMaterials';

import './Simulator.css';

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
  const [getMaterials, setGetMaterials] = useState();
  const { materials, isLoading, message } = useSelector((state) => state.materialsReducer);
  const dispatch = useDispatch();
  const [zipCode, setZipCode] = useState('');
  const [structure, setStructure] = useState('');
  const [bill, setBill] = useState('');

  const handlerEnteredCep = (e) => {
    console.log(e.target.value);
    setZipCode(e.target.value);
  };
  const handlerInputStructure = (e) => {
    console.log(e.target.value);
    setStructure(e.target.value);
  };
  const handlerInputElectricityBill = (e) => {
    console.log(e.target.value);
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
        console.log(response);
        setGetMaterials(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchMaterials(structure, bill, zipCode);
  };

  useEffect(() => {
    console.log(getMaterials);
  }, [getMaterials]);

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
                        {/* <Form.Text className="text-muted">{cepInputError && 'Cep invalido'} </Form.Text> */}
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
              <Grid item xs={4}>
                <Typography variant="strong">
                  Irradiância: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Irradiância minima: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Irradiância máxima: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Integradores região: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Integradores mínimo: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Integradores máximo: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Economia: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Valor instalação: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  co2: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  potencyCC: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Performance <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Qtde Inversores: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Índice único: <span>000</span>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="strong">
                  Potencia sistema: <span>000</span>
                </Typography>
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
          <Container>
            <Typography variant="h4">Parcelamento</Typography>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Ver mais
              </Button>
            </CardActions>
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
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Ver mais
              </Button>
            </CardActions>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
};

export default Simulator;
