import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import StoriesContext from "../utils/StoriesContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"
import RatingStars from "../components/RatingStars"
import AddComment from "../components/AddComment"
import StoryEditModal from "../components/StoryEditModal"
import StoryDeleteModal from "../components/StoryDeleteModal"
import { useState } from "react"
import { red } from "@mui/material/colors"

function OneStory() {
  const { storyId } = useParams()
  const { stories, likeStory, profile } = useContext(StoriesContext)
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  if (stories.length === 0) return <h1>Loading...</h1>

  const story = stories.find(story => story._id === storyId)

  let liked = true
  if (profile) liked = story.likes.includes(profile._id)

  const isOwner = profile?._id === story.user
console.log(story)
  return (
    <>
      <Col>{isOwner ? <></> : null}</Col>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${story.poster}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={story.poster} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>

        <Col md={{ offset: 1 }}>
          <h1>{story.title}</h1>
          <div className="mb-2">
            <span>{story.genres.name}</span>
          </div>
          <h3>Rating</h3>
          <Row className="d-flex align-items-center">
            <Col md="2">
              <span>{story.ratingAverage.toFixed(1)} / 5</span>
              <span className="ms-2">({story.ratings.length})</span>
            </Col>

            <Col>
              <RatingStars storyId={story._id} />
              <Button style={{ backgroundColor: "black" }} className="ms-3" onClick={() => likeStory(story._id)}>
                {liked ? <MdFavorite style={{ color: "red" }} /> : <MdOutlineFavoriteBorder />}
              </Button>
            </Col>
          </Row>
          <h3>Overview</h3>
          <p>{story.description}</p>
         {profile?.role === "Admin" || story.user == profile?._id ?
          <Button
            style={{ marginRight: 5, marginBottom: 20, backgroundColor: "green", color: "white" }}
            onClick={() => setShowEdit(true)}
          >
            Edit
          </Button>
          : null
         }
          {profile?.role === "Admin" ? (
            <Button
              style={{ marginRight: 5, marginBottom: 20, backgroundColor: "red", color: "black" }}
              onClick={() => setShowDelete(true)}
            >
              Delete
            </Button>
          ) : null}
          <h3>Owner</h3>
          <p>
            <Link to={`/owner/${story.owner._id}`}>
              <Image src={story.owner.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
              <span style={{ marginLeft: 10, color: "white" }}>
                {story.owner.firstName} {story.owner.lastName}
              </span>
            </Link>
          </p>
        </Col>
      </Row>
      <>
      <Row className="mt-5">
          <h3>Body</h3>
          <p>{story.body}</p>

          </Row>
        <Row className="mt-5">
          <h3>Comments</h3>

          {story.comments.map(comment => (
            <Card style={{ margin: 20, maxWidth: 1100 }}>
              <Row>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col md="1">
                    <Image src={comment.owner.avatar} width="80px" roundedCircle />
                  </Col>
                  <Col>
                    {comment.owner.firstName} {comment.owner.lastName}
                  </Col>
                </Row>
                <Row>
                  <Col md={{ offset: 1 }}>{comment.comment}</Col>
                </Row>
              </Row>
            </Card>
          ))}
        </Row>
        {localStorage.tokenStories ? (
          <Row>
            <AddComment storyId={story._id} />
          </Row>
        ) : null}
      </>
      <StoryEditModal show={showEdit} setShow={setShowEdit} story={story} />
      <StoryDeleteModal show={showDelete} setShow={setShowDelete} storyId={story._id} />
    </>
  )
}

export default OneStory
