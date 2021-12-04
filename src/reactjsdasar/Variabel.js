import React from 'react';

// const
// const harga = 3000;
// harga = 3000;
// const harga = 3000;

// var (menampilkan data sesuai kondisi)
// var harga = 20000;
// if (false) {
//     var harga = 30000;
// }

// let (menampilkan data sesuai variabel)
let harga = 20000;
if (true) {
        let harga = 30000;
}

const Variabel = () => {
    return ( 
        <div>
            <h2>Harga : {harga}</h2>
        </div>
    );
};
export default Variabel
