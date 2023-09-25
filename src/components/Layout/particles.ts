export const particlesOptions = {
    background: {
        color: {
            value: '#18122B',
            // value: '#3A1078',
            // value: '#37306B',
            // value: '#000000',
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
            value: '#fff',
            // value: '#d100ff',
        },
        move: {
            enable: true,
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
            value: { min: 1, max: 2 },
        },
    },
    detectRetina: true,
};
