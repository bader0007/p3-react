import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"

function SignUp() {
  const { signup } = useContext(StoriesContext)

  return (
    <div className="ms-4"><img src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923__340.png" style={{position: 'absolute', zIndex:-1, height:"100vh", width:"100vw", objectFit:"cover", left:"0"}}/>
      <h1>Sign Up</h1>
      <Form className="mt-5" onSubmit={signup}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="1">
            First Name
          </Form.Label>
          <Col md="6">
            <Form.Control name="firstName" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="1">
            Last Name
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" name="lastName" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="1">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="1">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>

        { <Form.Group as={Row} className="mb-3">
          <Form.Label column md="1">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" name="avatar" required />
          </Col>
        </Form.Group> }
        <Row>
          {/* <Col md="8">{errorSignup !== null ? <Alert variant="danger">{errorSignup}</Alert> : null}</Col> */}
        </Row>
        <Form.Group as={Row} className="my-10">
          <Col md={{ span: 11, offset: 1 }}>
            <Button type="submit">Sign Up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp
