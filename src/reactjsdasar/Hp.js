import React from 'react';

const makanans = [
    {
        nama: 'Samsung',
        QTY: 10,
        harga: 2700000
    },
    {
        nama: 'Oppo',
        QTY: 10,
        harga: 2200000
    },
    {
        nama: 'Apple',
        QTY: 10,
        harga: 3500000
    },
    {
        nama: 'Vivo',
        QTY: 10,
        harga: 2500000
    },
    {
        nama: 'Xiomi',
        QTY: 10,
        harga: 1900000
    },
    {
        nama: 'Realme',
        QTY: 10,
        harga: 2000000
    },
    {
        nama: 'Asus',
        QTY: 10,
        harga: 1800000
    },
    {
        nama: 'Huwawei',
        QTY: 10,
        harga: 1800000
    },
    {
        nama: 'Nokia',
        QTY: 10,
        harga: 1500000
    },
    {
        nama: 'Advan',
        QTY: 10,
        harga: 1600000
    },
    
]

const total_bayar = makanans.reduce((total_harga, makanan) => total_harga+makanan.harga, 0);

// .
const Map = () => {
    return ( 
        <div>
            <h2>Toko Handphone Snia</h2>
            <table >
                <tr>
                <th>No</th>
                <th>Handphone</th>
                <th>QTT</th>
                <th>Harga</th>
                <th>Total Harga</th>
                </tr>

                {makanans.map((makanan, index) =>(
                    <tr>
                       <td>{index + 1}.</td>
                        <td>{makanan.nama}</td>
                        <td>{makanan.QTY}</td>
                        <td>Rp.{makanan.harga}</td>
                        <td>{makanan.harga*makanan.QTY}</td>
                        </tr>
                    ))}
            </table>
            <h2> Harga Handphone dibawah  2.000.000</h2>
            <ul>
                {makanans.filter((makanan) => makanan.harga < 2000000)
                .map((makanan, index) =>( 
                       <p> {index + 1}. {makanan.nama} = RP. {makanan.harga}</p>
                    ))}
            </ul>
            <h1>Total Bayar: Rp.{total_bayar}</h1>
        </div>
    );
};
export default Map