import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import StoriesContext from "../utils/StoriesContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import RatingStars from "../components/RatingStars"
import AddComment from "../components/AddComment"
import StoryItem from "../components/StoryItem"
import Profile from "../pages/Profile"

function OneOwner() {
  const { ownerId } = useParams()
  const { owners, profile } = useContext(StoriesContext)

  if (owners.length === 0) return <h1>Loading...</h1>

  const owner = owners.find(owner => owner._id === ownerId)
  console.log(owner)
  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${owner.photo}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
          minHeight: 400,
        }}
      >
        <Col md="4">
          <img variant="top" src={owner.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>
            {owner.firstName} {owner.lastName}
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Stories</h3>
        {owner.stories.map(story => (
          <StoryItem story={story} key={story._id} />
        ))}
      </Row>
    </>
  )
}

export default OneOwner
