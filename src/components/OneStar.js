import { useContext } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { toast } from "react-toastify"
import StoriesContext from "../utils/StoriesContext"

function OneStar(props) {
  const { fill, setFill, starNumber, storyId, setShow } = props
  const { addRating } = useContext(StoriesContext)
  return starNumber <= fill ? (
    <AiFillStar
      size="25"
      style={{ color: "gold" }}
      onMouseOver={() => setFill(starNumber)}
      onClick={() => {
        if (localStorage.tokenStories) addRating(storyId, starNumber)
        else toast.error("please login first")
        setShow(false)
      }}
    />
  ) : (
    <AiOutlineStar size="25" onMouseOver={() => setFill(starNumber)} />
  )
}

export default OneStar
