import React from 'react'
import SearchBar from './SearchBar'
import styles from "../stylesheets/Nav.module.css" 

const Nav = ({onSearch}) => {
    return (
        <div className={styles.nav}>
            <SearchBar onSearch={onSearch}  />
        </div>
    )
}

export default Nav