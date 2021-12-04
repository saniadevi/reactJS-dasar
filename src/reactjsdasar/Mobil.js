import React from 'react';
// import Uperan from './Uperan';

export default class Mobil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobil : 'BMW, Avanza, Pajero'
        }
    }

    gantiMobil = (mobil_baru) => {
      this.setState({
        mobil: mobil_baru
      })
    }
    render() {
        return (
            <div>
              <h2>{this.state.mobil}</h2>
              <button onClick={() => this.gantiMobil("BMW, Pajero")}>Ganti Mobil</button>
              {/* <Uperan makanan = {this.state.mobil}/> */}
            </div>
          )
        }
    }
