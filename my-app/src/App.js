import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ToDo from './Component/ToDo';

class App extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <> 
    <Header/>
    <ToDo />
    <Footer/>
      </> );} }

export default App;

 