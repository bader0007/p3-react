import { useContext, useState } from "react"
import { Button, Row } from "react-bootstrap"
import StoryAddModal from "../components/StoryAddModal"
import StoryItem from "../components/StoryItem"
import StoriesContext from "../utils/StoriesContext"
import AddIcon from "@mui/icons-material/Add"


function AllStories() {
  const { stories } = useContext(StoriesContext)
  const [show, setShow] = useState(false)
  return (
    <div className="allstories" style={{  backgroundColor: "black", color: "white"}}>
      {localStorage.tokenStories ? (
        <div style={{ display: "flex", justifyContent: "flex-end", backgroundColor: "black"  }}>
          <Button style={{ marginRight: 5, marginBottom: 20, }} onClick={() => setShow(true)} variant="outline-primary">
            <AddIcon />
          </Button>
        </div>
      ) : null}
      <Row>
        <h4 className="mt-5 mb-4 ">All stories</h4>
      </Row>
      <Row md={4} >
        {stories.map(story => (
          <StoryItem story={story} key={story._id} />
        ))}
      </Row>
      <StoryAddModal show={show} setShow={setShow} />
    </div>
  )
}

export default AllStories  
 