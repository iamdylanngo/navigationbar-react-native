"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const MyStatusBar = (props) => (<react_native_1.View style={[styles.statusBar, props.backgroundColor]}>
    <react_native_1.StatusBar barStyle={props.barStyle} backgroundColor={props.backgroundColor}/>
  </react_native_1.View>);
class NavigationBar extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (<react_native_1.View style={styles.container}>
        <MyStatusBar backgroundColor={this.props.statusBarStyle.backgroundColor} barStyle={this.props.statusBarStyle.barStyle}/>
        <react_native_1.View style={[
            styles.naviagtionBar,
            this.props.navigationBarStyle,
        ]}>
          {this.props.componentLeft()}
          {this.props.componentCenter()}
          {this.props.componentRight()}
        </react_native_1.View>
      </react_native_1.View>);
    }
}
NavigationBar.defaultProps = {
    statusBarStyle: {
        barStyle: 'light-content',
        backgroundColor: '#215e79',
    },
    navigationBarStyle: {
        backgroundColor: '#215e79',
    },
    componentLeft: () => <react_native_1.View style={{ flex: 1 }}/>,
    componentCenter: () => <react_native_1.View style={{ flex: 1 }}/>,
    componentRight: () => <react_native_1.View style={{ flex: 1 }}/>,
};
exports.default = NavigationBar;
const StatusBar_Height = react_native_1.Platform.OS === 'ios' ? 20 : 0;
const AppBar_Height = react_native_1.Platform.OS === 'ios' ? 44 : 56;
const styles = react_native_1.StyleSheet.create({
    container: {},
    statusBar: {
        height: StatusBar_Height,
    },
    naviagtionBar: {
        flexDirection: 'row',
        height: AppBar_Height,
        backgroundColor: '#215e79',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
