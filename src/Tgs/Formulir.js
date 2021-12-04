import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Handphone</Form.Label>
              <Form.Control type="text" name="nama" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" name="deskripsi" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga Handphone</Form.Label>
              <Form.Control type="number" name="harga" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
    //         <div className="mt-3">
    //             <Row>
    //                 <Col>
    //                 <h4>Tambah Data</h4>
    //                 <hr />
    //                 </Col>
    //             </Row>
    //         <Row>
    //         <Col>
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
    // </Col>
    // </Row>
    // </div>
  );
};
export default Formulir;
