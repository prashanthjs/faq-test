import React, { Component } from 'react';
import FaqListingContainer from './components/FaqListingContainer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='bg-light' data-test='App'>
            <header>
                <div className='navbar navbar-dark bg-dark box-shadow'>
                    <div className='container d-flex justify-content-between'>
                        <a href='/' className='navbar-brand d-flex align-items-center'>
                            <strong>React Test</strong>
                        </a>
                    </div>
                </div>
            </header>
            <div className='container mt-3'>
                <FaqListingContainer data-test='FaqListingContainer'/>
            </div>
        </div>
    );
  }
}

export default App;
