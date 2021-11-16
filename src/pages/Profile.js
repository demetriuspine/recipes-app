import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Profile() {
  const [userEmail, setUserEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userLocal = localStorage.getItem('user');
    if (userLocal) {
      setUserEmail(JSON.parse(userLocal));
    }
  }, []);

  return (
    <>
      <header>
        <Header title="Perfil" search={ false } />
      </header>
      <main>
        <h2 data-testid="profile-email">
          { userEmail.email }
        </h2>
        <button
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => {
            history.push('/receitas-feitas');
          } }
        >
          Receitas Feitas
        </button>
        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => {
            history.push('/receitas-favoritas');
          } }
        >
          Receitas Favoritas
        </button>
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ () => {
            localStorage.clear();
            history.push('/');
          } }
        >
          Sair
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
