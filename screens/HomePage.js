import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the Home Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomePage
