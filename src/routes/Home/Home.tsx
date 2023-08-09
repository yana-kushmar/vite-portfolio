import s from './Home.module.css';
import home from '../../assets/home-main.svg';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <main className={s.wrapper}>
            <div className={s.greeting}>
                <div>
                    <p>Hi There 👋🏻</p>
                    <p>
                        I'M <span className={s.name}>YANA PUZEVICH</span>
                    </p>

                    <p>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                strings: ['Junior Frontend Developer'],
                            }}
                        />
                    </p>
                </div>

                <img className={s.homeImg} src={home} alt="person writing the code" />
            </div>
            <div></div>
            <div></div>
        </main>
    );
};

export default Home;
