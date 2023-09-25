import React from 'react';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import logo from '../assets/svg/wallet.svg';
import css from '../components/Forms/LoginForm/LoginForm.module.css';
import frame from '../assets/tablet-login/image-center.png';

const Login = () => {
  return (
    <div className={css.loginContainer}>
      <div className={css.tabletContainer}>
        <img src={frame}></img>
        <span className={css.finance}>Finance App</span>
      </div>
      <div className={css.loginWrapper}>
        <div className={css.logoContainer}>
          <img
            className={css.logo}
            src={logo}
            alt='wallet-logo'></img>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
