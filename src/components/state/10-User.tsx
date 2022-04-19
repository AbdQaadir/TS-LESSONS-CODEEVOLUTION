import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
  };
  const handleLogout = () => {
    setUser({} as AuthUser);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
}

export default User;
