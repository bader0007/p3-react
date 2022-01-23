import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"

function StoryEditModal(props) {
  const { show, setShow, story } = props
  const { genres, editStory, owners, } = useContext(StoriesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editStory(e, story._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={story.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={story.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" defaultValue={story.poster} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Body
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="body" defaultValue={story.body} />
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
                    <Form.Check
                      type="radio"
                      name="genres"
                      defaultChecked={story.genres._id === genreObject._id}
                      value={genreObject._id}
                    />
                  </Col>
                  <Col md="2">
                    <span>{genreObject.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          { <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Owners
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {owners.map(owner => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="radio"
                      name="owners"
                      defaultChecked={story.owner._id === owner._id}
                      value={owner._id}
                    />
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
          </Form.Group>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default StoryEditModal     