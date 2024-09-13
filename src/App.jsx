import React from 'react';
import Header from './components/Header/Header';
import './App.css'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Footer from './components/Footer/Footer';
import Section4or5 from './components/Section4or5/Section4or5';


function App() {
  
  return (
    <div>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section4or5/>
      <Section5/>
      <Footer/>
    </div>
  );
}

export default App;