import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

export const DaftarBuahContext = createContext();

export const DaftarBuahProvider = (props) => {
        let buah = {
        id: 0,
        name: "",
        price: "",
        weight: 0
    }
    const [DaftarBuah, setDaftarBuah, Input, setInput] = useState();

     useEffect( () => {
        if (DaftarBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDaftarBuah( res.data.map( el => {
                    return {
                        id: el.id,
                        name: el.name,
                        price: el.price,
                        weight: el.weight
                    }
                }))
            })
        }
    }, [DaftarBuah])

    return (
        <DaftarBuahContext.Provider value={[DaftarBuah, setDaftarBuah]}>
            {props.children}
        </DaftarBuahContext.Provider>
    );
};

export default DaftarBuahProvider;

// import React, {useState, useEffect} from "react"
// import axios from "axios"
// import './style.css';

// const DaftarBuah = () => {
//     const [daftarBuah, setDaftarBuah] = useState(null)
//     const [input, setInput] = useState({name: "", price: "", weight: 0, id: null})

//     useEffect( () => {
//         if (daftarBuah === null){
//             axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
//             .then(res => {
//                 setDaftarBuah(res.data.map(el => {
//                     return {
//                         id: el.id,
//                         name: el.name,
//                         price: el.price,
//                         weight: el.weight
//                     }
//                 }))
//             })
//         }
//     }, [daftarBuah])

//     const handleDelete = (event) => {
//         let idDataBuah = parseInt(event.target.value)
//         axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
//         .then(() => { 
//             setDaftarBuah(null)
//         })
//     }

//     const handleEdit = (event) => {
//         let idDataBuah = parseInt(event.target.value)
//         axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
//         .then(res => {
//             let dataBuah = res.data
//             setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: idDataBuah})
//         })
//     }

//     const handleChange = (event) => {
//         let typeOfInput = event.target.name

//         switch (typeOfInput ) {
//             case "name":
//                 {
//                     setInput({...input, name: event.target.value});
//                     break
//                 }
//             case "price":
//                 {
//                     setInput({...input, price: event.target.value});
//                     break
//                 }
//             case "weight":
//                 {
//                     setInput({...input, weight: event.target.value});
//                     break
//                 }
//             default:
//                 {break;}
//         }
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         let name = input.name
//         let price = input.price.toString()

//         if (input.id === null) {
//             axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight: input.weight})
//             .then(res => {
//                 setDaftarBuah([
//                     ...daftarBuah,
//                     {
//                         id: res.data.id,
//                         name,
//                         price,
//                         weight: input.weight
//                     }])
//             })
//         } else {
//             axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`,{name, price, weight: input.weight})
//             .then(() => {
//                 let dataBuah = daftarBuah.find(el => el.id === input.id)
//                 dataBuah.name = name
//                 dataBuah.price = price
//                 dataBuah.weight = input.weight
//                 setDaftarBuah([...daftarBuah])
//             })
//         }
//         setInput({name: "", price: "", weight: 0, id: null})
//     }

//     return (
//         <>
        // <div id="content">
        //         <h1 id="title">Tabel Harga Buah</h1>
        //         <div id="tabel">
        //         <table id="databuah">
        //             <thead>
        //                 <tr>
        //                     <th>No</th>
        //                     <th>Nama</th>
        //                     <th>Harga</th>
        //                     <th>Berat</th>
        //                     <th>Aksi</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {   daftarBuah !== null && (
        //                     daftarBuah.map((item, index) =>{
        //                         return(
        //                             <tr key={index}>
        //                                 <td>{index+1}</td>
        //                                 <td>{item.name}</td>
        //                                 <td>{item.price}</td>
        //                                 <td>{item.weight/1000} Kg</td>
        //                                 <td style={{ textAlign: "center" }}>
        //                                     <button className="btn" value={item.id} onClick={handleEdit}>Edit</button>
        //                                     <button className="btn" value={item.id} onClick={handleDelete}>Delete</button>
        //                                 </td>
        //                             </tr>
                                
        //                         )
        //                     })
        //                 )}

        //             </tbody>
        //         </table>
        //         </div>
        //         <h2 style={{ textAlign:"center" }}>Data Buah Baru</h2>
        //         <form className="form" onSubmit={handleSubmit}>
        //             <span style={{ marginBottom:"8px" }}>
        //             <label className= "input1">
        //                 Nama
        //             </label>
        //             <input className="type" type="text" required name="name" value={input.name} onChange={handleChange} />
        //             </span>
        //             <span style={{ marginBottom:"8px" }}>
        //             <label className= "input2">
        //                 Harga
        //             </label>
        //             <input className="type" type="number" required name="price" value={input.price}  onChange={handleChange} />
        //             </span>
        //             <span style={{ marginBottom:"8px" }}>
        //             <label className= "input3">
        //                 Berat
        //             </label>
        //             <input className="type" type="number" required name="weight" value={input.weight} onChange={handleChange} />
        //             </span>
        //             <span><button className="btn-submit">SUBMIT</button></span>
        //         </form>
        //     </div>
//         </>
//     )
// }

// export default DaftarBuah;