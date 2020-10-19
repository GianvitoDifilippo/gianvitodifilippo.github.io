import * as React from 'react';

interface PageData{
    sectionSlugs: string[]
    navThreshold?: number
};
type StateType = {
    pageData: PageData
};


abstract class Page extends React.PureComponent<{}, StateType>
{
    constructor(props: Readonly<{}>)
    {
        super(props);

        console.log('PAGE constructor');


        this.state = {
            pageData: {
                sectionSlugs: []
            }
        };
    }

    abstract get pageData(): PageData;

    componentDidMount(): void
    {
        console.log('PAGE did mount');

        this.setState({ pageData: this.pageData });
    }
};

export { PageData };
export default Page;