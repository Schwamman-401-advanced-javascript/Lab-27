import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import './styles/app.scss';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
