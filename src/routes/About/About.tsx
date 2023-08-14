import about from '../../assets/about.png';
import s from './About.module.css';
import c from '../Home/Home.module.css';
import { DiCss3, DiJavascript1, DiReact } from 'react-icons/di';
import { BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import { SiAxios, SiJest, SiMui, SiPostman, SiWebpack, SiWebstorm } from 'react-icons/si';
import { TbBrandVite } from 'react-icons/tb';
import { BsGit, BsGithub } from 'react-icons/bs';
import GitHubCalendar from 'react-github-calendar';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaFigma } from 'react-icons/fa';

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
                            <span className={c.color}>
                                <b>Proficiency</b>
                            </span>{' '}
                            in core technologies like React, Redux, and TypeScript.
                        </p>
                        <p>
                            <span className={c.color}>
                                <b>Design Integration</b>
                            </span>
                            : Seamless integration of UI frameworks like MaterialUI.
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
                <p className={s.title}>
                    Professional
                    <span style={{ margin: '0 8px' }} className={c.color}>
                        Skillset
                    </span>
                </p>
                <div className={s.techIcons}>
                    <div className={s.icon}>
                        <DiJavascript1 />
                    </div>
                    <div className={s.icon}>
                        <DiReact />
                    </div>
                    <div className={s.icon}>
                        <BiLogoTypescript />
                    </div>
                    <div className={s.icon}>
                        <BiLogoRedux />
                    </div>
                    <div className={s.icon}>
                        <SiMui />
                    </div>
                    <div className={s.icon}>
                        <TbBrandVite />
                    </div>
                    <div className={s.icon}>
                        <BsGit />
                    </div>
                    <div className={s.icon}>
                        <SiJest />
                    </div>
                    <div className={s.icon}>
                        <SiAxios />
                    </div>
                    <div className={s.icon}>
                        <DiCss3 />
                    </div>
                    <div className={s.icon}>
                        <AiOutlineHtml5 />
                    </div>
                    <div className={s.icon}>
                        <SiWebpack />
                    </div>
                </div>
            </div>
            <div>
                <p className={s.title}>
                    <span style={{ margin: '0 8px' }} className={c.color}>
                        Tools
                    </span>{' '}
                    I use
                </p>
                <div className={s.techIcons}>
                    <div className={s.icon}>
                        <SiWebstorm />
                    </div>
                    <div className={s.icon}>
                        <SiPostman />
                    </div>
                    <div className={s.icon}>
                        <BsGithub />
                    </div>
                    <div className={s.icon}>
                        <FaFigma />
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <p className={s.title}>
                    Days I{' '}
                    <span style={{ margin: '0 8px' }} className={c.color}>
                        Code
                    </span>
                </p>
                <div className={s.gitHub}>
                    <GitHubCalendar
                        username="yana-kushmar"
                        theme={{
                            light: ['#fff', '#d100ff'],
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
