import React from "react";
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar.jsx'
import styles from '../components/styles/Nav.module.css'

export default function Nav(props) {
    return (
        <div className={styles.Nav}>
            <Link to='home'>Home</Link>
            <Link to='/about'>About</Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}