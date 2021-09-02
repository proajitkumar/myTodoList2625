import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.css';

const Navbar = () => {

    let [isShow, setIsShow] = useState(false);
    
    const onToggle = ()=> {
        const toggle = document.querySelector('ul');
        if(!isShow) {
            toggle.style.display = 'flex';
            setIsShow(true);
        }
        else {
            toggle.style.display = 'none';
            setIsShow(false);
        }
    }

    return (
        <nav id={styles.navbar}>
            <div id={styles.logo}>
                <h1>MyTodoList</h1>
                <div id={styles.toggle} onClick={onToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul id='navLinks'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
