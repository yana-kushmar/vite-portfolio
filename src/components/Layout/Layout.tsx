import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import type { Engine, Container } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { particlesOptions } from './particles';
import Footer from '../Footer/Footer';

const Layout = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOptions}
            />

            <div
                style={{ zIndex: 1, position: 'relative' }}
                onClick={(e) => e.stopPropagation()}
            >
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default Layout;
