import React, { Component } from 'react';
import { Navbar, Input, Button, InputGroup, InputGroupAddon, Container, Col, Row, Form } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar color="dark" fixed="bottom">
                    <Container>
                        <Col xs="12" md="6">
                            <Form>
                                <InputGroup>
                                    <Input />
                                    <InputGroupAddon addonType="append">
                                        <Button color="danger">Clique em mim!</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Home;