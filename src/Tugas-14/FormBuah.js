import React, {useContext, useState, useEffect} from "react"
import {DataBuahContext} from "./BuahContext"
import axios from "axios"

const FormBuah = () => {

    const [DataBuah, setDataBuah] = useContext(DataBuahContext) 
    const [Input, setInput] = useState({name: "", price: "", weight: 0})

    useEffect(() => {
        if (DataBuah.stat === "changeToEdit"){
            let buah = DataBuah.list.find(x => x.id === DataBuah.selID)
            setInput({name: buah.name, price: buah.price, weight: buah.weight})
            setDataBuah({...DataBuah, stat: "edit"})
        }
    }, [DataBuah, setDataBuah])

    const handleChange = (event) =>{
        let typeOfInput = event.target.name

        switch (typeOfInput){
        case "nama":
        {
            setInput({...Input, name: event.target.value});
            break
        }
        case "harga":
        {
            setInput({...Input, price: event.target.value});
            break
        }
        case "berat":
        {
            setInput({...Input, weight: event.target.value});
            break
        }
        default:
            {break;}
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        let name = Input.name
        let price = Input.price.toString()

        if (DataBuah.stat === "create") {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight: Input.weight})
            .then(res => {
                setDataBuah(
                    {stat: "create", selID: 0, 
                        list: [
                            ...DataBuah.list, {
                            id: res.list.id,
                            name: Input.name,
                            price: Input.price,
                            weight: Input.weight
                        }]
                    }
                )
            })
        } else if(DataBuah.stat === "edit"){
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${DataBuah.selID}`,{name, price, weight: Input.weight})
            .then(() => {
                let DataBuah = DataBuah.list.find(el => el.id === DataBuah.selID)
                DataBuah.name = Input.name
                DataBuah.price = Input.price
                DataBuah.weight = Input.weight
                setDataBuah({stat: "create", selID: 0, list: [...DataBuah.list]})
            })
        }
        setInput({name: "", price: "", weight: 0})
    }

    return (
        <div>
         <h2 style={{ textAlign:"center" }}>Data Buah Baru</h2>
         <form className="form" onSubmit={handleSubmit}>
            <span style={{ marginBottom:"8px" }}>
            <label className= "input1">
                    Nama
            </label>
            <input className="type" type="text" required name="nama" onChange={handleChange} value={Input.name} />
            </span>
            <span style={{ marginBottom:"8px" }}>
            <label className= "input2">
                    Harga
            </label>
            <input className="type" type="number" required name="harga" value={Input.price}  onChange={handleChange} />
            </span>
            <span style={{ marginBottom:"8px" }}>
            <label className= "input3">
                    Berat
            </label>
            <input className="type" type="number" required name="berat" value={Input.weight} onChange={handleChange} />
            </span>
            <span><button className="btn-submit">SUBMIT</button></span>
         </form>
        </div>
    )
    
}

export default FormBuah;