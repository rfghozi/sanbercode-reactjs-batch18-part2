import React from "react"
import FormBuah from "./FormBuah"
import ListBuah from "./ListBuah"
import { DataBuahProvider } from "./BuahContext"


const DataBuah = () =>{
    return(
        <DataBuahProvider>
            <ListBuah />
            <FormBuah />
        </DataBuahProvider>
    )
}

export default DataBuah