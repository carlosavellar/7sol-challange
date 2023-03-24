<Form className="Login-body" onSubmit={(e) => console.log(e)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter enteredEmail"
      // onChange={emailChangedHandler}
      // onBlur={emailBlurHandler}
      // value={enteredEmail}
      autoComplete="username"
    />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      placeholder="Password"
      // onChange={passChangedHandler}
      // onBlur={passBlurHandler}
      // value={enteredPass}
      autoComplete="current-password"
    />
  </Form.Group>

  <Button className="Login-btn" variant="primary" type="submit">
    Submit
  </Button>
</Form>;
