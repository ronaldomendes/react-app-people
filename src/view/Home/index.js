import React, { Component } from 'react';
import axios from 'axios';
import {
    Navbar, Input, Button, InputGroup, InputGroupAddon, Container, Col, Form, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Spinner
} from 'reactstrap';
import { MdSearch, MdStar } from 'react-icons/md';

import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        // followers: []
        meteoro: [],
        carregando: false
    }

    stalkear = async (event) => {
        event.preventDefault()
        // console.log(event.target.querySelector('input').value)
        const inputValue = event.target.children[0].children[0].value
        console.log(inputValue)

        // usando o método convencional
        // const followers = await axios(`https://api.github.com/users/${inputValue}/followers`)
        // console.log(followers.data)
        // this.setState({ followers: followers.data })

        // usando método de Destructuring
        // const { data } = await axios(`https://api.github.com/users/${inputValue}/followers`)
        // console.log(data)
        // this.setState({ followers: data })

        // acessando a api do Bitbucket
        // const followers = await axios(`https://api.bitbucket.org/2.0/users/${inputValue}`)
        // console.log(followers)

    }

    meteoroDaPaixao = async (event) => {
        event.preventDefault()

        this.setState({ carregando: true })
        const inputValue = event.target.children[0].children[0].value

        // acessando a api da NASA
        const meteoro = await axios(`https://api.nasa.gov/planetary/apod?date=${inputValue}&api_key=oCu39fA87BgU7MnXVyM3eZHDrmcXKFxxbF1fVQsr`)
        // console.log(meteoro.data)
        // adicionando uma nova pesquisa e recuperando o resultado anterior
        this.setState({ meteoro: [meteoro.data, ...this.state.meteoro], carregando: false })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color="dark">
                    <Container className="d-flex justify-content-center">
                        <Col xs="12" md="6">
                            <img className="rounded-circle border border-white mr-3" width="50" src="https://thispersondoesnotexist.com/image" alt="Pessoa aleatória" />
                            <span className="text-light">
                                Logado como
                                <Link className="text-light font-weight-bold ml-3" to="/">
                                    {this.props.match.params.usuario}
                                </Link>
                            </span>
                        </Col>
                    </Container>
                </Navbar>


                <Navbar color="dark" fixed="bottom">
                    <Container className="d-flex justify-content-center">
                        <Col xs="12" md="6">
                            {/* <Form onSubmit={this.stalkear}> */}
                            <Form onSubmit={this.meteoroDaPaixao}>
                                <InputGroup>
                                    <Input type="date" />
                                    <InputGroupAddon addonType="append">
                                        <Button color="success">
                                            {this.state.carregando ? (<Spinner size="sm" color="light"></Spinner>) : (<MdSearch size="20"></MdSearch>)}
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Container>
                </Navbar>

                {this.state.carregando ? (
                    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
                        <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="warning" />
                        <span>Carregando...</span>
                    </Container>
                ) : (
                        <Container className="mt-2 mb-5">
                            <Row>
                                {this.state.meteoro.map((meteoro => (
                                    <Col className="d-flex" xs="12" md="4" lg="4">
                                        <Card color="dark" className="text-light mb-4">
                                            <CardImg top width="100%" height="30%" src={meteoro.url} alt={meteoro.title} />
                                            <CardBody>
                                                <CardTitle className="h3 text-center">{meteoro.title}</CardTitle>
                                                <CardSubtitle className="text-muted text-center">{meteoro.date.split('-').reverse().join('/')}</CardSubtitle>
                                                <CardText className="text-justify">{meteoro.explanation}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )))}
                            </Row>
                        </Container>
                    )}

                {this.state.meteoro.length === 0 && (
                    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
                        <MdStar color="#000" size="150" />
                        <h3>Escolha uma data...</h3>
                    </Container>
                )}

                {/* {this.state.carregando && (
                    <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
                        <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="warning" />
                        <span>Carregando...</span>
                    </Container>
                )} */}

            </React.Fragment>
        )
    }
}

export default Home;