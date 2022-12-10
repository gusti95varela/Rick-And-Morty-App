import React from 'react';
import { validation } from './validation.js';
import image from '../assets/home2.jpg'
import styles from '../components/styles/Form.module.css'

export default function Form(props) {
    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    })

    const [errors, setErorrs] = React.useState({
        username: '',
        password: ''
    })

    function handleInputChange(e) {
        setUserData({...userData, [e.target.name] : e.target.value})
        setErorrs(validation({
            ...userData, [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
    }

    return (
        <div className={styles.display}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <p>Conectarse.</p>
                <h1>Bienvenidos de nuevo...</h1>
                <label htmlFor='username'>Username:</label>
                <input id="username" type="text" name="username" placeholder='Ingrese el usuario...' value={userData.username} onChange={handleInputChange}/>
                <p className={styles.errors}>{errors.username}</p>
                <label htmlFor="password">Password:</label>
                <input id='password' name='password' placeholder='*****' type="password" value={userData.password} onChange={handleInputChange}/>
                <p className={styles.errors}>{errors.password}</p>
                <input className={styles.button} type="submit" />           
            </form>

            <img src={image} alt="" />
        </div>
    )
}