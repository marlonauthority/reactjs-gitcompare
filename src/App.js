import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import Main from './pages/Main';

// stateless nao possui "state"
const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
