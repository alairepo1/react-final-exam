import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

export default class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 50.60254331180157,
                latitudeDelta: 0.2729186541296684,
                longitude: 16.721875704824924,
                longitudeDelta: 0.26148553937673924,
            }
        };
        this.onRegionChange = this.onRegionChange.bind(this);
    }

    randomRegion() {
        return {
            ...this.state.region,
            ...this.randomCoordinate(),
        };
    }

    animateRandom() {
        this.map.animateToRegion(this.randomRegion());
    }

    onRegionChange(region) {
        this.setState({
            region
        });
    }

    randomCoordinate() {
        const region = this.state.region;
        console.log(region.latitude + (Math.random() * 10) * (region.latitudeDelta / 2));
        return {
            latitude: region.latitude + (Math.random() * 10) * (region.latitudeDelta / 2),
            longitude: region.longitude + (Math.random() * 10) * (region.longitudeDelta / 2),
        };
    }

    render() {
        return (
            <View style={styles.container}>
            <MapView
            ref={ref => {
                this.map = ref;
            }}
            region={this.state.region}
            onRegionChangeComplete={this.onRegionChange}
            style={styles.map}
            />
            <View style={styles.buttonContainer}>
          <TouchableOpacity
            // onPress={() => this.animateRandom()}
            style={[styles.bubble, styles.button]}
            >
            <Text style={styles.buttonText}>Jump</Text>
          </TouchableOpacity>
          </View>
          </View>
        );
    }

}


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
    button: {
        width: 100,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonText: {
        textAlign: 'center',
    }
});