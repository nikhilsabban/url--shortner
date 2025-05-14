import React from 'react';

const FrontPage = () => {
  return (
    <div style={{
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg,rgb(149, 225, 225),rgb(208, 217, 226))', // Grey gradient
      padding: '20px',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#333',
        marginBottom: '40px',
        fontWeight: '600',
      }}>
        URL Shortener
      </h1>

      <p style={{
        fontSize: '1.2rem',
        color: '#555',
        marginBottom: '40px',
        maxWidth: '500px',
      }}>
        Welcome to the URL Shortener! Shorten your long URLs and track their usage with ease. To get started, please log in or sign up.
      </p>

      <div style={{
        display: 'flex',
        gap: '20px',
      }}>
        <button
          onClick={() => window.location.href = 'http://localhost:8001/signup'}
          style={{
            padding: '15px 30px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}
        >
          Sign Up
        </button>

        <button
          onClick={() => window.location.href = 'http://localhost:8001/login'}
          style={{
            padding: '15px 30px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(19, 17, 17, 0.1)',
            transition: 'background-color 0.3s ease',
          }}
        >
          Log In
        </button>
      </div>

      <footer style={{
        position: 'absolute',
        bottom: '20px',
        fontSize: '0.9rem',
        color: '#777',
      }}>
        <p>© 2025 URL Shortener. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FrontPage;
