import React, { Component } from 'react';
import Home from './view/Home'
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css"

class App extends Component {
	render() {
		return <Routes/>
	}
}

export default App