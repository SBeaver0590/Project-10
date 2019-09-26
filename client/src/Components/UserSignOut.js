import React from 'react';
import { Redirect } from 'react-router-dom';

export default ({context}) => {    //Signout, redirect to homepage
  context.actions.signOut();
  return (
    <Redirect to="/" />
  );
}