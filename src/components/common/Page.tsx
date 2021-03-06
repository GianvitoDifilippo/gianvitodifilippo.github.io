import * as React from 'react';

type StateType = {
    sectionSlugs: string[]
};


abstract class Page extends React.PureComponent<{}, StateType>
{
    constructor(props: Readonly<{}>)
    {
        super(props);

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
        this.setState({ sectionSlugs: this.getSectionSlugs(this.pageId) });
    }
};

export default Page;