// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


// eslint-disable-next-line react/prop-types
function AuthForm({ onSubmit, type }) {
  const [form, setForm] = useState({ username: '', password: '', year: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="p-6" onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        className="p-2 border"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <label>Password:</label>
      <input
        type="password"
        className="p-2 border"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      {type === 'register' && (
        <>
          <label>Year:</label>
          <input
            type=
            className="p-2 border"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
          />
        </>
      )}
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
        {type === 'register' ? 'Register' : 'Login'}
      </button>
    </form>
  );
}

export default AuthForm;
