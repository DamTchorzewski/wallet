import React from 'react';
import css from '../components/Forms/RegistrationForm/RegistrationForm.module.css';
import logo from '../assets/svg/wallet.svg';
import RegistrationForm from '../components/Forms/RegistrationForm/RegistrationForm';
import frame from '../assets/tablet-registration/image-center.png';

const Registration = () => {
  return (
    <div className={css.registerContainer}>
      <div className={css.tabletContainer}>
        <img src={frame}></img>
        <span className={css.finance}>Finance App</span>
      </div>
      <div className={css.registerWrapper}>
        <div className={css.logoContainer}>
          <img
            className={css.wallet}
            src={logo}
            alt='wallet-logo'></img>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
