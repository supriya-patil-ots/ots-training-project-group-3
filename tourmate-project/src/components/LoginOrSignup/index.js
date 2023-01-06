import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { Navigate } from "react-router-dom";
import "./index.css";

const users =
  // JSON.parse(localStorage.getItem("users")).length > 0 &&
  JSON.parse(localStorage.getItem("users"));

const LoginOrSignup = ({ handleLoginActive, signupActive }) => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPawssword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [err, setErr] = useState("");

  // let msg="Enter valid username or password"

  //  localStorage.setItem("items", JSON.stringify(items));

  const HandleLogin = (e) => {
    e.preventDefault();
    users.map((item) => {
      if (item.userName === userName && item.password === password) {
        console.log(userName);
        setErr("");
        setUserName("");
        setPawssword("");
        setOpen(false);
        <Navigate to="/" />;
      } else {
        setErr("Enter valid username or password");
      }
    });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    users.push({ userName, password });
    let users_str_data = JSON.stringify(users);
    localStorage.setItem("users", users_str_data);
    console.log(localStorage.getItem("users"));
    setOpen(false);
    setUserName("");
    setPawssword("");
  };
  useEffect(() => {
    setOpen(handleLoginActive);
  }, [handleLoginActive]);

  useEffect(() => {
    setOpen(signupActive);
  }, [signupActive]);

  return (
    <div className="loginorsignin">
      <Modal
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="tiny"
        // trigger={loginActive}
      >
        <Modal.Header>Login Or Signup</Modal.Header>
        <Modal.Content>
          {handleLoginActive ? (
            <Form widths="equal" onSubmit={HandleLogin}>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
                <p className="err">{err}</p>
              </Form.Field>
              <Form.Field>
                <label>password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPawssword(e.target.value)}
                  value={password}
                />
                <p className="err">{err}</p>
              </Form.Field>
              <Form.Field>
                <p>Forgot your password?</p>
              </Form.Field>

              <Button type="submit" className="sub-btn">
                Login
              </Button>
            </Form>
          ) : (
            <Form onSubmit={handleSignup}>
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </Form.Field>
              <Form.Field>
                <label>password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPawssword(e.target.value)}
                  value={password}
                />
              </Form.Field>
              <Form.Field>
                <p>Already a member? logIn.</p>
              </Form.Field>
              <Button type="submit" className="sub-btn">
                SignIn
              </Button>
            </Form>
          )}
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default LoginOrSignup;
