export const ucLines = [
    'const UnderConstruction = () => {',
    '    return (',
    '        <div id="underconstruction">',
    '            <div className="container">',
    '                <h1><Translate selector="underconstruction:h1"/></h1>',
    '                <h2><Translate selector="underconstruction:h2"/></h2>',
    '                <CodeRenderer lines={ucLines} specialWords={ucSpecialWords}/>',
    '            </div>',
    '        </div>',
    '    );',
    '}',
    ' ',
    'export default UnderConstruction;'
];

export const ucSpecialWords: { [key: string]: string[] } = {
    'string': [],
    'keyword': [
        'const',
        'return',
        'export',
        'default'
    ],
    'attribute': [
        'id',
        'className',
        'selector',
        'lines',
        'specialWords'
    ],
    'tag': [
        'div',
        'h1',
        'h2'
    ],
    'reacttag': [
        'Translate',
        'CodeRenderer'
    ],
    'angbrackets': [
        '<',
        '>',
        '/'
    ]
};