import { useContext } from "react"
import { Col, Form, Button, Row, InputGroup } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"

function AddComment(props) {
  const { addComment } = useContext(StoriesContext)
  const { storyId } = props
  return (
    <div className="ms-4">
      <h1>Add Comment</h1>
      <Form className="mt-5" onSubmit={e => addComment(e, storyId)}>
        <Form.Group as={Row} className="mb-3" style={{ display: "flex", alignItems: "center" }}>
          <Form.Label column md="1">
            Comment
          </Form.Label>
          <Col md="8">
            <InputGroup>
              <Form.Control as="textarea" name="comment" required />
              <Button type="submit">Add</Button>
            </InputGroup>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddComment
