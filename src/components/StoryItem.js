import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import OneOwner from "../pages/OneOwner"

function StoryItem(props) {
  const { story } = props
  if (!story) return null
  return (
    <Col>
      <Card border="light" style={{ maxWidth: "280px" }}>
        <Link to={`/story/${story._id}`}>
          <Card.Img variant="top" src={story.poster} height="320px" style={{ borderRadius: "60px" }} />
        </Link>
        <Card.Body>
          <Link to={`/story/${story._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title>{story.title}</Card.Title>
          </Link>
          <Card.Text className="text-muted">{story.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default StoryItem
