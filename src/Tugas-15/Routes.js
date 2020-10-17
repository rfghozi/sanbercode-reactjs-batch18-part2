  
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Form from '../Tugas-9/tugas9'
import Table from '../Tugas-10/tugas10'
import Timer from '../Tugas-11/tugas11'
import Table2 from '../Tugas-12/tugas12'
import HooksList from '../Tugas-13/tugas13'
import DataBuah from '../Tugas-14/DataBuah'
import Tugas15 from "./Tugas15";
import Nav from "./Nav"

export default function App({ themeToggler, theme }) {
    return (
        <Router>
            <Nav/>
                <Switch>
                    <Route exact path="/">
                        <Form />
                    </Route>
                    <Route exact path="/tugas10">
                        <Table />
                    </Route>
                    <Route exact path="/tugas11">
                        <Timer />
                    </Route>
                    <Route exact path="/tugas12">
                        <Table2 />
                    </Route>
                    <Route exact path="/tugas13">
                        <HooksList />
                    </Route>
                    <Route exact path="/tugas14">
                        <DataBuah />
                    </Route>
                    <Route exact path="/tugas15">
                        <Tugas15 themeToggler={themeToggler} theme={theme}/>
                    </Route>
                </Switch>
        </Router>
    );
}
