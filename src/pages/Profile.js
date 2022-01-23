import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"

import StoryItem from "./src/components/StoryItem"
import StoriesContext from "./src/utils/StoriesContext"

function Profile() {
  const { profile } = useContext(StoriesContext)
  if (!profile) return <h1>Loading...</h1>
  console.log(profile)
  return (
    <div className="profile" style={{  backgroundColor: "black", color: "white"}}>
    <Container>
      <Row
        style={{
          backgroundColor: `rgba(50,120,240, 9.9)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col md="5">
          <img variant="top" src={profile.avatar} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
          <p>{profile.email}</p>
        </Col>
      </Row>
        <h3>Favourite stories</h3>
       <Row className="mt-5" md="4">
        {profile.likes.map(story => (
          <StoryItem story={story} key={story._id} />
        ))}
      </Row> 
    </Container>
    </div>
  )
}

export default Profile
