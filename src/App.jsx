import { Col, Row, Container, Button } from "react-bootstrap";
import IconButton from "./components/IconButton";
import ProfileHeader from "./components/ProfileHeader";
import { ProfileContext } from "./ProfileContext"
import { PROFILE_DATA } from "./data";
import ImageGrid from "./components/ImageGrid";
import AddPostModal from "./components/AddPostModel";
import { useState } from "react";



export default function App() {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true);;
  const closeModal = () => setShowModal(false);
  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col
          sm={1}
          className="d-flex flex-column justify-content-start align-items-centre vh-100 bg-light"
          style={{ position: "sticky", top: 0 }}>
          <IconButton isTop className={"instagram"} />
          <IconButton className={"house"} />
          <IconButton className={"search"} />
          <IconButton className={"compass"} />
          <IconButton className={"film"} />
          <IconButton className={"chat"} />
          <IconButton className={"heart"} />
          <IconButton className={"plus-square"} onClick={openModal} />
          <IconButton className={"person-circle"} />
          <IconButton isBottom className={"list"} />
        </Col>
        <Col sm={11}>
          <Container>
            <ProfileHeader />
            <ImageGrid />
            <AddPostModal show={showModal} handleClose={closeModal} />
          </Container>
        </Col>
      </Row >
    </ProfileContext.Provider>

  )
}