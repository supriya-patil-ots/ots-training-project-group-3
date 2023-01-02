import React, { useEffect, useState } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Checkbox,
} from "semantic-ui-react";
import "./index.css";

const loginData = [
  {
    userName: "supriya@otssolutions.com",
    password: "supriya123",
  },
  {
    userName: "saurabh@otssolutions.com",
    password: "saurabh123",
  },
  {
    userName: "sahil@otssolutions.com",
    password: "sahil123",
  },
];

const LoginOrSignup = ({ handleLoginActive, signupActive }) => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPawssword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [err, setErr] = useState("");

  // let msg="Enter valid username or password"

  const handleEmail = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPawssword(event.target.value);
  };
  const HandleLogin = () => {
    loginData.map((item) => {
      if (item.userName === userName && item.password === password) {
        console.log(userName);
        setErr("");
      } else {
        setErr("Enter valid username or password");
      }
    });
  };

  const handleSignin = (event) => {
    loginData.push({ userName, password });
    console.log(loginData);
    setOpen(false);
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
                  onChange={handleEmail}
                  value={userName}
                />
                <p className="err">{err}</p>
              </Form.Field>
              <Form.Field>
                <label>password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
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
            <Form onSubmit={handleSignin}>
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
