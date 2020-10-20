import * as React from 'react';

type StateType = {
    sectionSlugs: string[]
};


abstract class Page extends React.PureComponent<{}, StateType>
{
    constructor(props: Readonly<{}>)
    {
        super(props);

        console.log('PAGE constructor');

        setup();

        this.state = {
            sectionSlugs: []
        };
    }

    abstract get pageId(): string;

    getSectionSlugs(pageId: string): string[]
    {
        let sections = document.getElementById(pageId).getElementsByTagName('section');

        return ([].map.call(sections, function(section: HTMLElement) {
            return section.id;
        }) as string[]);
    }

    componentDidMount(): void
    {
        console.log('PAGE did mount');

        this.setState({ sectionSlugs: this.getSectionSlugs(this.pageId) });
    }
};

function setup(): void
{
    if (typeof window !== 'undefined') {
        if (!window.localStorage.getItem('locale')) {
            var navigatorLang = navigator.language.split('-')[0];
            switch (navigatorLang) {
                case 'it':
                case 'en':
                    break;
                default:
                    navigatorLang = 'en';
                    break;
            }
            window.localStorage.setItem('locale', navigatorLang);
        }

        if (!window.localStorage.getItem('theme')) {
            window.localStorage.setItem('theme', 'blue');
        }

        if (window.localStorage.getItem('theme') === 'green') {
            document.body.classList.add('green-mode');
        }
    }
}

export default Page;