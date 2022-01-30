import React, { useContext,useState } from "react";
import { ThemeContext } from "../../../theme/ThemeContext";
import ThemeToggleButton from "../../custom/ThemeToggleButton";
import { EventPageContainer,CardContainer,CardTotal,Heading,CardText,CardButton} from "./EventsPage.style";

import {Card,Modal,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Heading>Events</Heading>
    <EventPageContainer>
    <CardTotal >
    <CardContainer>
  <Card.Img variant="top" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <CardButton onClick={handleShow}>
        Launch demo modal
      </CardButton>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <CardButton onClick={handleClose}>
            Close
          </CardButton>
        </Modal.Footer>
      </Modal>
  </Card.Body>
</CardContainer>
    </CardTotal>
    <CardTotal >
<CardContainer >
  <Card.Img variant="top"  />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <CardButton onClick={handleShow}>
        Launch demo modal
      </CardButton>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <CardButton onClick={handleClose}>
            Close
          </CardButton>
        </Modal.Footer>
      </Modal>
  </Card.Body>
</CardContainer>
</CardTotal>


<CardTotal>
<CardContainer>
  <Card.Img variant="top"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <CardButton onClick={handleShow}>
        Launch demo modal
      </CardButton>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <CardButton onClick={handleClose}>
            Close
          </CardButton>
        </Modal.Footer>
      </Modal>
  </Card.Body>
</CardContainer>
</CardTotal>
    </EventPageContainer>
    </>
  );
}

export default Example;