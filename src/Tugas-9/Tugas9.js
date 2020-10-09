import React from 'react';

class Form extends React.Component{
    render(){
        return (
            <div className="App">
                <div
                    style={{
                    width: "450px",
                    margin: "0px auto",
                    border: "2px solid",
                    "border-radius": "5px",
                    padding: "20px",
                    }}>
            
                    <h1 style={{ textAlign:"center" }}>Form Pembelian Buah</h1><br/>
                    <div style={{ display: "flex" }}>
                        <label style = {{ fontWeight: "bold",}}>Nama Pelanggan </label>
                        <input type = "name" name = "nama" style = {{marginLeft: "30px"}}/>
                    </div>

                    <div style={{ display:"flex"}}>
                        <label style = {{ fontWeight: "bold", display:"inline", marginTop:"80px"}}>Daftar Item</label>
                        
                        <div style={{ display:"flex", flexDirection: "column", marginLeft:"60px", marginTop:"10px"}}>
                            <div style={{ display:"flex" }}>
                                <input type = "checkbox" name = "semangka" />
                                <label style={{ marginLeft:"10px", display:"inline-block" }}> Semangka </label>
                            </div>
                            <div style={{ display:"flex" }}>
                                <input type = "checkbox" name = "jeruk" />
                                <label style={{ marginLeft:"10px", display:"inline-block" }}> Jeruk </label>
                            </div>
                            <div style={{ display:"flex" }}>
                                <input type = "checkbox" name = "nanas" />
                                <label style={{ marginLeft:"10px", display:"inline-block" }}> Nanas </label>
                            </div>
                            <div style={{ display:"flex" }}>
                                <input type = "checkbox" name = "salak" />
                                <label style={{ marginLeft:"10px", display:"inline-block" }}> Salak </label>
                            </div>
                            <div style={{ display:"flex" }}>
                                <input type = "checkbox" name = "anggur" />
                                <label style={{ marginLeft:"10px", display:"inline-block" }}> Anggur </label>
                            </div>
                        </div>

                    </div>
                    <br/>
                    <button type="submit" class="submit-btn" style={{ borderRadius: "20px" }}>
                        Kirim
                    </button>

                </div>
            </div>
        );
    }
}

export default Form;