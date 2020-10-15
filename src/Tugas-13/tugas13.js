import React, {useState, useEffect} from "react";
import axios from "axios"

const HooksList = () => {
    const [dataHargaBuah, setdataHargaBuah] = useState(null)
    const [input, setInput] =  useState({name: "", harga: "", berat: ""})

    useEffect( () =>{
        if (dataHargaBuah === null) {
            axios.get(' http://backendexample.sanbercloud.com/api/fruits')
            .then(res => {
                let dataHargaBuah = res.data
                setdataHargaBuah(
                    dataHargaBuah.map( el =>{
                        return {nama:el.name, harga:el.price, berat:el.weight}
                    })
                )

            })
        }
    },[dataHargaBuah])

    const submitForm = (event) => {
        event.preventDefault()

        if (input.nama === null){
            axios.post('http://backendexample.sanbercloud.com/api/fruits', {nama:input.name, harga:input.price, berat:input.weight})
            .then(res => {
                var data = res.data
                setdataHargaBuah([...dataHargaBuah, {nama: data.name, harga:data.price, berat:data.weight}])
                setInput({nama:"", harga:"", berat:""})
            })
        } else {
            axios.put('http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}', {nama: input.name})
            .then(res => {
                var dataBuah = dataHargaBuah.map(x => {
                    if (x.nama === input.name){
                        x.nama = input.name
                    }
                    return x
                })
                setdataHargaBuah(dataBuah)
                setInput({nama:"", harga:"", berat:""})
            })
        }
    }

    const handleDelete = (event) => {
        var nama = event.target.value
        axios.delete('http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}')
        .then(res => {
            var dataBuah = dataHargaBuah.filter(x => x.nama !== nama)
            setdataHargaBuah(dataBuah)
        })
    }

    const changeInputName = (event) => {
        var value = event.target.value
        setInput({...input, name: value})
    }

    const changeInputHarga = (event) => {
        var value = event.target.value
        setInput({...input, price: value})
    }

    const changeInputBerat = (event) => {
        var value = event.target.value
        setInput({...input, weight: value})
    }

    const handleEdit = (event) => {
        var nama = event.target.value
        var buah = dataHargaBuah.find(x => x.nama === nama)

        setInput({name: buah.nama, price: buah.harga, weight: buah.berat})
    }


    return (
        <>
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
                        {   dataHargaBuah !== null && (
                            dataHargaBuah.map((item, index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{item.nama}</td>
                                        <td>{item.harga}</td>
                                        <td>{item.berat/1000} Kg</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className="btn" value={item.nama} onClick={handleEdit}>Edit</button>
                                            <button className="btn" value={item.nama} onClick={handleDelete}>Delete</button>
                                        </td>
                                    </tr>
                                
                                )
                            })
                        )}

                    </tbody>
                </table>
                </div>
                <h2 style={{ textAlign:"center" }}>Data Buah Baru</h2>
                <form className="form" onChange={submitForm}>
                    <span style={{ marginBottom:"8px" }}>
                    <label className= "input1">
                        Nama
                    </label>
                    <input className="type" type="text" required name="nama" value={input.name} onChange={changeInputName} />
                    </span>
                    <span style={{ marginBottom:"8px" }}>
                    <label className= "input2">
                        Harga
                    </label>
                    <input className="type" type="number" required name="harga" value={input.price}  onChange={changeInputHarga} />
                    </span>
                    <span style={{ marginBottom:"8px" }}>
                    <label className= "input3">
                        Berat
                    </label>
                    <input className="type" type="number" required name="berat" value={input.weight} onChange={changeInputBerat} />
                    </span>
                    <span><button className="btn-submit">SUBMIT</button></span>
                </form>
            </div>
        </>
    )
}

export default HooksList;


// const handleNama = (event) => {
//     setinputNama(event.target.value);
// }

// const handleHarga = (event) => {
//     setinputHarga(event.target.value);
// }

