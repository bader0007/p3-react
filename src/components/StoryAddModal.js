import { useContext } from "react"
import { Button, Col, Form, Image, /*ListGroup,*/ Modal, Row } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"
import OneOwner from "../pages/OneOwner"

function StoryAddModal(props) {
  const { show, setShow } = props
  const { genres, addStory, owners } = useContext(StoriesContext)
  console.log(owners)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addStory}>
        <Modal.Header closeButton>
          <Modal.Title>Add Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Body
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="body" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Genres
            </Form.Label>
            <Col md="8">
              {genres.map(genreObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="genres" value={genreObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{genreObject.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>

          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Owners
            </Form.Label>
            <Col md="8">
              {owners.map(ownerObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="owners" value={ownerObject._id} />
                  </Col>
                  <Col md="2">
                    <span>{ownerObject.firstName} {ownerObject.lastName}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group> */}

           { <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Owner
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {owners.map(owner => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="owner" value={owner._id} />
                  </Col>
                  <Col md="10">
                    <Image src={owner.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                      {owner.firstName} {owner.lastName}
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group> }
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add story
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default StoryAddModal  
