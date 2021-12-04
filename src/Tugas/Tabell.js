import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ bukus, editData, hapusData }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
      }}
    >
      <Table
        striped
        bordered
        hover
        style={{ backgroundColor: "lightgrey", textAlign: "center" }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#808080",
              textAlign: "center",
            }}
          >
            <th>No</th>
            <th>Nama Handphone</th>
            <th>QTY</th>
            <th>Harga Handphone</th>
            <th>Total Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bukus.map((hp, index) => {
            return (
              <tr key={index}>
                <td style={{ width: "50px" }}>{index + 1}.</td>
                <td>{hp.nama}</td>
                <td>{hp.qty}</td>
                <td>Rp.{hp.harga}</td>
                <td>Rp.{hp.qty * hp.harga}</td>
                <td>
                  <button
                    className="btn btn-light mr-1"
                    onClick={() => editData(hp.id)}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn btn-secondary mr 1"
                    onClick={() => hapusData(hp.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h3
        style={{
          backgroundColor: "#808080",
          textAlign: "center",
          padding: "8px",
          fontFamily: "Arvo",
          borderRadius: "3px",
          color: "white",
        }}
      >
        ~ Terima Kasih ~
      </h3>
    </div>
  );
};
export default Tabel;
