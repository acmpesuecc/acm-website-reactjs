import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../theme/ThemeContext";
import ThemeToggleButton from "../../custom/ThemeToggleButton";
import {
  EventPageContainer,
  CardContainer,
  CardTotal,
  Heading,
  CardText,
  CardButton,
} from "./EventsPage.style";

import HacktoberFest_2020 from "./assets/Hacktoberfest2020.jpeg";
import HacktoberFest_2019 from "./assets/Hacktoberfest2019.png";
import Hoc from "./assets/hoc.jpg";
import Res from "./assets/res_card.png";
import Oss_Ses from "./assets/oss_ses.jpg";
import Tensor2 from "./assets/tensor2.png";
import Tensor1 from "./assets/tensor1.jpg";

import { Card, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EventsPage() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setshow4] = useState(false);
  const [show5, setshow5] = useState(false);
  const [show6, setshow6] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);
  const handleShow4 = () => setshow4(true);
  const handleClose4 = () => setshow4(false);
  const handleShow5 = () => setshow5(true);
  const handleClose5 = () => setshow5(false);
  const handleShow6 = () => setshow6(true);
  const handleClose6 = () => setshow6(false);

  return (
    <>
      <Heading>Events</Heading>
      <EventPageContainer>
        <CardTotal>
          <CardContainer>
            <Card.Img variant="top" src={Tensor2} />
            <Card.Body>
              <Card.Title>Tensor 2.0</Card.Title>
              <CardText>The second iteration of our 17-hour datathon.</CardText>
              <CardButton onClick={handleShow}>Launch</CardButton>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <a href="https://acmpesuecc.github.io/events/tensor2.html">
                      What is Tensor?
                    </a>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Tensor 2.0 is a Datathon aimed at getting participants more
                  involved in the upcoming field of Data Science and Machine
                  Learning It consists of 2 tracks, the Beginner's Track aimed
                  at getting freshers interested and giving them an introduction
                  to the field, and the Competitive Track which is open to all
                  Undergraduate students and required skills such as finding the
                  right data, analyzing and understanding it and applying those
                  insights to formulate a conclusion.
                </Modal.Body>
                <Modal.Footer>
                  <CardButton onClick={handleClose}>Close</CardButton>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </CardContainer>
        </CardTotal>

        <CardTotal>
          <CardContainer>
            <Card.Img variant="top" src={Tensor1} />
            <Card.Body>
              <Card.Title>Tensor 1.0</Card.Title>
              <CardText>The first iteration of our 17-hour datathon.</CardText>
              <CardButton onClick={handleShow2}>Launch</CardButton>

              <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <a href="https://acmpesuecc.github.io/events/tensor.html">
                      What is Tensor v1.0
                    </a>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Tensor v1.0 is a 19 hour Datathon organized by ACM PESU ECC
                  Chapter, DSC, and Tehcwarts in collaboration Some stuff about
                  the Datathon Some more stuff about the Datathon.
                  <hr />
                  Venue: PES University EC Campus
                  <br />
                  Duration: 19 hours
                </Modal.Body>
                <Modal.Footer>
                  <CardButton onClick={handleClose2}>Close</CardButton>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </CardContainer>
        </CardTotal>

        <CardTotal>
          <CardContainer>
            <Card.Img variant="top" src={Res} />
            <Card.Body>
              <Card.Title>Research Talk</Card.Title>
              <CardText>
                The event provided insights on how to approach the field of
                research.
              </CardText>
              <CardButton onClick={handleShow3}>Launch</CardButton>

              <Modal show={show3} onHide={handleClose3} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <a href="https://acmpesuecc.github.io/events/research_talk.html">
                      What is Research Talk?
                    </a>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  We, the members of ACM PESUECC Student Chapter organized a
                  'Research Talk' in the campus on the 12th of March 2020. This
                  event's objective was to provide insights on how to approach
                  the field of research. It was a highly informative session and
                  our keynote speaker, Dr. Gowri Srinivasa provided answers to
                  many common queries of individuals looking to dive into the
                  field of research. The talk started with Dr. Gowri addressing
                  these common queries after which she spoke about literature
                  survey and trending topics to work on along with an
                  individual's personal interest. She also talked about the work
                  she had done at Narayana Nethralaya. Then she discussed about
                  Google scholar and the general structure of research paper
                  along with many more topics of interest.
                  <hr />
                  Venue: Seminar Hall, PES University Electronic City Campus
                  <br />
                  Date: 12th of March, 2020.
                </Modal.Body>
                <Modal.Footer>
                  <CardButton onClick={handleClose3}>Close</CardButton>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </CardContainer>
        </CardTotal>

        <CardTotal>
          <CardContainer>
            <Card.Img variant="top" src={HacktoberFest_2020} />
            <Card.Body>
              <Card.Title>HacktoberFest 2020</Card.Title>
              <CardText>
                The second iteration of our Open-Source hacknight.
              </CardText>
              <CardButton onClick={handleShow1}>Launch</CardButton>

              <Modal show={show1} onHide={handleClose1} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <a href="https://acmpesuecc.github.io/events/hacktoberfest_2020.html">
                      What is Hacktoberfest?
                    </a>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Hacktoberfest is a month-long celebration of open source
                  software run by DigitalOcean in partnership with GitHub and
                  Twilio. Hacktoberfest is open to everyone in our global
                  community! Five quality pull requestsmust be submitted to
                  public GitHub repositories.You can sign up anytime between
                  October 1 and October 31.
                </Modal.Body>
                <Modal.Footer>
                  <CardButton onClick={handleClose1}>Close</CardButton>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </CardContainer>
        </CardTotal>

        <CardTotal>
          <CardContainer>
            <Card.Img variant="top" src={Hoc} />
            <Card.Body>
              <Card.Title>Hour of Code</Card.Title>
              <CardText>
                A 2-day learning event conducted in The Amaatra Academy to bring
                interest in the students.
              </CardText>
              <CardButton onClick={handleShow4}>Launch</CardButton>

              <Modal show={show4} onHide={handleClose4} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <a href="https://acmpesuecc.github.io/events/hourofcode.html">
                      What is Hour of Code?
                    </a>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  We, the members of ACM PESUECC Student Chapter conducted the
                  'Hour of Code' event at The Amaatra Academy on the 13th and
                  14th of December 2019. Our major goal was to bring interest in
                  the students towards Computer Science. We introduced game
                  application development in an interactive way to class 6
                  students and taught them the logic behind it. The students of
                  6th std were introduced to the concepts of Scratch and were
                  told the benefits of pair programming Post the briefing
                  session, the students began the hands on session on "Game
                  development using MIT app inventor" where students developed
                  "Space Invader" Game. ACM PESU-ECC Team is thankful to ACM
                  India fro giving us the opportunity to conduct the Hour of
                  Code event.
                  <hr />
                  Venue: The Amaatra Academy
                  <br />
                  Date: December 13th and 14th, 2019
                </Modal.Body>
                <Modal.Footer>
                  <CardButton onClick={handleClose4}>Close</CardButton>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </CardContainer>
        </CardTotal>

        <CardTotal>
          <CardContainer>
            <Card.Img variant="top" src={HacktoberFest_2019} />
            <Card.Body>
              <Card.Title>HacktoberFest 2019</Card.Title>
              <CardText>
                A 12-hour 'Open Source Hack Night' in association with
                Hacktoberfest was held in our campus.
              </CardText>
              <CardButton onClick={handleShow5}>Launch</CardButton>

              <Modal show={show5} onHide={handleClose5} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <a href="https://acmpesuecc.github.io/events/hacktober_fest.html">
                      What is HacktoberFest 2019?
                    </a>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  We, the members of ACM PESUECC Student Chapter conducted a
                  12-hour 'Open Source Hack Night' in association with
                  Hacktoberfest. Hacktoberfest is a month-long celebration of
                  open source software run by DigitalOcean in partnership with
                  GitHub and Twilio. It is an event to celebrate open source
                  contributions presented by Digital Ocean and DEV. Our main
                  objective was to promote open source contributions and provide
                  a platform for the participants to showcase their skills. The
                  participants were also part of a GSoC(mentor and panel
                  discussion partner) panel discussion and a brief on Open
                  Source Projects by Mozilla(community partners) employees. Our
                  food partner for the event was 'I am Vadapav.'
                  <hr />
                  Venue: PES University EC Campus
                  <br />
                  Duration: 12 hours (19th October 6PM - 20th October 6AM)
                  <br />
                  Number of Participants: 160
                </Modal.Body>
                <Modal.Footer>
                  <CardButton onClick={handleClose5}>Close</CardButton>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </CardContainer>
        </CardTotal>

        <CardTotal>
          <CardContainer>
            <Card.Img variant="top" src={Oss_Ses} />
            <Card.Body>
              <Card.Title>Open Source Workshop</Card.Title>
              <CardText>
                A workshop to teach the students about Git, Open Source
                Software.
              </CardText>
              <CardButton onClick={handleShow6}>Launch</CardButton>

              <Modal show={show6} onHide={handleClose6} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <a href="https://acmpesuecc.github.io/events/os_workshop.html">
                      What is the Open source workshop?
                    </a>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  We, the members of ACM PESUECC Student Chapter conducted an
                  Open source workshop to teach the students about the
                  importance of open source contributions and Git. The
                  paticipants were exposed to different terms such as
                  repositories, pull requests, commits, branches etc... Our main
                  objective was to promote open source contributions. The
                  participants were also given a brief about the HacktoberFest
                  event.
                  <hr /> Venue: PES University EC Campus
                  <br /> Duration: 2 hours (18th October 2019)
                  <br /> Number of Participants: 150
                </Modal.Body>
                <Modal.Footer>
                  <CardButton onClick={handleClose6}>Close</CardButton>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </CardContainer>
        </CardTotal>
      </EventPageContainer>
    </>
  );
}

export default EventsPage;
