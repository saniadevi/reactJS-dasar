import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ bukus, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Buku</th>
          <th>Deskripsi</th>
          <th>Harga Buku</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {bukus.map((buku, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{buku.nama}</td>
              <td>{buku.deskripsi}</td>
              <td>Rp.{buku.harga}</td>
              <td>
                <button
                  className="btn btn-warning mr-1"
                  onClick={() => editData(buku.id)}
                >
                  Edit
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger mr 1"
                  onClick={() => hapusData(buku.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default Tabel;
//         <Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Username</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td colSpan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </Table>
