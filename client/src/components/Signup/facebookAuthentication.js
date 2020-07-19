import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <FacebookLogin
    appId="282569062814597"
    autoLoad={true}
    fields=""
    onClick={}
    callback={responseFacebook} />,
);

export default responseFacebook;