// const handleBerat = (event) => {
//     setinputBerat(event.target.value);
// }

// const handleDelet = (event) => {
//     let index = event.targer.value;
//     let newdataHargaBuah = dataHargaBuah
//     let editData = newdataHargaBuah[indexOfForm]
//     newdataHargaBuah.splice(index, 1)

//     if (editData !== undefined) {
//         var newIndex = newdataHargaBuah.findIndex((el) => el === editData)
//         setindexOfForm(newIndex)
//     } else {
//         setdataHargaBuah([...newdataHargaBuah])
//     }
// }

// const handleEdit = (event) => {
//     let index = event.target.value;
//     let dataBuah = dataHargaBuah[index]
//     setinputNama(dataBuah)
//     setinputHarga(dataBuah)
//     setinputBerat(dataBuah)
//     setindexOfForm(index)
// }

// const handleSubmit = (event) => {
//     event.preventDefault()
//     let nama = inputNama
//     let harga = inputHarga
//     let Berat = inputBerat

//     if (nama.replace(/\s/g, '') !== "") {
//         let newdataHargaBuah = dataHargaBuah
//         let index = indexOfForm

//         if (index === -1){
//             newdataHargaBuah = [
//                 ...this.state.dataHargaBuah, this.state.buah,
//                    { nama: this.state.inputNama,
//                      harga: this.state.inputHarga,
//                      berat: this.state.inputBerat
//                 }];
//         }
//     }

//     useEffect(() => {
//         axios.get('http://backendexample.sanbercloud.com/api/fruits'
//         .then(res = > {
//             const newdataHargaBuah = res.data;
//         }))
//         return () => {
//             cleanup
//         }
//     }, [input])
// }

//    renderTableData() {
//         return(
//         <tr>
//             <td>{this.props.item.nama}</td>
//             <td>{this.props.item.harga}</td>
//             <td>{this.props.item.berat/1000} kg</td>
//         </tr>
//         )
//     }

//     render(){
//         return(
//             <div id="content">
//                 <h1 id="title">Tabel Harga Buah</h1>
//                 <div id="tabel">
//                 <table id="databuah">
//                     <thead>
//                         <tr>
//                             <th>Nama</th>
//                             <th>Harga</th>
//                             <th>Berat</th>
//                             <th>Aksi</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.dataHargaBuah.map((el, index) =>{
//                                 return(
//                                     <tr key={index}>
//                                         <td>{el.nama}</td>
//                                         <td>{el.harga}</td>
//                                         <td>{el.berat/1000} Kg</td>
//                                         <td style={{ textAlign: "center" }}>
//                                             <button className="btn" value={index} onClick={this.handleEdit}>Edit</button>
//                                             <button className="btn" value={index} onClick={this.handleDelete}>Delete</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })
//                         }

//                     </tbody>
//                 </table>
//                 </div>
//                 <h2 style={{ textAlign:"center" }}>Data Buah Baru</h2>
//                 <form className="form" onSubmit={this.handleSubmit}>
//                     <span style={{ marginBottom:"8px" }}>
//                     <label className= "input1">
//                         Nama
//                     </label>
//                     <input className="type" type="text" required name="nama" value={this.state.inputNama} onChange={this.handleNama} />
//                     </span>
//                     <span style={{ marginBottom:"8px" }}>
//                     <label className= "input2">
//                         Harga
//                     </label>
//                     <input className="type" type="number" required name="harga" value={this.state.inputHarga}  onChange={this.handleHarga} />
//                     </span>
//                     <span style={{ marginBottom:"8px" }}>
//                     <label className= "input3">
//                         Berat
//                     </label>
//                     <input className="type" type="number" required name="berat" value={this.state.inputBerat} onChange={this.handleBerat} />
//                     </span>
//                     <span><button className="btn-submit">SUBMIT</button></span>
//                 </form>
//             </div>
//         )
//     }

