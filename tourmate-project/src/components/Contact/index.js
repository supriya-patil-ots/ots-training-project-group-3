import React from "react";
import { Form, Button, Grid, Image } from "semantic-ui-react";
import "./index.css";
import Footer from "../Footer";
const Contact = () => {
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </div>
  );
};

export default Contact;
