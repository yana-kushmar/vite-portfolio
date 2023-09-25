import s from './Home.module.css';
import home from '../../assets/home-main.svg';
import Typewriter from 'typewriter-effect';
import photo from '../../assets/photo2.png';
import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className={s.wrapper}>
            <div className={s.greeting}>
                <div>
                    <p>Hi There 👋🏻</p>
                    <p>
                        I'M <span className={s.color}>YANA PUZEVICH</span>
                    </p>

                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                            strings: ['Junior Frontend Developer'],
                        }}
                    />
                </div>
                <img className={s.homeImg} src={home} alt="person writing the code" />
            </div>
            <div className={s.intro}>
                <p className={s.intoTitle}>
                    LET ME
                    <span style={{ margin: '0 8px' }} className={s.color}>
                        INTRODUCE
                    </span>
                    MYSELF
                </p>
                <div className={s.introContent}>
                    <div>
                        <p>
                            I'm a frontend developer from BSUIR,
                            <br /> diving deep into digital marketing and computer
                            science.
                        </p>
                        <p>
                            My coding <span className={s.color}>toolkit</span>?
                            <br />
                            React, Redux JS Toolkit, TypeScript and etc.
                        </p>
                        <p>
                            When I'm not coding, you can find me engrossed in a book,
                            <br /> getting creative with needlework, or smashing levels in
                            Homescapes.
                        </p>
                        <p>Keen to see my work?</p>

                        <p>
                            Check out my{' '}
                            <Link to="/projects" className={s.color}>
                                portfolio
                            </Link>
                            ! <br /> And hey, if you're looking for a blend of tech and
                            art, let's chat!
                        </p>
                    </div>
                    <img className={s.photo} src={photo} alt="my photo" />
                </div>
            </div>
            <div className={s.connect}>
                <p>FIND ME ON</p>
                <p>
                    Feel free to <span className={s.color}>connect</span> with me
                </p>
            </div>
            <div className={s.icons}>
                <a href="https://github.com/yana-kushmar">
                    <div className={s.icon}>
                        <GitHubLogoIcon />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/yana-puzevich-a1a867197/">
                    <div className={s.icon}>
                        <LinkedInLogoIcon />
                    </div>
                </a>
                <a href="https://www.instagram.com/kusshmar/">
                    <div className={s.icon}>
                        <InstagramLogoIcon />
                    </div>
                </a>
            </div>
        </main>
    );
};

export default Home;
