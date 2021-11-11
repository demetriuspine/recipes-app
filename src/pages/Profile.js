import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Profile() {
  return (
    <>
      <header>
        <Header title="Perfil" search={ false } />
      </header>
      <Footer />
    </>
  );
}

export default Profile;
