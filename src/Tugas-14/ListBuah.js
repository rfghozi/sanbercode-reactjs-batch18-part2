import React, { useContext } from "react"
import {DaftarBuahContext} from "./BuahContext"
import axios from "axios"

const ListBuah = () => {
    const {DaftarBuah, setDaftarBuah, Input, setInput} = useContext(DaftarBuahContext)



     const handleDelete = (event) => {
        let idDaftarBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDaftarBuah}`)
        .then(() => { 
            setDaftarBuah(null)
        })
    }

    const handleEdit = (event) => {
        let idDaftarBuah = parseInt(event.target.value)
        axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idDaftarBuah}`)
        .then(res => {
            let DaftarBuah = res.data
            setInput({name: DaftarBuah.name, price: DaftarBuah.price, weight: DaftarBuah.weight, id: idDaftarBuah})
        })
    }

    return (
        <div id="content">
                <h1 id="title">Tabel Harga Buah</h1>
                <div id="tabel">
                <table id="databuah">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DaftarBuah !== null && (
                            setDaftarBuah.map((item, index) =>{
                                return(
                                    <tr key={index.id}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.weight/1000} Kg</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className="btn" value={item.id} onClick={handleEdit}>Edit</button>
                                            <button className="btn" value={item.id} onClick={handleDelete}>Delete</button>
                                        </td>
                                    </tr>
                                
                                )
                            })
                        )}

                    </tbody>
                </table>
                </div>
            </div>
    )
}

export default ListBuah