export const errLines = [
    '[HttpGet("{url}")]',
    'public async Task<IActionResult> GetContent(string url)',
    '{',
    '    if (url == "easteregg") {',
    '        return BadRequest("badrequest");',
    '    }',
    '    ',
    '    var content = await _router.GetPageAsync(url);',
    '    if (content == null) {',
    '        return NotFound("notfound");',
    '    }',
    '    ',
    '    content.Append("append");',
    '    return Ok(content);',
    '}'
];

export const errSpecialWords: { [key: string]: string[] } = {
    'keyword': [
        'public',
        'async',
        'await',
        'string',
        'var',
        'null'
    ],
    'flowcontrol': [
        'if',
        'return'
    ],
    'type': [
        'HttpGet',
        'Task',
        'IActionResult'
    ],
    'method': [
        'GetContent',
        'BadRequest',
        'GetPageAsync',
        'NotFound',
        'Append',
        'Ok'
    ],
    'string': [],
    'variable': [
        'url',
        'content',
        '_router'
    ]
};