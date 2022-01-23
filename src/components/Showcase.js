import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import bannerImage from "../assets/pexels-lucas-pezeta-2398354.jpg"
import StoriesContext from "../utils/StoriesContext"

function Showcase() {
  const { stories, storySearch, owners } = useContext(StoriesContext)

  return (
    <Row>
      <Col
        style={{
          backgroundImage: `url("${bannerImage}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="text-white mb-3">Welcome</h1>
        <h2 className="text-white"> Millions of movies, TV shows and people to discover. Explore now.</h2>
        <Form className="mt-5" onSubmit={storySearch}>
          <Row>
            <Col md="8">
              <Form.Group>
                <Form.Control
                  name="storySearch"
                  list="storySearch"
                  type="search"
                  placeholder="Search for a story, person"
                />
              </Form.Group>
              <datalist id="storySearch">
                {stories.map(story => (
                  <option value={story.title} />
                ))}
                {actors.map(actor => (
                  <option value={`${actor.firstName} ${actor.lastName}`} />
                ))}
                {directors.map(director => (
                  <option value={`${director.firstName} ${director.lastName}`} />
                ))}
              </datalist>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default Showcase
