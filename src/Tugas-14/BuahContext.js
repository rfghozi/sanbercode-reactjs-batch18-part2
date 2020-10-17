import React, {useState, createContext} from "react";

export const DataBuahContext = createContext();

export const DataBuahProvider = (props) => {
        const [DataBuah, setDataBuah] = useState({
            list: null,
            selID: 0,
            stat: "create"
        });
    
    return (
        <DataBuahContext.Provider value={[DataBuah, setDataBuah]}>
            {props.children}
        </DataBuahContext.Provider>
    );
};
