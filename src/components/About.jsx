import Reacet from "react";
import image from '../assets/about.jpg'
import styles from '../components/styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Bienvenidos a Rick And Morty App</h1>
            <img src={image} alt="" />
        </div>
    )
}