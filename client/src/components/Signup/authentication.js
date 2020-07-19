import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';
 
function GoogleAuth() {
const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    onAutoLoadFinished,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    autoLoad,
    isSignedIn,
    fetchBasicProfile,
    redirectUri,
    discoveryDocs,
    onFailure,
    uxMode,
    scope,
    accessType,
    responseType,
    jsSrc,
    onRequest,
    prompt
  })
 
const responseGoogle = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <GoogleLogin
    clientId="v1mpz9pqJ_MQNKsKj3VqNJ1FTAYyqT8XYEr1Gv4GyZ4.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);
};

export default GoogleAuth;
