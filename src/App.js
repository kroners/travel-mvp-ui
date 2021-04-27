import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ProgramSearch from './pages/ProgramSearch'
import ProgramDetail from './pages/ProgramDetail'
import ContactAgent from './pages/ContactAgent'
import Header from './components/Header'
import Footer from './components/Footer'
import { ProjectProvider } from './context'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import './App.scss';
import variables from './style/variables.scss';

console.log({ variables })

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

const App = () => (
  <ThemeProvider theme={theme}>
    <ProjectProvider>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route path="/programs" exact component={ProgramSearch} />
            <Route path="/programs/:programsId" exact component={ProgramDetail} />
            <Route path="/contact-agent" exact component={ContactAgent} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    </ProjectProvider>
  </ThemeProvider>
);

export default App;
