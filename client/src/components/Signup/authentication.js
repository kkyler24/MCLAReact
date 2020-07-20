import React, { useState, setState } from "react";
import {Redirect} from "react-router-dom";
import GoogleLogin from "react-google-login";

function GoogleAuth (props) {
console.log(props);
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [url, setUrl] = useState("");

    const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    return <Redirect to="/Games"/>;
    };

    return (
        <>
        <h1 style={{color:"white"}}>Login With Google</h1>
        <h2 style={{color:"white"}}>Welcome: {name}</h2>
        <h2 style={{color:"white"}}>Email: {email}</h2>
        <img src={url} alt={name}/>
        <h2></h2>
        <GoogleLogin
        clientId="33277430818-uf02c61bkrcins59geal04p0r9deuaq6.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </>
    )
}

export default GoogleAuth;
