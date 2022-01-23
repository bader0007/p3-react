import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import StoriesContext from "../utils/StoriesContext"

function StoryList(props) {
  const { listTitle, genreType } = props
  const { stories } = useContext(StoriesContext)
  let storiesGenre
  if (genreType) {
    storiesGenre = stories.filter(story => story.genres.find(genre => genre.name === genreType))
  } else {
    storiesGenre = stories
  }

  storiesGenre = storiesGenre.sort((a, b) => b.ratingAverage - a.ratingAverage)
  storiesGenre = storiesGenre.slice(0, 7)
  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">{listTitle}</h4>
      </Row>
      <Row>
        {storiesGenre.map(story => (
          <Col key={story._id}>
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/story/${story._id}`}>
                <Card.Img variant="top" src={story.poster} height="220px" style={{ borderRadius: "10px" }} />
              </Link>
              <Card.Body>
                <Link to={`/story/${story._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{story.title}</Card.Title>
                </Link>
                <Card.Text className="text-muted">{story.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default StoryList
