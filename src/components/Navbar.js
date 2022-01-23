import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import StoriesContext from "../utils/StoriesContext"

function NavbarItem() {
  const { logout, storySearch } = useContext(StoriesContext)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzm8Dk3dLdDMgcYx9b8Z3sfszfRqihe8pZg&usqp=CAU"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span> My Stories</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Link className="nav-link" to="/stories">
              Stories
            </Link>
            {/* <NavDropdown title="Story" id="basic-nav-dropdown"> 
              <Link className="dropdown-item" to="/heroes">
                Heroes
              </Link>

              <NavDropdown.Divider /> */}
              {/* <Link className="dropdown-item" to="/directors">
                Directors
              </Link> */}
            {/* </NavDropdown> */}
            {/* <div class="container">
              <div class="row ">
                <div class="col">
                  <div class="search d-flex justify-content-center align-items-center">
                    <i class="fa fa-search"></i>{" "}
                    <input type="text" class="form-control" placeholder="Have a question? Ask Now" />{" "}
                    <button class="btn btn-primary">Search</button>{" "}
                  </div>
                </div>
              </div>
            </div> */}
          </Nav>
          <Nav>
            <form class="d-flex" onSubmit={storySearch}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="storySearch"
              />
              <button class="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </Nav>
          {localStorage.tokenStories ? (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
