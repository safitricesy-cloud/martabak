import React from 'react';

const LoginForm = () => {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.title}>Login</h2>

        <div style={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Masukkan Email" style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Masukkan Password" style={styles.input} />
        </div>

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}


export default LoginForm;