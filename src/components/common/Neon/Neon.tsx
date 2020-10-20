import * as React from 'react';

import './neon.scss';

type PropsType = {
    light?: boolean,
    children: React.ReactNode
};

const NeonConsumer = (props: Readonly<PropsType>) => {
    let className = props.light ? 'neon1' : 'neon2';
    return (
        <span className={className}>
            {props.children}
        </span>
    );
};

const NeonProvider = (props: { children: React.ReactNode }) => {
    const [ animated, setAnimated ] = React.useState(false);

    let className = 'neon_activator' + (animated ? ' animated' : '');
    return (
        <span className={className} onClick={() => setAnimated(true)} onAnimationEnd={() => setAnimated(false)}>
            {props.children}
        </span>
    );
}

const Neon = (props: Readonly<PropsType>) => {
    const [ animated, setAnimated ] = React.useState(false);

    let className = 'neon_activator' + (props.light ? ' neon1' : ' neon2') + (animated ? ' animated' : '');
    return (
        <span className={className} onClick={() => setAnimated(true)} onAnimationEnd={() => setAnimated(false)}>
            {props.children}
        </span>
    );
}

export { NeonConsumer, NeonProvider, Neon };