import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Text,
  Image, TextInput, Button, TouchableOpacity
} from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class DarkTheme extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="#054071" barStyle="light-content" />
        
        <View style={styles.content}>
          <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
            <View style={{width: '100%', height: '20%', alignItems: 'center'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' , alignItems: 'center', marginTop: 20 }}>
                <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                style={{width: 40, height: 40, borderRadius: 80 / 2}} />
                <Text style={{ marginLeft: 20, color: 'white', fontSize: 24, textAlign: 'center', fontWeight: '700' }}>
                  COVERAGE PORTAL
                </Text>
                
              </View>
              <View style={{ borderWidth: 2, borderColor: '#1BA0F6', width: '40%', marginTop: 20 }}></View>
              <Text style={{ marginLeft: 10, color: '#1BA0F6', fontSize: 24, textAlign: 'center', fontWeight: '400', marginTop: 10 , letterSpacing: 3 }}>
                  WELCOME
                </Text>
            </View>
            <View style={{width: '100%', height: '40%', marginTop: 20}}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#999999"
                style={{ height: 50, backgroundColor: 'white', paddingHorizontal: 20, borderRadius: 3 }}
              />

              <TextInput
                placeholder="Password"
                placeholderTextColor="#999999"
                style={{ height: 50, backgroundColor: 'white', marginTop: 20, paddingHorizontal: 20, borderRadius: 3}}
              />

              <TouchableOpacity>
                <View style={{ height: 50, width: '100%', backgroundColor: '#1BA0F6', marginTop: 15, justifyContent: 'center', borderRadius: 3 }}>
                  <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: '600', letterSpacing: 0.5 }}>Sign in</Text>
                </View>
              </TouchableOpacity>

              <View style={{ marginTop: 20 }}>
                <Text style={{ color: 'white', fontSize: 13, textAlign: 'center' }}>
                  Forgot your login detail? Get help signing in.
                </Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: '32.5%', height: 50, justifyContent: 'center'}}>
                  <View style={{ borderWidth: 0.5, borderColor: '#6695BD', width: '100%' }}></View>
                </View>
                <View style={{width: '2.5%', height: 50}} />
                <View style={{width: '30%', height: 50, justifyContent: 'center'}}>
                  <Text style={{ color: '#65C6FD', fontSize: 13, textAlign: 'center' }}>
                    or sign in width
                  </Text>
                </View>
                <View style={{width: '2.5%', height: 50}} />
                <View style={{width: '32.5%', height: 50, justifyContent: 'center'}}>
                  <View style={{ borderWidth: 0.5, borderColor: '#6695BD', width: '100%' }}></View>
                </View>
              </View>
            </View>
            <View style={{width: '100%', height: '20%'}}>
                <TouchableOpacity>
                  <View style={{ height: 60, width: '100%', backgroundColor: '#3774A9', marginTop: 15, justifyContent: 'center', borderRadius: 3, borderColor: '#88ADCC', borderWidth: 3 }}>
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: '600', letterSpacing: 0.5 }}>Google</Text>
                  </View>
                </TouchableOpacity>
            </View>
            
          </View>
          <TouchableOpacity>
            <View style={{width: '100%', height: 100, position: 'absolute', bottom: 0, backgroundColor: '#1BA0F6', justifyContent: 'center'}}>
              <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: '500', letterSpacing: 0.5 }}>REGISTER FOR AN ACCOUNT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#0A5596',
  },
});