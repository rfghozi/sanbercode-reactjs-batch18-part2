import React from "react"
import FormBuah from "./FormBuah"
import ListBuah from "./ListBuah"
import { DaftarBuahProvider } from "./BuahContext"


const DataBuah = () =>{
    return(
        <DaftarBuahProvider>
            <ListBuah />
            <FormBuah />
        </DaftarBuahProvider>
    )
}

export default DataBuah