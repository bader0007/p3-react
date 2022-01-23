import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"

function StoryDeleteModal(props) {
  const { deleteStory } = useContext(StoriesContext)
  const { show, setShow, storyId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Story</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this story ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteStory(storyId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StoryDeleteModal