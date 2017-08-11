## NavigationBar React Native
<p align="center">
    <img src ="" />
</p>

### Content
- [Installation](#installation)
- [Usage example](#usage-example)
- [Properties](#properties)
- [Events](#events)
- [Questions?](#questions)

### Installation
```bash
npm install navigationbar-react-native
```
### Usage example
```javascript

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  View, 
  TouchableOpacity,
} from 'react-native';
import NavigationBar from 'navigationbar-react-native';

const ComponentLeft = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-start'}} >
       <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
        <Image 
          source={require('./img/ic_back.png')}
          style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}
        />
        <Text style={{ color: 'white', }}>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};
const ComponentCenter = () => {
  return(
    <View style={{ flex: 1, }}>
       <Image
        source={require('./img/ic_logo.png')}
        style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
      />
    </View>
  );
};
const ComponentRight = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-end', }}>
      <TouchableOpacity>
        <Text style={{ color: 'white', }}> Right </Text>
      </TouchableOpacity>
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationHeader 
          componentLeft     =     {<ComponentLeft />}
          componentCenter   =     {<ComponentCenter />}
          componentRight    =     {<ComponentRight />}
          navigationBarStyle=     {{ backgroundColor: ''#215e79'' }}
          statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#215e79' }},
        />
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}
```

### Properties
* `statusBarStyle` (Object) - Style is object,
* `navigationBarStyle` (Object) - Style is object,
* `componentLeft` (Element) - Initial state (default: <View/>),
* `componentCenter` (Element) - Initial state (default: <View/>),
* `componentRight` (Element) - Initial state (default: <View/>),

### Events


### License
MIT License

### Questions?
Feel free to [create an issue](https://github.com/jundat95/navigationbar-react-native/issues)
