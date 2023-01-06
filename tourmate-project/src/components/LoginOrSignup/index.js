import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { GoogleLogin,googleLogout,useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

function LoginOrSignup() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse =>{ 
      // -------------- add axios and get complete information .................
      console.log(tokenResponse)},
  });
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Modal
        closeIcon
        open={open}
        trigger={<Button>Login or Signup</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
       
      >
        <Header icon="google" content="Please Sign In with Google" />
        <Modal.Content>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // console.log(credentialResponse);
              var decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() =>{ 
            googleLogout();
            setOpen(false)}}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" onClick={() =>{
            login();
            setOpen(false)}}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default LoginOrSignup;
