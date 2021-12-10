import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from './pages/Home';
import ProgramSearch from './pages/ProgramSearch';
import ProgramDetail from './pages/ProgramDetail';
import ContactAgent from './pages/ContactAgent';
import AdminHome from './pages/AdminHome';
import AdminCreateProgram from './pages/AdminCreateProgram';

import Header from './components/Header';
import Footer from './components/Footer';
import TravelState from './context/Travel/TravelState';
import ProgramState from './context/Programs/ProgramState';
import './App.scss';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0095BF',
		},
		secondary: {
			main: '#FFD399',
		},
	},
});

// eslint-disable-next-line
const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<TravelState>
				<ProgramState>
					<Header />
					<Switch>
						<Route path="/programs" exact component={ProgramSearch} />
						<Route
							path="/programs/:programsId"
							exact
							component={ProgramDetail}
						/>
						<Route path="/contact-agent" exact component={ContactAgent} />
						<Route path="/" exact component={Home} />
						<Route path="/admin/home" exact component={AdminHome} />
						<Route path="/admin/create" exact component={AdminCreateProgram} />
					</Switch>
					<Footer />
				</ProgramState>
			</TravelState>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
