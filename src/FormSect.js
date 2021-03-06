import React, {Component} from 'react';
import {Form, Button, Container, Col, Row, InputGroup, FormControl} from 'react-bootstrap';

class FormSect extends Component {
    render(){
        return (
          <Container>
            <Form>
              <Row>
                <Col sm>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">
                    @example.com
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

              <label htmlFor="basic-url">Your vanity URL</label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>With textarea</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
              </InputGroup>
            </Form>
          </Container>
        );
    }
}

export default FormSect