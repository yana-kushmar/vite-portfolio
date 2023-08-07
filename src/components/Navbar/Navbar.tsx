import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={style.wrapper}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
        </div>
    );
};
