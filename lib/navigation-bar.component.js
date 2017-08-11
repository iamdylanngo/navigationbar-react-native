import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View, Platform,
  StatusBar,
} from 'react-native';

const MyStatusBar = ({ backgroundColor, barStyle }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      barStyle= {barStyle}
      backgroundColor={backgroundColor}
    />
  </View>
);

export class NavigationBar extends Component {
  render() {
    let { navigationBarStyle, componentLeft, componentCenter, componentRight } = this.props;
    console.log(componentLeft);
    return (
      <View style={styles.container}>
        <MyStatusBar
          backgroundColor={this.props.statusBarStyle.backgroundColor}
          barStyle={this.props.statusBarStyle.barStyle} />
        <View style={[
          styles.naviagtionBar,
          navigationBarStyle,
        ]}>
          {componentLeft}
          {componentCenter}
          {componentRight}
        </View>
      </View>
    );
  }
}

NavigationBar.propTypes = {
  statusBarStyle: PropTypes.object,
  navigationBarStyle: PropTypes.object,
  componentLeft: PropTypes.element,
  componentCenter: PropTypes.element,
  componentRight: PropTypes.element,
};

NavigationBar.defaultProps = {
  statusBarStyle: {
    barStyle: 'light-content',
    backgroundColor: '#215e79',
  },
  navigationBarStyle: {
    backgroundColor: '#215e79',
  },
  componentLeft: <View style={{ flex: 1 }} />,
  componentCenter: <View style={{ flex: 1 }} />,
  componentRight: <View style={{ flex: 1 }} />,
};


const StatusBar_Height = Platform.OS === 'ios' ? 20 : 0;
const AppBar_Height = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
  },
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
