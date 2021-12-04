import React from "react";
import Navbar from "./Navbar";
import Tabell from "./Tabell";
import Formulir from "./Formulir";

export default class Crud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bukus: [],
      nama: "",
      qty: "",
      harga: "",
      total: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        bukus: [
          ...this.state.bukus,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            qty: this.state.qty,
            harga: this.state.harga,
            total: this.state.total,
          },
        ],
      });
    } else {
      const bukuYangSelainDiPilih = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) => {
          return filterBuku;
        });

      this.setState({
        bukus: [
          ...bukuYangSelainDiPilih,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            qty: this.state.qty,
            harga: this.state.harga,
            total: this.state.total,
          },
        ],
      });
    }
    this.setState({
      nama: "",
      qty: "",
      harga: "",
      total: "",
      id: "",
    });
  };

  editData = (id) => {
    const bukuYangDiPilih = this.state.bukus
      .filter((buku) => buku.id === id)
      .map((filterBuku) => {
        return filterBuku;
      });

    this.setState({
      nama: bukuYangDiPilih[0].nama,
      qty: bukuYangDiPilih[0].qty,
      harga: bukuYangDiPilih[0].harga,
      total: bukuYangDiPilih[0].total,
      id: bukuYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
      .filter((buku) => buku.id !== id)
      .map((filterBuku) => {
        return filterBuku;
      });
    this.setState({
      bukus: bukuBaru,
    });
  };

  render() {
    console.log(this.state.bukus);
    return (
      <div>
        <Navbar />
        <div
          className="container mt-4"
          //   style={{ backgroundColor: "lightgrey" }}
        >
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <br />
          <br />
          <Tabell
            bukus={this.state.bukus}
            editData={this.editData}
            hapusData={this.hapusData}
          />
        </div>
      </div>
    );
  }
}
