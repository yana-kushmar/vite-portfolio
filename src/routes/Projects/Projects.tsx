import s from './Projects.module.css';
import c from '../Home/Home.module.css';
import blog from '../../assets/projects/blog.png';

const Projects = () => {
    return (
        <div className={s.wrapper}>
            <p>
                My Recent{' '}
                <span style={{ margin: '0 8px' }} className={c.color}>
                    Works
                </span>
            </p>
            <p>Here are a few projects I've worked on recently</p>
            <div className={s.cards}>
                <div className={s.card}>
                    <img className={s.photo} src={blog} alt="photo of my project" />
                    <p>Social Network</p>
                    <p>
                        Stack: React, TypeScript, Redux, redux-thunk, reselect,
                        styled-components, axios, formik, react-router
                    </p>
                    <div className={s.buttons}>
                        <a href="https://github.com/yana-kushmar/samurai-way">GitHub</a>
                    </div>
                </div>
                <div className={s.card}>
                    <img className={s.photo} src={blog} alt="photo of my project" />
                    <p>TodoList</p>
                    <p>
                        Stack: React, TypeScript, Redux, redux-thunk, storybook, axios,
                        formik, git, unit tests
                    </p>
                    <div className={s.buttons}>
                        <a href="https://github.com/yana-kushmar/Todolist-main">GitHub</a>
                    </div>
                </div>
                <div className={s.card}>
                    <img className={s.photo} src={blog} alt="photo of my project" />
                    <p>Portfolio</p>
                    <p>Stack: Vite, React, TypeScript, react-tsparticles, react-router</p>
                    <div className={s.buttons}>
                        <a href="https://github.com/yana-kushmar/vite-portfolio">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
