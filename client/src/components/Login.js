import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [users, setUsers] = useState({
    credentials: {
      username: "",
      password: ""
    },
    isFetching: false
  });

  function handleChange(e) {
    setUsers({
      ...users,
      credentials: {
        ...users.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  function login(e) {
    e.preventDefault();
    setUsers({ ...users, isFetching: true });
    axiosWithAuth()
      .post("/login", users.credentials)
      .then(res => {
        console.log("res.data", res.data);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles-page");
      })
      .catch(err => console.log("FAT ERROR", err))
      .finally(() => {
        setUsers({
          ...users,
          credentials: {
            ...users.credentials,
            username: "",
            password: ""
          },
          isFetching: false
        });
      });
  }
  
  return (
    <div>
      <h1>Login!</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="login..."
          onChange={handleChange}
          value={users.credentials.username}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password..."
          onChange={handleChange}
          value={users.credentials.password}
        />
        <br />
        <button disabled={users.isFetching} type="submit">
          {users.isFetching ? <p>Submitting</p> : <p>Submit</p>}
        </button>
      </form>
    </div>
  );
};

export default Login;
