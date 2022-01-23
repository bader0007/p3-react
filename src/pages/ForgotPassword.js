import { useContext } from "react";
import { Form, Col, Row, Button } from "react-bootstrap"
import StoriesContext from "../utils/StoriesContext"

function ForgotPassword() {
    const { forgotPassword } = useContext(StoriesContext)

    return (
        <div className="ms-4"><img src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923__340.png" style={{position: 'absolut', zIndex:-1, height:"100vh", width:"100vw", objectFit:"cover", left:"0"}}/>
            <h1>ForgotPassword</h1>
            <Form className="mt-5" onSubmit={forgotPassword}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column md="2">
                        Email
                    </Form.Label>
                    <Col md="6">
                        <Form.Control type="email" name="email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="my-4">
                    <Col md={{ span: 11, offset: 1}}>
                        <Button type="submit">Send Reset Password Link</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ForgotPassword