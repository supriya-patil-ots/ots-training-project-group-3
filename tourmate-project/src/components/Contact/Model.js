import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function Model() {
    const [open, setOpen] = React.useState(false)
  return (
    <Modal
    closeIcon
    open={open}
    trigger={<Button circular secondary>Submit</Button>}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    size='tiny'
  >
    <Header icon='user circle outline' content='You will be contacted by tourmate team.' size='large'/>
    <Modal.Content>
    <Header icon='check circle outline' content='Thank You, your details has been saved' />
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' onClick={() => setOpen(false)}>
        <Icon name='checkmark' /> Add Another Detail.
      </Button>
    </Modal.Actions>
  </Modal>
  )
}

export default Model;