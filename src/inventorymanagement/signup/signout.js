// import React from 'react';

// export default function Logoutout({ user, onLogout }) {
//   return (
//     <div>
//       <p>Welcome, {user.username}!</p>
//       <button onClick={onLogout}>Logout</button>
//     </div>
//   );
// }

import { useLocation } from 'react-router-dom';

export default function Signout() {
  // Access the location object using useLocation
  const location = useLocation();

  // Extract information from the location object
  const { pathname, search, hash } = location;

  return (
    <div>
      <h2>Current Location:</h2>
      <p>Pathname: {pathname}</p>
      <p>Search: {search}</p>
      <p>Hash: {hash}</p>
    </div>
  );
}
 