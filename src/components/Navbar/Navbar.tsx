import { Link } from 'react-router-dom';
import s from './Navbar.module.css';
import { HomeIcon, LaptopIcon, PersonIcon, ReaderIcon } from '@radix-ui/react-icons';

export const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <p className={s.logo}>Yp.</p>
            <div className={s.navbar}>
                <Link className={s.link} to="/">
                    <HomeIcon />
                    Home
                </Link>
                <Link className={s.link} to="/about">
                    <PersonIcon />
                    About
                </Link>
                <Link className={s.link} to="/projects">
                    <LaptopIcon />
                    Projects
                </Link>
                <Link className={s.link} to="/resume">
                    <ReaderIcon />
                    Resume
                </Link>
            </div>
        </div>
    );
};
