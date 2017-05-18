'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Video} from 'react-native-media-kit';

const HTTP = [
    'http://localhost:8085/video/broadchurch.mp4'
];

const HLS = [
    'https://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8',
    'http://cdn3.viblast.com/streams/hls/airshow/playlist.m3u8',
    'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8',
    'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
    'http://vevoplaylist-live.hls.adaptive.level3.net/vevo/ch3/appleman.m3u8',
    'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8',
    'http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8'
];


export default class App extends Component {

    _screenRotation(across) {
        console.log("update screen:"+across)
        if (across) {
            this.setState({
                width: height,
                height: width,
                marginTop:0,
            })
        } else {
            this.setState({
                width: width,
                height: width / (16 / 9),
                marginTop:22
            })
        }
    }

    state = {
        muted: false,
        width: width,
        height: width / (16 / 9),
        controls: true,
        marginTop:22
    };

    render() {
        return (
            <ScrollView
                style={{flex: 1, backgroundColor: '#efefef'}}>
                <Video
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                        marginTop:this.state.marginTop,
                        backgroundColor: 'black'
                    }}
                    autoplay={false}
                    preload='auto'
                    loop={false}
                    controls={this.state.controls}
                    muted={this.state.muted}
                    src={HTTP[0]}
                    screenRotation={this._screenRotation.bind(this)}
                />

            </ScrollView>
        );
    }
}