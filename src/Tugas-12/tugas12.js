import React from 'react';
import './style.css';

class Table2 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            inputNama : "",
            inputHarga: "",
            inputBerat: "",
            buah: {nama: "", harga: "", berat: ""},
            index: -1
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let index = this.state.index
        let buah = {
            nama: this.state.inputNama,
            harga: this.state.inputHarga,
            berat: this.state.inputBerat
        }
        let dataHargaBuah = this.state.dataHargaBuah

        if(index === -1) {
                this.setState({buah}, () => {
                    this.setState({
                    dataHargaBuah: [...this.state.dataHargaBuah, this.state.buah],
                    inputNama: "",
                    inputHarga: "",
                    inputBerat: ""
                });
            });
        } else {
            dataHargaBuah[index] = buah
            this.setState({ dataHargaBuah, inputNama: "", inputHarga: "", inputBerat: "", index: -1 })
        }
    }
        
    handleEdit = (event) => {
        let index = event.target.value;
        this.setState(
            { inputNama: this.state.dataHargaBuah[index].nama,
             inputHarga: this.state.dataHargaBuah[index].harga,
             inputBerat: this.state.dataHargaBuah[index].berat,
            index});
    
    }


    handleNama = (event) => {
        var value = event.target.value
        this.setState({
            inputNama: value
        });
    }

    handleHarga = (event) => {
        var value = event.target.value
        this.setState({
            inputHarga: value
        }); 
    }

    handleBerat = (event) => {
        var value = event.target.value
        this.setState({
            inputBerat: value
        });
    }

    handleDelete = (event) =>{
        let index = event.target.value;
        this.state.dataHargaBuah.splice(index, 1)
        this.setState({dataHargaBuah: this.state.dataHargaBuah})
    }


    
    renderTableData() {
        return(
        <tr>
            <td>{this.props.item.nama}</td>
            <td>{this.props.item.harga}</td>
            <td>{this.props.item.berat/1000} kg</td>
        </tr>
        )
    }

    render(){
        return(
            <div id="content">
                <h1 id="title">Tabel Harga Buah</h1>
                <div id="tabel">
                <table id="databuah">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataHargaBuah.map((el, index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{el.nama}</td>
                                        <td>{el.harga}</td>
                                        <td>{el.berat/1000} Kg</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className="btn" value={index} onClick={this.handleEdit}>Edit</button>
                                            <button className="btn" value={index} onClick={this.handleDelete}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                </div>
                <h2 style={{ textAlign:"center" }}>Data Buah Baru</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <span style={{ marginBottom:"8px" }}>
                    <label className= "input1">
                        Nama
                    </label>
                    <input className="type" type="text" required name="nama" value={this.state.inputNama} onChange={this.handleNama} />
                    </span>
                    <span style={{ marginBottom:"8px" }}>
                    <label className= "input2">
                        Harga
                    </label>
                    <input className="type" type="number" required name="harga" value={this.state.inputHarga}  onChange={this.handleHarga} />
                    </span>
                    <span style={{ marginBottom:"8px" }}>
                    <label className= "input3">
                        Berat
                    </label>
                    <input className="type" type="number" required name="berat" value={this.state.inputBerat} onChange={this.handleBerat} />
                    </span>
                    <span><button className="btn-submit">SUBMIT</button></span>
                </form>
            </div>
        )
    }
}

export default Table2;