import * as React from 'react';


import './coderenderer_desktop.scss';
import './coderenderer_tablet.scss';
import './coderenderer_phone.scss';


type PropsType = {
    lines: string[],
    specialWords: { [key: string]: string[] },
    activeIndex?: number
};

class CodeRenderer extends React.PureComponent<PropsType>
{
    constructor(props: Readonly<PropsType>)
    {
        super(props);

        this.styleLine = this.styleLine.bind(this);
    }

    styleLine(line: string): JSX.Element
    {
        if (line === '') return null;
    
        for (let key in this.props.specialWords) {
            if (key !== 'string') {
                for (let word of this.props.specialWords[key]) {
                    let index = line.indexOf(word);
                    if (index !== -1) {
                        line = line.replace(word, '');
                        return (
                            <>
                                {this.styleLine(line.substring(0, index))}
                                <span className={key}>{word}</span>
                                {this.styleLine(line.substring(index))}
                            </>
                        );
                    }
                }
            }
            else {
                let index1 = line.indexOf('"');
                if (index1 === -1) continue;
                let index2 = line.indexOf('"', index1 + 1);
                if (index2 === -1) continue;
                return (
                    <>
                        {this.styleLine(line.substring(0, index1))}
                        <span className={key}>{line.substring(index1, index2 + 1)}</span>
                        {this.styleLine(line.substring(index2 + 1))}
                    </>
                );
            }
        }
        return <>{line}</>;
    }

    render(): JSX.Element
    {
        return (
            <div className="wrapper">
                <ul className="code-container has-shadow">{this.props.lines.map((line, index) => (
                    <li key={index} className={`code-line ${index === this.props.activeIndex ? 'active' : ''}`}>{this.styleLine(line)}</li>
                ))}</ul>
            </div>
        );
    }
}

export default CodeRenderer;