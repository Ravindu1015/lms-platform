import React, { useEffect, useState } from 'react';
import User from '../components/User';
import { getProfile } from '../services/authService';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then((data) => setUser(data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return <User {...user} />;
}

export default Profile;
