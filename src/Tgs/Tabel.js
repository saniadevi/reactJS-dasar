import React from "react";
import { Table } from "react-bootstrap";

const makanans = [
  {
    nama: "Samsung",
    QTY: 10,
    harga: 2700000,
  },
  {
    nama: "Oppo",
    QTY: 10,
    harga: 2200000,
  },
  {
    nama: "Apple",
    QTY: 10,
    harga: 3500000,
  },
  {
    nama: "Vivo",
    QTY: 10,
    harga: 2500000,
  },
  {
    nama: "Xiomi",
    QTY: 10,
    harga: 1900000,
  },
  {
    nama: "Realme",
    QTY: 10,
    harga: 2000000,
  },
  {
    nama: "Asus",
    QTY: 10,
    harga: 1800000,
  },
  {
    nama: "Huwawei",
    QTY: 10,
    harga: 1800000,
  },
  {
    nama: "Nokia",
    QTY: 10,
    harga: 1500000,
  },
  {
    nama: "Advan",
    QTY: 10,
    harga: 1600000,
  },
];

const total_bayar = makanans.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0
);

const Tabel = () => {
  return (
    <div>
      <h2
        style={{
          backgroundColor: "grey",
          textAlign: "center",
          padding: "8px",
          fontFamily: "Arvo",
          borderRadius: "3px",
        }}
      >
        ~ Toko Handphone Snia ~
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              backgroundColor: "grey",
              textAlign: "center",
              color: "white",
              fontFamily: "Serif",
            }}
          >
            <th>No</th>
            <th>Nama Handphone</th>
            <th>QTY</th>
            <th>Harga Handphone</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => (
            <tr style={{ backgroundColor: "lightgrey" }}>
              <td style={{ width: "10px" }}>{index + 1}.</td>
              <td>{makanan.nama}</td>
              <td>{makanan.QTY}</td>
              <td>Rp.{makanan.harga}</td>
              <td>{makanan.harga * makanan.QTY}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4
        style={{
          backgroundColor: "grey",
          textAlign: "right",
          padding: "5px",
          fontFamily: "Arvo",
          borderRadius: "3px",
        }}
      >
        Total Bayar: Rp.{total_bayar}
      </h4>
    </div>
  );
};
export default Tabel;
