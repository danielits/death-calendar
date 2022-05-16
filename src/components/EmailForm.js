import { Form, Button } from "react-bootstrap";

export const EmailForm = ({value, handlerChange}) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={value} onChange={handlerChange}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};
