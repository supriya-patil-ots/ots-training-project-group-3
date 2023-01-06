import React, { useState } from "react";
import { Button, Form, Header, Icon, Input, Modal } from "semantic-ui-react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios, { Axios } from 'axios'

function LoginOrSignup({ name }) {
  const [input, setInput] = useState({ name: '', email: '', phone: '', password: '' });
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        const data = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            "Authorization":
              `Bearer${tokenResponse.access_token}`
          }
        });
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    },
  });
  const [open, setOpen] = React.useState(false);
  function addData(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Modal
        closeIcon
        open={open}
        trigger={<Button primary >{name}</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        size='mini'

      >
        <Header>{name}</Header>

        <Modal.Content>
          <Form >
          {name==='Sign Up'&&<Form.Field>
              <Input placeholder='Enter Name' onChange={addData} name='name' value={input.firstName} />
            </Form.Field>}
            {name==='Sign Up'&&<Form.Field>
             <Input placeholder='Mobile No.' onChange={addData} name='phone' value={input.phone} />
            </Form.Field>}
            <Form.Field>
              <Input placeholder='Enter e-mail ' onChange={addData} name='email' value={input.email} />
            </Form.Field>
            <Form.Field>
              <Input placeholder='Enter Password' onChange={addData} name='password' value={input.password}/>
            </Form.Field>
          </Form>
          <Button secondary>{name}</Button>
          
        </Modal.Content>
        <Modal.Actions>
          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              var decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            shape="circle"
            type="Icon"
          /> */}
          <Button color="red" onClick={() => {
            googleLogout();
            setOpen(false)
          }}>
            <Icon name="remove" /> Log Out
          </Button>
          <Button color="green" onClick={() => {
            login();
            setOpen(false)
          }}>
            <Icon name="google" /> Sign In with google
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default LoginOrSignup;
