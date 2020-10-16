import React, {useContext} from "react"
import {DaftarBuahContext} from "./BuahContext"
import axios from "axios"

const FormBuah = () => {

    const {DaftarBuah, setDaftarBuah, Input, setInput} = useContext(DaftarBuahContext) 

    const handleChange = (e) => {
        const id = e.target.id
        const value = e.targer.value
        setInput({...Input,...{[id]: value} });

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let name = Input.name
        let price = Input.price.toString()

        if (Input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight: Input.weight})
            .then(res => {
                setDaftarBuah([
                    ...DaftarBuah,
                    {
                        id: res.data.id,
                        name,
                        price,
                        weight: Input.weight
                    }])
            })
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${Input.id}`,{name, price, weight: Input.weight})
            .then(() => {
                let dataBuah = DaftarBuah.find(el => el.id === Input.id)
                dataBuah.name = name
                dataBuah.price = price
                dataBuah.weight = Input.weight
                setDaftarBuah([...DaftarBuah])
            })
        }
        setInput({name: "", price: "", weight: 0, id: null})
    }

    return (
        <di>
         <h2 style={{ textAlign:"center" }}>Data Buah Baru</h2>
         <form className="form" onSubmit={handleSubmit}>
            <span style={{ marginBottom:"8px" }}>
            <label className= "input1">
                    Nama
            </label>
            <input className="type" type="text" required id="name" onChange={handleChange} value={Input.name} />
            </span>
            <span style={{ marginBottom:"8px" }}>
            <label className= "input2">
                    Harga
            </label>
            <input className="type" type="number" required id="price" value={Input.price}  onChange={handleChange} />
            </span>
            <span style={{ marginBottom:"8px" }}>
            <label className= "input3">
                    Berat
            </label>
            <input className="type" type="number" required id="weight" value={Input.weight} onChange={handleChange} />
            </span>
            <span><button className="btn-submit">SUBMIT</button></span>
         </form>
        </di>
    )
}

export default FormBuah