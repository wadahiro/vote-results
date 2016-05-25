import * as React from 'react';
export interface Props extends React.Props<VoteResults> {
    data: {
        name: string;
        vote: number;
    }[];
    test: string;
}
export declare class VoteResults extends React.Component<Props, void> {
    render(): JSX.Element;
}
