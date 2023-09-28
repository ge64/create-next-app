import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}><a href="/">Home</a></li>
                <li style={styles.navItem}><a target='_blank' href="https://github.com/ge64/create-next-app">Github</a></li>
                <li style={styles.navItem}><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '10px 20px'
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'space-around',
    },
    navItem: {
        display: 'inline-block',
        margin: '0 10px'
    }
}

export default Navbar;
