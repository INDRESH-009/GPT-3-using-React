import React from 'react'

import {CTA,Nav,Brand} from './components';
import {Footer,Blogs,Possiblity,WhatGPT3,Header,Features} from './containers';
import './app.css';
const App = () => {
  return (
    <div className='App'>

      <div className='gradiend__bg'>
        <Nav/>
        <Header/>
      </div>

      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possiblity/>
      <Blogs/>
      <Footer/>

    </div>
  )
}

export default App
