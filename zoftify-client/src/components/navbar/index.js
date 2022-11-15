import axios from 'axios';
import React, { useState } from 'react';
import Select from 'react-select'
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Input
} from 'reactstrap';

function Header() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [getTime, setGetTime] = useState("00:00");
  const [status, setStatus] = useState("");

  const options = [
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Draft' },
  ]

  const toggleModal = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault()
    let time = getTime.replace("T", " ")

    axios.post('http://localhost:7000/api/posts', {title, time, status})
    .then((response)=>{
      console.log(response)
      window.location.reload(true)
    })
    .catch((error) => {
        console.log(error)
    })
  }
  return (
    <div className='pt-2 mb-3'>
      <Navbar>
        <NavbarBrand href="/">Zoftify</NavbarBrand>
        <Button onClick={toggleModal}>Add Post</Button>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add Post</ModalHeader>

        <ModalBody>
          <Input 
            required
            value={title}
            onChange={e => setTitle(e.target.value)} 
            placeholder="Add Title"
            className="mb-2"
          />
          <Input
            required
            type='datetime-local'
            value={getTime}
            onChange={e => setGetTime(e.target.value)}
            min="00:00"
            max="23:59"
            step="60"
            placeholder="Add Time"
            className="mb-2"
          />
          <Select 
            options={options}
            required
            onChange={e => setStatus(e.value)}
            value={status.value}
          />
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      </Navbar>
    </div>
  );
}

export default Header;
