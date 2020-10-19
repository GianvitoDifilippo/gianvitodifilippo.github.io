import * as React from 'react';

import './neon.scss';

type PropsType = {
    light?: boolean,
    faIcon?: boolean,
    children: React.ReactNode
};

const Neon = (props: Readonly<PropsType>) => {
    let className = (props.light ? 'neon1' : 'neon2') + (props.faIcon ? 'fa-icon' : '');
    return (
        <span className={className}>
            {props.children}
        </span>
    );
};

const NeonActivator = (props: { children: React.ReactNode }) => {
    const [ animated, setAnimated ] = React.useState(false);

    let className = 'neon_activator' + (animated ? ' animated' : '');
    return (
        <span className={className} onClick={() => setAnimated(true)} onAnimationEnd={() => setAnimated(false)}>
            {props.children}
        </span>
    );
}

export { Neon, NeonActivator };