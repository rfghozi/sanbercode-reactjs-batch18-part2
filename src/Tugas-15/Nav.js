import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                         <Link to="#">Kumpulan Tugas</Link>
                    </li>
                    <li>
                        <Link to="/">Tugas 9</Link>
                    </li>
                    <li>
                        <Link to="/tugas10">Tugas 10</Link>
                    </li>
                    <li>
                        <Link to="/tugas11">Tugas 11</Link>
                    </li>
                    <li>
                        <Link to="/tugas12">Tugas 12</Link>
                    </li>
                    <li>
                        <Link to="/tugas13">Tugas 13</Link>
                    </li>
                    <li>
                        <Link to="/tugas14">Tugas 14</Link>
                    </li>
                    <li>
                        <Link to="/tugas15">Tugas 15</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;