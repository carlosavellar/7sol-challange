import React, { useState, useEffect } from 'react';
import validator from 'validator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Login.css';
import useInput from './../../hooks/use-input';
import { passValidator } from './../../utils/validator';

import Form from 'react-bootstrap/Form';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Login(props) {
  const [isLogged, setIslooged] = useState(false);
  const [isAuthStorage, setIsAuthStorage] = useState(false);
  const { setIsAuth, isAuth } = props;
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => validator.isEmail(value));

  const {
    value: enteredPass,
    isValid: passIsValid,
    hasError: passInputError,
    valueChangeHandler: passChangedHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
  } = useInput((value) => passValidator(value, [6, 0, 0, 0]));

  let isFormValid = false;
  if (emailIsValid && passIsValid) {
    isFormValid = true;
  } else {
    isFormValid = false;
  }

  useEffect(() => {
    setIsAuth(isAuth);
    console.log(isAuth, 'is logged effect');
  }, [isAuth, setIsAuth]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!emailIsValid) {
      return;
    }

    if (enteredEmail === 'sol@77.com' && enteredPass === '123456') {
      props.setIsAuth(true);
      setIslooged(true);
      localStorage.setItem('isAuth', true);
    }

    resetEmail();
    resetPass();
  };

  const getAuthStorage = () => {
    const isAuthChecker = JSON.parse(localStorage.getItem('isAuth'));
    // console.log(JSON.parse(isAuthChecker), 'Auth');
    if (isAuthChecker) {
      props.setIsAuth(true);
    }
  };

  useEffect(() => {
    if (!isAuth) {
      getAuthStorage();
    }
  }, [getAuthStorage, isAuth]);

  const emailInputClassname = !emailInputError ? 'mb-3' : 'mb-3 Login-invalid';
  const passInputClassname = !passInputError ? 'mb-3' : 'mb-3 Login-invalid';

  const loggedInHandler = (event) => {
    console.log(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                value={enteredEmail}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={enteredPass}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={passChangedHandler}
                onBlur={passBlurHandler}
              />
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
