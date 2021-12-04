import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Formulir = ({ nama, qty, harga, handleChange, handleSubmit, id }) => {
  return (
    <div>
      <div className="mt-5" style={{ backgroundColor: "lightgrey" }}>
        <h1
          style={{
            backgroundColor: "#808080",
            textAlign: "center",
            padding: "8px",
            fontFamily: "Arvo",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          ~ SniaCell ~
        </h1>
        <Row>
          <Col></Col>
        </Row>
        <h4
          style={{
            backgroundColor: "#808080",
            textAlign: "center",
            padding: "10px",
            fontFamily: "Arvo",
            fontSize: "25px",
            color: "white",
          }}
        >
          {id ? "Edit Data" : "Tambah Data"}
        </h4>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} style={{ padding: "20px" }}>
              <Form.Group className="mb-3" controlId="nama">
                <Form.Label>Nama Handphone</Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  value={nama}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="qty">
                <Form.Label>QTY</Form.Label>
                <Form.Control
                  type="number"
                  rows="3"
                  name="qty"
                  value={qty}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="harga">
                <Form.Label>Harga Handphone</Form.Label>
                <Form.Control
                  type="number"
                  name="harga"
                  value={harga}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Formulir;
