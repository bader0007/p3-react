import { useContext } from "react";
import { Form, Col, Row, Button } from "react-bootstrap"
import { useParams } from "react-router-dom";
import StoriesContext from "../utils/StoriesContext"

function ResetPassword() {
    const { resetPassword } = useContext(StoriesContext)
    const { token } = useParams()

    return (
        <div className="ms-4"><img src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923__340.png" style={{position: 'absolute', zIndex:-1, height:"100vh", width:"100vw", objectFit:"cover", left:"0"}}/>
            <h1>Reset Password</h1>
            <Form className="mt-5" onSubmit={e => resetPassword(e, token)}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column md="2">
                        Password
                    </Form.Label>
                    <Col md="6">
                        <Form.Control type="password" name="password" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="my-3">
                <Form.Label column md="2">
                    Password Confirmation
                </Form.Label>
                <Col md="6">
                    <Form.Control type="password" name="passwordConfirmation" required />
                </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="my-4">
                    <Col md={{ span: 11, offset: 1}}>
                        <Button type="submit">Reset Password</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ResetPassword