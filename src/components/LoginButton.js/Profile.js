import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading user info...</p>;
  }

  return (
    isAuthenticated && (
      <div style={styles.container}>
        <img src={user.picture} alt={user.name} style={styles.avatar} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  avatar: {
    width: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default Profile;
