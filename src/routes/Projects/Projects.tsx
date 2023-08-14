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
                        Personal Chat Room or Workspace to share resources and hangout
                        with friends build with react.js, Material-UI, and Firebase. Have
                        features which allows user for realtime messaging, image sharing
                        as well as supports reactions on messages.
                    </p>
                    <div className={s.buttons}>
                        <button>GitHub</button>
                        <button>Demo</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img className={s.photo} src={blog} alt="photo of my project" />
                    <p>Social Network</p>
                    <p>
                        Personal Chat Room or Workspace to share resources and hangout
                        with friends build with react.js, Material-UI, and Firebase. Have
                        features which allows user for realtime messaging, image sharing
                        as well as supports reactions on messages.
                    </p>
                </div>
                <div className={s.card}>
                    <img className={s.photo} src={blog} alt="photo of my project" />
                    <p>Social Network</p>
                    <p>
                        Personal Chat Room or Workspace to share resources and hangout
                        with friends build with react.js, Material-UI, and Firebase. Have
                        features which allows user for realtime messaging, image sharing
                        as well as supports reactions on messages.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
