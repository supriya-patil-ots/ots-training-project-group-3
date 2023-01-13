import React, { useEffect, useState } from "react";
import { Button, Form, Header, Icon, Input, Modal } from "semantic-ui-react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signUpData, loginData, logOutData } from "../../redux/loginreducer";
import "./index.css";

function LoginOrSignup({ title }) {
  const { userData } = useSelector((state) => state.user.data);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      let newData = Object.keys(userData).map((user) => {
        return userData[user];
      });
      setUserInfo({ ...newData[0] });
    }
  }, [userData]);


  if (userInfo.email) {
    let storageData = JSON.parse(localStorage.getItem("storageData") || "[]");
    let data1 = { ...userInfo };
    if(storageData.length===0){
      storageData.push(data1);
    }else if(storageData.length>0){
      let data= storageData.filter((c)=>{
       if(c.email===data1.email){
        return true
       }else{
        return false;
       }
      });

      if(data.length===0){
        storageData.push(data1);
      }
    }
    
    localStorage.setItem("storageData", JSON.stringify(storageData));
  }
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer${tokenResponse.access_token}`,
            },
          }
        );
        dispatch(signUpData(data.data));
      } catch (error) {
        console.log(error);
      }
    },
  });
  const [open, setOpen] = React.useState(false);
  function addData(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const handleset = () => {
    if (
      title === "Sign Up" &&
      input.name &&
      input.email &&
      input.phone &&
      input.password
    ) {
      dispatch(signUpData(input));
      setInput({ name: "", email: "", phone: "", password: "" });
    } else {
      dispatch(loginData(input));
      setInput({ name: "", email: "", phone: "", password: "" });
    }
  };

  return (
    <>
      {Object.keys(userData).length === 0 ? (
        <Modal
          closeIcon
          open={open}
          trigger={
            <Button basic color="black" circular>
              {title}
            </Button>
          }
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          size="mini"
        >
          <Header>{title}</Header>

          <Modal.Content>
            <Form autoComplete="off">
              {title === "Sign Up" && (
                <Form.Field>
                  <Input
                    placeholder="Enter Name"
                    onChange={addData}
                    name="name"
                    value={input.name}
                    required='true'
                  />
                </Form.Field>
              )}
              {title === "Sign Up" && (
                <Form.Field>
                  <Input
                    placeholder="Mobile No."
                    onChange={addData}
                    name="phone"
                    value={input.phone}
                    required='true'
                  />
                </Form.Field>
              )}
              <Form.Field>
                <Input
                  placeholder="Enter e-mail "
                  onChange={addData}
                  name="email"
                  value={input.email}
                  required='true'
                  type="email"
                />
              </Form.Field>
              <Form.Field>
                <Input
                  placeholder="Enter Password"
                  onChange={addData}
                  name="password"
                  value={input.password}
                  required='true'
                  type="password"
                />
              </Form.Field>
            </Form>
            <Button
              secondary
              onClick={handleset}
              style={{
                backgroundColor: "#01afd1",
                color: "#fff",
                margin: "5px",
              }}
              circular
            >
              {title}
            </Button>
            <Button
              onClick={() => {
                login();
                setOpen(false);
              }}
              secondary
              circular
              style={{
                backgroundColor: "#01afd1",
                color: "#fff",
                margin: "5px",
              }}
            >
              <Icon name="google" /> {title} with google
            </Button>
          </Modal.Content>
        </Modal>
      ) : (
        <Modal
          closeIcon
          open={open}
          trigger={
            <Button circular className="userinfo_btn">
              <Icon name="user circle" size="large" className="usericon" />
              <span className="username"> {userInfo.name}</span>
            </Button>
          }
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          size='small'
        >
          <Header icon="plane" content="Welcome To tourmate .." />
          <Modal.Content>
            <h1>Hi {userInfo.name} ..</h1>
          </Modal.Content>
          <Modal.Actions>
            <Button
              style={{ backgroundColor: "red", color: "#fff" }}
              onClick={() => {
                dispatch(logOutData(userInfo.email));
                googleLogout();
                setOpen(false);
              }}
            >
              <Icon name="remove" /> Log Out
            </Button>
            <Button
              className="signup_btn"
              onClick={() => setOpen(false)}
              style={{ backgroundColor: "#01afd1", color: "#fff" }}
            >
              <Icon name="plane" /> Proceed to tourmate
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </>
  );
}

export default LoginOrSignup;
