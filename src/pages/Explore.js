import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Explorar() {
  return (
    <>
      <header>
        <Header title="Explorar" search={ false } />
      </header>
      <Footer />
    </>
  );
}

export default Explorar;
