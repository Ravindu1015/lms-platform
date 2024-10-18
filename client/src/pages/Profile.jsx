// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import User from '../components/User';
import { getProfile } from '../services/authService';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then((data) => setUser(data));
  }, []);

  if (!user) return <p>Loading... data will show quickly</p>;

  return <User {...user} />;
}

export default Profile;
