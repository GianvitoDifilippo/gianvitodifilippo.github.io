import * as React from 'react';
import { Link } from 'gatsby';


type PropsType = {
    here?: boolean,
    className?: string,
    to?: string,
    toHere?: string,
    toThere?: string,
    children?: React.ReactNode
};


const AnchorLink = (props: PropsType): JSX.Element => {
    if (props.here && (!!props.toHere || !!props.to)) return <a href={props.toHere ?? props.to} className={props.className}>{props.children}</a>
    if (!props.here && (!!props.toThere || !!props.to)) return <Link to={props.toThere ?? props.to} className={props.className}>{props.children}</Link>
    return <>{props.children}</>
};


export default AnchorLink;