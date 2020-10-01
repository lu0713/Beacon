import React from 'react';
import Header from './HeaderContainer.jsx'
import Main from './MainContainer.jsx'
import Footer from './FooterContainer.jsx'
import '../App.scss';
import CLIENT_ID from './Secret.js';

const baseURI = "https://www.linkedin.com/oauth/v2/authorization";
const redirectURI = "http://localhost:8080/api/linkedin";
const state = '46S7DJD0a9b';
const scope = "r_liteprofile%20r_emailaddress";
const authorizationURI = `${baseURI}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${redirectURI}&state=${state}&scope=${scope}`;

function App() {
  return (
    <div className="App">
      <Header />
      <p>Hello World</p>
      <a href={authorizationURI} >
        LinkedIn
      </a>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
