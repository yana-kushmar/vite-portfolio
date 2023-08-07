export const particlesOptions = {
    background: {
        color: {
            value: '#000000',
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'grab', // TODO: Implement mode onHover
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 10,
            },
        },
    },
    particles: {
        color: {
            value: '#d100ff',
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: true,
            speed: 2,
        },
        number: {
            density: {
                enable: true,
                area: 500,
            },
            value: 150,
        },
        opacity: {
            value: 0.4,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};
