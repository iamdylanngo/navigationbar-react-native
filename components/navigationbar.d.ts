import * as React from 'react';
export interface MyStatusBarProps {
    backgroundColor: any;
    barStyle: any;
}
export interface NavigationBarProps {
    statusBarStyle: object;
    navigationBarStyle: object;
    componentLeft: any;
    componentCenter: any;
    componentRight: any;
}
export interface NavigationBarState {
}
export default class NavigationBar extends React.PureComponent<NavigationBarProps, NavigationBarState> {
    static defaultProps: Partial<NavigationBarProps>;
    constructor(props: NavigationBarProps);
    render(): JSX.Element;
}
