import React, { useState } from "react";
import { Form, Button, Grid, Image } from "semantic-ui-react";
import "./index.css";
import Model from "./Model";
const Contact = () => {
  const [input, setInput] = useState({
    scity: "",
    dcity: "",
    fname: "",
    lname: "",
    email:''
  });
  function addData(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return (
    <div className="contact_page">
      <Grid stackable divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column stretched>
            <Image
              src="https://a0.muscache.com/im/pictures/miso/Hosting-12296951/original/cc1690b6-be6b-4155-bc0c-39a73f5ad2b8.jpeg?im_w=960"
              alt="contact-image"
            />
          </Grid.Column>
          <Grid.Column>
            <div className="contact">
              <h2>Need help planning your holiday?</h2>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    id="form-subcomponent-shorthand-input-source-city-name"
                    label="Sourece City"
                    name='scity'
                    placeholder="Sourece City"
                    value={input.scity}
                    onChange={addData}
                    required='true'
                  />
                  <Form.Input
                    fluid
                    id="form-subcomponent-shorthand-input-destination-city-name"
                    label="Destination City"
                    name='dcity'
                    placeholder="Destination City"
                    value={input.dcity}
                    onChange={addData}
                    required='true'
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="First name"
                    name='fname'
                    placeholder="First name"
                    value={input.fname}
                    onChange={addData}
                    required='true'
                  />
                  <Form.Input
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="Last name"
                    name='lname'
                    placeholder="Last name"
                    value={input.lname}
                    onChange={addData}
                    required='true'
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input label="Email" placeholder="joe@schmoe.com" name='email' required='true'  value={input.email} onChange={addData}/>
                </Form.Group>
                <Button secondary circular 
                onClick={()=>{
                  setInput({
                    scity: "",
                    dcity: "",
                    fname: "",
                    lname: "",
                    email:''
                  })
                
                }}>
                  <Model/>
                  </Button>
                
              </Form>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Contact;
