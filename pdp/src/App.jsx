import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Footer from 'home/Footer';
import Header from 'home/Header';
import SafeComponent from './SafeComponent';

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className='my-10'>Pdp Page Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
