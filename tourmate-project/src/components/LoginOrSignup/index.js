import React, { useEffect, useState } from "react";
import { Button, Form, Header, Icon, Input, Modal } from "semantic-ui-react";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { signUpData,loginData ,logOutData} from "../../redux/loginreducer";


function LoginOrSignup({ title }) {
  const {userData}=useSelector((state)=>state.user.data);
  const [input, setInput] = useState({ name: '', email: '', phone: '', password: '' });
  const [userInfo,setUserInfo]=useState({});
  useEffect(()=>{
    if(Object.keys(userData).length>0){
      let newData= Object.keys(userData).map((user)=>{
        return userData[user]
      });
      setUserInfo({...newData[0]});
      console.log(userInfo);
    }
    
  },[userData])
  const dispatch= useDispatch();
  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        const data = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            "Authorization":
              `Bearer${tokenResponse.access_token}`
          }
        });
        // console.log(data.data);
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
  const handleset=()=>{
    if(title==='Sign Up'&&input.name&&input.email&&input.phone&&input.password){
      dispatch(signUpData(input));
      setInput({ name: '', email: '', phone: '', password: '' });
    }else{
      dispatch(loginData(input));
      setInput({ name: '', email: '', phone: '', password: '' });
    }
  }

  return (
    <>{
      Object.keys(userData).length===0?<Modal
      closeIcon
      open={open}
      trigger={<Button basic color="black" circular >{title}</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size='mini'

    >
      <Header>{title}</Header>

      <Modal.Content>
        <Form >
        {title==='Sign Up'&&<Form.Field>
            <Input placeholder='Enter Name' onChange={addData} name='name' value={input.name} />
          </Form.Field>}
          {title==='Sign Up'&&<Form.Field>
           <Input placeholder='Mobile No.' onChange={addData} name='phone' value={input.phone} />
          </Form.Field>}
          <Form.Field>
            <Input placeholder='Enter e-mail ' onChange={addData} name='email' value={input.email} />
          </Form.Field>
          <Form.Field>
            <Input placeholder='Enter Password' onChange={addData} name='password' value={input.password}/>
          </Form.Field>
        </Form>
        <Button secondary onClick={handleset} style={{margin:5}} circular >{title}</Button>
        <Button onClick={() => {
          login();
          setOpen(false)
        }}
        secondary
        circular
        style={{margin:5}}>
          <Icon name="google"  /> {title} with google
        </Button>
      </Modal.Content>

    </Modal>
    :
     <Modal
      closeIcon
      open={open}
      trigger={ <Button basic  circular color="black"><Icon name="user circle" size="big" />{userInfo.name}</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='plane' content='Welcome To tourmate ..' />
      <Modal.Content>
        <h1>
         Hi {userInfo.name} ..
        </h1>
      </Modal.Content>
      <Modal.Actions>
      <Button color="red" onClick={() => {
          dispatch(logOutData(userInfo.email));
          googleLogout();
          setOpen(false)
        }}>
          <Icon name="remove" /> Log Out
        </Button>
        <Button color='blue' onClick={() => setOpen(false)}>
          <Icon name='plane' /> Proceed to tourmate
        </Button>
      </Modal.Actions>
    </Modal>
}
    </>
  );
}

export default LoginOrSignup;
