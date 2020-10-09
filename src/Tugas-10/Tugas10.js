import React from 'react';
import './main.css';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class Table extends React.Component{
    
    renderTableData() {
        return dataHargaBuah.map((dataHargaBuah) => {
            const {nama, harga, berat} = dataHargaBuah;
            return(
                <tr key={nama}>
                    <td>{nama}</td>
                    <td>{harga}</td>
                    <td>{berat/1000} Kg</td>
                </tr>
            );
        });
    }

    renderTableHeader(){
        let header = Object.keys(dataHargaBuah[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        });
    }

    render(){
        return(
            <div id="content">
                <h1 id="title">Tabel Harga Buah</h1>
                <div id="tabel">
                <table id="databuah">
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </table>
                </div>
            </div>
        )
    }
}

export default Table;