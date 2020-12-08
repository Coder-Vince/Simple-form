import React from "react";

const Form = ({
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setConfirm,
  name,
  email,
  password,
  confirm,
  wrongPass,
}) => {
  return (
    <div className="container">
      <form onSubmit={(event) => handleSubmit(event)}>
        <p>Username</p>
        <input
          value={name}
          placeholder="Username"
          onChange={(event) => setName(event.target.value)}
        />
        <p>Email</p>
        <input
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <p>Password</p>
        <input
          className={wrongPass && "error"}
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <p>Confirm Password</p>
        <input
          className={wrongPass && "error"}
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => setConfirm(event.target.value)}
        />
        <br />
        {wrongPass && (
          <p className="error-message">Passwords are not the same</p>
        )}
        <button type="submit"> Register</button>
      </form>
    </div>
  );
};

export default Form;
