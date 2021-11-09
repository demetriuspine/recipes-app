import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const emailValidation = (emailToValidate, passwordToValidate) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const NUMBER_SIX = 6;
    if (passwordToValidate.length > NUMBER_SIX && regex.test(emailToValidate)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setIsValid(emailValidation(email, password));
  }, [email, password]);

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  };

  return (
    <main>
      <section>
        <input
          type="text"
          placeholder="Email"
          data-testid="email-input"
          name="email-input"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          name="password-input"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
        <button
          disabled={ !isValid }
          type="button"
          data-testid="login-submit-btn"
          onClick={ handleClick }
        >
          Entrar

        </button>
      </section>
    </main>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
