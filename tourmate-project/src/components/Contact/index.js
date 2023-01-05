import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./index.css";
import Footer from "../Footer";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2>Need help planning your holiday?</h2>
        <Form verticalAlign="middle">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-source-city-name"
              label="Sourece City"
              placeholder="Sourece City"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-destination-city-name"
              label="Destination City"
              placeholder="Destination City"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="First name"
              placeholder="First name"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Last name"
              placeholder="Last name"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input label="Email" placeholder="joe@schmoe.com" />
          </Form.Group>
          <Button className="contact_btn">Submit</Button>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
