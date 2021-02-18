import React from 'react';

export default function Welcome() {

  setTimeout(() => {
    window.location.href = '/login';
  }, 5000);

  return (
    <section className="section auth">
      <div className="container">
        <h1>Welcome!</h1>
        <p>You have successfully registered a new account.</p>
        <p>You will be redirected to the login page shortly. If you are not redirected within 5 seconds, <a href="/login">click here</a></p>
      </div>
    </section>
  );
}
