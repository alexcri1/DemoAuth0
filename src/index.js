import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));
const domain = "dev-qnp1jje85v4yttop.us.auth0.com";
const clientId = "jyFPge7vu6IGxyKPwqy0TbGaRehRh9pH";

root.render(
<Auth0Provider
    domain="dev-qnp1jje85v4yttop.us.auth0.com"
    clientId="jyFPge7vu6IGxyKPwqy0TbGaRehRh9pH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);