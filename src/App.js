import Navbar from "./components/Navbar"
import "./App.css"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import StoriesContext from "./utils/StoriesContext"
import OneStory from "./pages/OneStory"
import OneOwner from "./pages/OneOwner"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { toast, ToastContainer } from "react-toastify"
import AllStories from "./pages/AllStories"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"

function App() {
  const [stories, setStories] = useState([])
  const [genres, setGenres] = useState([])
  const [owners, setOwners] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const getStories = async () => {
    const response = await axios.get("https://p3-api-1.herokuapp.com/api/stories")
    setStories(response.data)
  }

  const getGenres = async () => {
    const response = await axios.get("https://p3-api-1.herokuapp.com/api/genres")
    setGenres(response.data)
  }
  const getOwners = async () => {
    const response = await axios.get("https://p3-api-1.herokuapp.com/api/owners")
    setOwners(response.data)
  }

  const getProfile = async () => {
    const response = await axios.get("https://p3-api-1.herokuapp.com/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenStories,
      },
    })
    setProfile(response.data)
  }
  const addStory = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const storyBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        body: form.elements.body.value,
        genres: form.elements.genres.value,
        owner: form.elements.owner.value,
      }
      await axios.post(`https://p3-api-1.herokuapp.com/api/stories`, storyBody, {
        headers: {
          Authorization: localStorage.tokenStories,
        },
      })
      getStories()
      getProfile()
      toast.success("add story success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  useEffect(() => {
    getStories()
    getGenres()
    getOwners()

    if (localStorage.tokenStories) getProfile()
  }, [])

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }

      await axios.post("https://p3-api-1.herokuapp.com/api/auth/signup", userBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("https://p3-api-1.herokuapp.com/api/auth/login", userBody)

      const token = response.data
      localStorage.tokenStories = token

      getProfile()
      console.log("login success")

      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenStories")
    console.log("logout success")
  }

  const addRating = async (storyId, rating) => {
    try {
      const ratingBody = {
        rating,
      }
      await axios.post(`https://p3-api-1.herokuapp.com/api/stories/${storyId}/ratings`, ratingBody, {
        headers: {
          Authorization: localStorage.tokenStories,
        },
      })
      getStories()
      toast.success("Your rate is added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const storySearch = e => {
    e.preventDefault()
    const form = e.target
    const searchText = form.elements.storySearch.value

    const storyFound = stories.find(story => story.title === searchText)
    if (storyFound) return navigate(`/story/${storyFound._id}`)

    const ownerFound = owners.find(owner => `${owner.firstName} ${owner.lastName}` === searchText)
    if (ownerFound) return navigate(`/owner/${ownerFound._id}`)

    toast.error("not found")
  }

  const likeStory = async storyId => {
    try {
      const response = await axios.get(`https://p3-api-1.herokuapp.com/api/stories/${storyId}/likes`, {
        headers: {
          Authorization: localStorage.tokenStories,
        },
      })
      getStories()
      getProfile()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addComment = async (e, storyId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.post(`https://p3-api-1.herokuapp.com/api/stories/${storyId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenStories,
        },
      })
      getStories()
      toast.success("Comment added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editStory = async (e, storyId) => {
    e.preventDefault()
    try {
      const form = e.target
      const storyBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        body: form.elements.body.value,
        genres: form.elements.genres.value,
        owner: form.elements.owners.value,
      }
      await axios.put(`https://p3-api-1.herokuapp.com/api/stories/${storyId}`, storyBody, {
        headers: {
          Authorization: localStorage.tokenStories,
        },
      })
      getStories()
      toast.success("edit story success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteStory = async storyId => {
    try {
      await axios.delete(`https://p3-api-1.herokuapp.com/api/stories/${storyId}`, {
        headers: {
          Authorization: localStorage.tokenStories,
        },
      })
      toast.success("story deleted")
      navigate("/")
      getStories()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const forgotPassword = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
      }
      await axios.post("https://p3-api-1.herokuapp.com/api/auth/forgot-password", userBody)
      toast.success("password resent link is sent, go check your email")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const resetPassword = async (e, token) => {
    e.preventDefault()
    try {
      const form = e.target
      const password = form.elements.password.value
      const passwordConfirmation = form.elements.passwordConfirmation.value
      if (password !== passwordConfirmation) return toast.error("password is not matching")

      const userBody = {
        password,
      }
      await axios.post(`https://p3-api-1.herokuapp.com/api/auth/reset-password/${token}`, userBody)
      toast.success("password reset")
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    stories,
    owners,
    signup,
    addStory,
    genres,
    login,
    logout,
    profile,
    addRating,
    storySearch,
    likeStory,
    addComment,
    editStory,
    deleteStory,
    forgotPassword,
    resetPassword,
  }

  return (
    <StoriesContext.Provider value={store}>
      <ToastContainer />

      <Navbar />
      <Routes>
        <Route path="/" element={<AllStories />} />
        <Route path="/stories" element={<AllStories />} />
        <Route path="/story/:storyId" element={<OneStory />} />
        <Route path="/owner/:ownerId" element={<OneOwner />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </StoriesContext.Provider>
  )
}

export default App
