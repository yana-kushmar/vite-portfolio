import s from './Footer.module.css';
import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const Footer = () => {
    return (
        <footer className={s.wrapper}>
            <p style={{ width: 320 }}>Designed and Developed by Yana Puzevich</p>

            <p>Copyright © 2023 YP</p>

            <div className={s.icons} style={{ width: 320 }}>
                <a href="https://github.com/yana-kushmar">
                    <div>
                        <GitHubLogoIcon />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/yana-puzevich-a1a867197/">
                    <div>
                        <LinkedInLogoIcon />
                    </div>
                </a>
                <a href="https://www.instagram.com/kusshmar/">
                    <div>
                        <InstagramLogoIcon />
                    </div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
