import React, { useContext, useEffect } from "react"
import {DataBuahContext} from "./BuahContext"
import axios from "axios"

const ListBuah = () => {
    const [DataBuah, setDataBuah] = useContext(DataBuahContext)

    useEffect( () => {
    if (DataBuah.lists === null){
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
            setDataBuah({
            ...DataBuah, 
            lists: res.data.map(el=>{ 
                return {id: el.id,
                name: el.name, 
                price: el.price, 
                weight: el.weight 
                }
            })
            })
        })
        }
    }, [setDataBuah, DataBuah])


    const handleEdit = (event) => {
        let idDataBuah = parseInt(event.target.value)
        setDataBuah({...DataBuah, selID: idDataBuah, stat: "changeToEdit"})
    }

     const handleDelete = (event) => {
        let idDataBuah = parseInt(event.target.value)

        let newList = DataBuah.list.filter(el => el.id !== idDataBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
        .then(res => { 
            console.log(res)
        })

        setDataBuah({...DataBuah, list: [...newList]})
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
                            DataBuah.list !== null && 
                            setDataBuah.list.map((item, index) => {
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
                        }

                    </tbody>
                </table>
                </div>
            </div>
    )
}

export default ListBuah