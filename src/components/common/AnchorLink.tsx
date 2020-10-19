import * as React from 'react';
import { Link } from 'gatsby';


type PropsType = {
    here: boolean,
    className: string,
    toHere?: string,
    toThere?: string,
    children?: React.ReactNode
};


const AnchorLink = (props: PropsType): JSX.Element => {
    if (props.here && !!props.toHere) return <a href={props.toHere} className={props.className}>{props.children}</a>
    if (!props.here && !!props.toThere) return <Link to={props.toThere} className={props.className}>{props.children}</Link>
    return <>{props.children}</>
};


export default AnchorLink;