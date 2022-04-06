import React from 'react';
import ReactDOM from 'react-dom';

import classes from './DeleteModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.deleteTitle}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.deleteMessage}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onClose}>Annulla</button>
        <button onClick={props.onClick}>Elimina</button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
        <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.deleteTitle}</h2>
        </header>
        <div className={classes.content + ' border-bottom border-top'}>
          <p>{props.deleteMessage}</p>
        </div>
        <footer className={classes.actions}>
          <button className="btn btn-outline-primary me-2" onClick={props.onClose}>Annulla</button>
          <button className=" btn btn-danger me-2" onClick={props.onClick}>Elimina</button>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;