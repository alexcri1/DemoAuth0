import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Login Button Component
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} style={styles.loginButton}>
      Iniciar Sesión
    </button>
  );
};

// Logout Button Component
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      style={styles.logoutButton}
    >
      Cerrar Sesión
    </button>
  );
};

// Profile Component to display user info
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Cargando información del usuario...</p>;

  return (
    isAuthenticated && (
      <div style={styles.profileContainer}>
        <img src={user.picture} alt={user.name} style={styles.avatar} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div style={styles.container}>
      <h1>Bienvenido a Cruise0</h1>
      {isAuthenticated ? (
        <>
          <LogoutButton />
          <Profile />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  loginButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  profileContainer: {
    marginTop: "20px",
  },
  avatar: {
    width: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default App;



/**import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()} style={styles.button}>
      Log In
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default LoginButton;






/**import logo from './logo.svg';
//import './App.css';

//function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/**/
