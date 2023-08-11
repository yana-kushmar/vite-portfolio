import about from '../../assets/about.png';
import s from './About.module.css';
import c from '../Home/Home.module.css';
import { DiJavascript1, DiReact } from 'react-icons/di';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';

const About = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <div>
                    <p className={s.whoI}>
                        KNOW WHO <span className={c.color}>I'M</span>
                    </p>
                    <div className={s.text}>
                        <p>
                            Hey there! It's Yana, straight out of BSUIR where I delved
                            into the <br />
                            intricacies of{' '}
                            <span className={c.color}>
                                Computer Science and Digital Marketing
                            </span>
                            .
                        </p>
                        <p> Here's a peek into what drives my development journey:</p>
                        <p>
                            <span className={c.color}>Proficiency</span> in core
                            technologies like React, Redux, and TypeScript.
                        </p>
                        <p>
                            <span className={c.color}>Design Integration</span>: Seamless
                            integration of UI frameworks like MaterialUI.
                        </p>
                        <p>
                            <span className={c.color}>Form Handling</span>: Efficient and
                            user-friendly form implementations using Formik.
                        </p>
                        <p>
                            <span className={c.color}>UI/UX Excellence</span>: A deep
                            understanding of user-centric design, influenced by my
                            background in digital marketing.
                        </p>
                        <p>Curious about my tech proficiency?</p>
                        <p>
                            Keep scrolling. And if you value design-driven development
                            with a touch of marketing flair, let's collaborate!
                        </p>
                    </div>
                </div>
                <img className={s.photo} src={about} alt="a person who writes code" />
            </div>

            <div>
                <p>
                    Professional <span className={c.color}>Skillset</span>
                </p>
                <div className={s.techIcons}>
                    <DiJavascript1 />
                    <DiReact />
                    <BiLogoTypescript />
                    <BiLogoRedux />
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default About;
